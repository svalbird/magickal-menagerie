import request from 'superagent'
import { PetIntData } from '../../Model/petInt'

export async function getPetByID(petId: number): Promise<PetIntData> {
  const response = await request.get(`/api/v1/otherPet/${petId}`)  
  return response.body
}

export async function updateOtherPet(updatedPet: PetIntData) {
  const response = await request.patch(`/api/v1/otherPet`).send(updatedPet)
  if (response.statusCode !== 200) {
    throw Error()
  }
}
