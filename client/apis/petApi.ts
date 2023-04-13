import request from 'superagent'
import { NewPet } from '../../Model/pet'

export async function addPet(pet: NewPet) {
  try {
    await request.post('/api/v1/pet').send({ ...pet })
  } catch (err) {
    console.error(err)
    throw err
  }
}
