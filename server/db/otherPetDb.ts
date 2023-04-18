import { PetIntData } from '../../Model/petInt'
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

export function getPetByID(
  petId: number,
  db = connection
): Promise<PetIntData> {
  return db('pets')
    .join('user', 'pets.auth0_id', 'user.auth0_id')
    .join('species', 'pets.species_id', 'species.id')
    .where('pets.id', petId)
    .select(
      'pets.id as id',
      'pets.auth0_id as auth0Id',
      'species_id as speciesId',
      'pets.name as petName',
      'species.name as speciesName',
      'xp_current as xpCurrent',
      'hp_current as hpCurrent',
      'hunger_current as hungerCurrent',
      'level',
      'hp_max as hpMax',
      'hunger_max as hungerMax',
      'fave_food as faveFood',
      'species.image'
    )
    .first()
}

export function updateOtherPet(updatedPet: PetIntData, db = connection) {
  return db('pets')
    .where('id', updatedPet.id)
    .update({ hunger_current: updatedPet.hungerCurrent })
}
