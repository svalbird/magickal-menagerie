import { NewPet } from '../../Model/pet'

const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

export function addPetDB(
  newPet: NewPet,
  userId: number | string,
  db = connection
) {
  return db('pets').insert({
    user_id: userId,
    species_id: newPet.speciesId,
    name: newPet.name,
    xp_current: 0,
    hp_current: 100,
    hunger_current: 100,
    level: 1,
  })
}
