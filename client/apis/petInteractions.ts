// how do i create api routes to match the actions in petInteractions.ts in the database folder?
import request from 'superagent'
import { PetData } from '../../Model/pet'
import { Inventory } from '../../Model/inventory'

const rootUrl = '/api/v1'

export async function getPetInteraction(): Promise<{
  pets: PetData[]
  inventory: Inventory[]
}> {
  const res = await request.get(`${rootUrl}/petInteraction`)
  return res.body
}

export async function updatePetInteraction(pet: PetData): Promise<PetData[]> {
  const res = await request.put(`${rootUrl}/petInteraction`).send(pet)
  return res.body
}

export async function deleteInventoryItem(id: number): Promise<PetData[]> {
  const res = await request.delete(`${rootUrl}/petInteraction/${id}`)
  return res.body
}
