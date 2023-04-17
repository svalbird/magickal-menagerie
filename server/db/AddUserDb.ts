import { NewUser, AddUser } from '../../Model/addUser'

const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

export function getUserByID(
  auth0Id: string,
  db = connection
): Promise<AddUser> {
  return db('user')
    .where({ auth0_id: auth0Id })
    .select('user.auth0_id as auth0Id', 'user.*')
    .first()
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

export function updateUserWallet(user: AddUser, db = connection) {
  return db('user').where({ id: user.id }).update({ money: user.money })
}
