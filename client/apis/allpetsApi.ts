import request from 'superagent'
import { AllPets } from '../../Model/pet'

export async function getAllPets(): Promise<AllPets[]> {
  try {
    const response = await request.get('/api/v1/profiles')

    return response.body
  } catch (err) {
    console.error(err)
    throw err
  }
}
