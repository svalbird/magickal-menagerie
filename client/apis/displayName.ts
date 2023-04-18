import request from 'superagent'
import { NewUser } from '../../Model/addUser'

export async function checkUserData(token: string): Promise<boolean> {
  const response = await request
    .get('api/v1/adduser')
    .set('Authorization', `Bearer ${token}`)
  return response.body.exists
}

export async function addDisplayname(name: NewUser, token: string) {
  try {
    await request
      .post('/api/v1/adduser')
      .set('Authorization', `Bearer ${token}`)
      .send({ ...name })
  } catch (err) {
    console.error(err)
    throw err
  }
}
