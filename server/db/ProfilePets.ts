import { AllPets } from '../../Model/pet'

const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

export function getAllPetsInfo(db = connection): Promise<AllPets[]> {
  return db('pets')
    .join('user', 'pets.auth0_id', 'user.auth0_id') // TODO: change this to 'user.auth0Id'
    .join('species', 'pets.species_id', 'species.id')
    .select(
      'pets.id as id',
      'pets.auth0_id as auth0Id',
      'user.display_name as userDisplayName',
      'species_id as speciesId',
      'pets.name as petName',
      'species.image as petImage',
      'species.name as speciesName',
      'species.hp_max as hpMax',
      'species.hunger_max as hungerMax',
      'xp_current as xpCurrent',
      'hp_current as hpCurrent',
      'hunger_current as hungerCurrent',
      'level'
    )

    .orderBy('pets.id')
}
