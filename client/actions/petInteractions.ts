import { ThunkAction } from '../store'
import { Inventory } from '../../Model/inventory'
import {
  getPetInteraction,
  updatePet,
  deleteInventoryItem,
} from '../apis/petInteractions'
import { PetIntData } from '../../Model/petInt'

export const SET_PETINTERACTION_PENDING = 'SET_PETINTERACTION_PENDING'
export const SET_PETINTERACTION_SUCCESS = 'SET_PETINTERACTION_SUCCESS'
export const SET_ERROR = 'SET_ERROR'

export interface PetInteractionData {
  pets: PetIntData[]
  inventory: Inventory[]
}

export type PetInteractionAction =
  | { type: typeof SET_PETINTERACTION_PENDING; payload: null }
  | { type: typeof SET_PETINTERACTION_SUCCESS; payload: PetInteractionData }
  | { type: typeof SET_ERROR; payload: string }

export function setPetInteractionsPending(): PetInteractionAction {
  return {
    type: SET_PETINTERACTION_PENDING,
    payload: null,
  }
}

export function setPetInteractionSuccess(
  data: PetInteractionData
): PetInteractionAction {
  return {
    type: SET_PETINTERACTION_SUCCESS,
    payload: { pets: data.pets, inventory: data.inventory },
  }
}

export function setError(errMessage: string): PetInteractionAction {
  return {
    type: SET_ERROR,
    payload: errMessage,
  }
}

// Fetch pet interaction data and update inventory
export function fetchPetInteraction(): ThunkAction {
  return async (dispatch) => {
    try {
      dispatch(setPetInteractionsPending())
      const { pets, inventory } = await getPetInteraction()
      dispatch(setPetInteractionSuccess({ pets, inventory }))
      // Handle success case
      console.log('Pet interaction data and inventory updated successfully!')
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setError(error.message))
        // Handle error case
        console.error(
          'Error fetching pet interaction data or updating inventory:',
          error
        )
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
      const { pets, inventory } = await getPetInteraction()
      // call another API function to delete inventory item
      dispatch(setPetInteractionSuccess({ pets: pets, inventory: inventory }))
      // Handle success case[]
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
