import request from 'superagent'
import { NewPet } from '../../Model/pet'

export async function addPet(pet: NewPet, token: string) {
  try {
    await request
      .post('/api/v1/pet')
      .set('Authorization', `Bearer ${token}`)
      .send({ ...pet })
  } catch (err) {
    console.error(err)
    throw err
  }
}
