const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)
import { SpeciesData } from '../../Model/species'

export function speciesInfo(db = connection): Promise<SpeciesData[]> {
  return db('species').select()
}
