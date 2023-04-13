import request from 'superagent'
import { NewUser } from '../../Model/addUser'

export async function addDisplayname(name: NewUser) {
  try {
    await request.post('/api/v1/adduser').send({ ...name })
  } catch (err) {
    console.error(err)
    throw err
  }
}
