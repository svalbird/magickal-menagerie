// how do i create api routes to match the actions in petInteractions.ts in the database folder?
import request from 'superagent'
import { PetIntData } from '../../Model/petInt'
import { Inventory, NewInventoryItem } from '../../Model/inventory'

const rootUrl = '/api/v1'

export async function getPetData(token: string): Promise<PetIntData[]> {
  try {
    const res = await request
      .get(`${rootUrl}/petInteraction/pet`)
      .set('Authorization', `Bearer ${token}`)
    return res.body
  } catch (err) {
    console.error(err)
    throw err
  }
}

export async function addInventoryItem(
  item: NewInventoryItem
): Promise<Inventory[]> {
  const res = await request
    .post(`${rootUrl}/petInteraction/addInventoryItem`)
    .send(item)
  return res.body.inventory
}

export async function getInventoryData(token: string): Promise<Inventory[]> {
  try {
    const res = await request
      .get(`${rootUrl}/petInteraction/inv`)
      .set('Authorization', `Bearer ${token}`)
    return res.body
  } catch (err) {
    console.error(err)
    throw err
  }
}

export async function updatePet(pet: PetIntData): Promise<PetIntData[]> {
  try {
    const res = await request.put(`${rootUrl}/petInteraction`).send(pet)
    return res.body
  } catch (err) {
    console.error(err)
    throw err
  }
}

export async function deleteInventoryItem(id: number): Promise<PetIntData[]> {
  try {
    const res = await request.delete(`${rootUrl}/petInteraction/${id}`)
    return res.body
  } catch (err) {
    console.error(err)
    throw err
  }
}
