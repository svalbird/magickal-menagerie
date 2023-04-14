import { NewUser } from '../../Model/addUser'

const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

export function getUserByID(user_id: string, db = connection) {
  return db('user').where({ auth0_id: user_id }).select().first()
}

export function addUser(
  auth0Id: string,
  displayName: NewUser,
  db = connection
) {
  return db('user').insert({
    auth0_id: auth0Id,
    display_name: displayName.displayName,
    money: 0,
  })
}