import { ThunkAction } from '../store'
import { Inventory, NewInventoryItem } from '../../Model/inventory'
import {
  addInventoryItem,
  getPetData,
  getInventoryData,
  updatePet,
  deleteInventoryItem,
} from '../apis/petInteractions'
import { PetIntData } from '../../Model/petInt'

export const SET_PETINTERACTION_PENDING = 'SET_PETINTERACTION_PENDING'
export const SET_PETINTERACTION_SUCCESS = 'SET_PETINTERACTION_SUCCESS'
export const SET_ERROR = 'SET_ERROR'

export const SET_INVENTORY_PENDING = 'SET_INVENTORY_PENDING'
export const SET_INVENTORY_SUCCESS = 'SET_INVENTORY_SUCCESS'

export type PetInteractionAction =
  | { type: typeof SET_PETINTERACTION_PENDING; payload: null }
  | { type: typeof SET_PETINTERACTION_SUCCESS; payload: PetIntData[] }
  | { type: typeof SET_ERROR; payload: string }

export type InventoryAction =
  | { type: typeof SET_INVENTORY_PENDING; payload: null }
  | { type: typeof SET_INVENTORY_SUCCESS; payload: Inventory[] }
  | { type: typeof SET_ERROR; payload: string }

export function setPetInteractionsPending(): PetInteractionAction {
  return {
    type: SET_PETINTERACTION_PENDING,
    payload: null,
  }
}

export function setPetInteractionSuccess(
  data: PetIntData[]
): PetInteractionAction {
  return {
    type: SET_PETINTERACTION_SUCCESS,
    payload: data,
  }
}

export function setInventoryPending(): InventoryAction {
  return {
    type: SET_INVENTORY_PENDING,
    payload: null,
  }
}

export function setInventorySuccess(data: Inventory[]): InventoryAction {
  return {
    type: SET_INVENTORY_SUCCESS,
    payload: data,
  }
}

export function setError(
  errMessage: string
): PetInteractionAction | InventoryAction {
  return {
    type: SET_ERROR,
    payload: errMessage,
  }
}

// Fetch pet interaction data
export function fetchPetData(): ThunkAction {
  return async (dispatch) => {
    try {
      dispatch(setPetInteractionsPending())
      const pets = await getPetData()
      dispatch(setPetInteractionSuccess(pets))
      // Handle success case
      console.log('Pet interaction data updated successfully!')
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setError(error.message))
        // Handle error case
        console.error('Error fetching pet interaction data:', error)
      }
    }
  }
}

// Add new item
export function addNewItem(item: NewInventoryItem): ThunkAction {
  return async (dispatch) => {
    try {
      await addInventoryItem(item)
      const inventory = await getInventoryData()
      dispatch(setInventorySuccess(inventory))
      // Handle success case
      console.log('New inventory item added successfully!')
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setError(error.message))
        // Handle error case
        console.error('Error adding new inventory item:', error)
      }
    }
  }
}

// Fetch inventory data
export function fetchInventory(): ThunkAction {
  return async (dispatch) => {
    try {
      dispatch(setInventoryPending())
      const inventory = await getInventoryData()
      dispatch(setInventorySuccess(inventory))
      // Handle success case
      console.log('Inventory data updated successfully!')
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setError(error.message))
        // Handle error case
        console.error('Error fetching inventory data:', error)
      }
    }
  }
}

// Update pet interaction data and delete inventory item
export function updatePetInteractionAndDeleteInventoryItem(
  pet: PetIntData,
  itemId: number
): ThunkAction {
  return async (dispatch) => {
    try {
      console.log('pet', pet)
      await updatePet(pet)
      await deleteInventoryItem(itemId)
      const pets = await getPetData()
      const inventory = await getInventoryData()
      // only fetch pet data
      dispatch(setInventorySuccess(inventory))
      dispatch(setPetInteractionSuccess(pets))
      // Handle success case
      console.log(
        'Pet interaction data updated and inventory item deleted successfully!'
      )
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setError(error.message))
        // Handle error case
        console.error(
          'Error updating pet interaction data or deleting inventory item:',
          error
        )
      }
    }
  }
}
