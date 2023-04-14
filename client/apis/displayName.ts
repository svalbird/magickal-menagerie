import request from 'superagent'
import { NewUser } from '../../Model/addUser'

export async function checkUserData(token: string): Promise<boolean> {
  try {
    const response = await request
      .get('api/v1/adduser')
      .set('Authorization', `Bearer ${token}`)
    return response.body.exists
  } catch (err) {
    console.error(err)
    throw err
  }
}

export async function addDisplayname(name: NewUser) {
  try {
    await request.post('/api/v1/adduser').send({ ...name })
  } catch (err) {
    console.error(err)
    throw err
  }
}
