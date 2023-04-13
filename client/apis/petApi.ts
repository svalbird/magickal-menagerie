// /api/v1/pet post
import request from 'superagent'
import { NewPet } from '../../Model/pet'

export async function addPet(pet: NewPet) {
  try {
    console.log('api is working')
    await request.post('/api/v1/pet').send({ ...pet })
  } catch (err) {
    console.error(err)
    throw err
  }
}
