import request from 'superagent'
import { AddUser } from '../../Model/addUser'

export async function getUserByID(token: string): Promise<AddUser> {
  const response = await request
    .get('api/v1/wallet')
    .set('Authorization', `Bearer ${token}`)
  return response.body
}

export async function updateUserWallet(user: AddUser) {
  const response = await request.patch('api/v1/wallet').send(user)
  if (response.statusCode !== 200) {
    throw Error()
  }
}
