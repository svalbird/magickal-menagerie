import { ThunkAction } from '../store'
import { Inventory, NewInventoryItem } from '../../Model/inventory'
import {
  addInventoryItem,
  getInventoryData,
  deleteInventoryItem,
} from '../apis/petInteractions'

export const SET_INVENTORY_PENDING = 'SET_INVENTORY_PENDING'
export const SET_INVENTORY_SUCCESS = 'SET_INVENTORY_SUCCESS'
export const SET_ERROR = 'SET_ERROR'

export type InventoryAction =
  | { type: typeof SET_INVENTORY_PENDING; payload: null }
  | { type: typeof SET_INVENTORY_SUCCESS; payload: Inventory[] }
  | { type: typeof SET_ERROR; payload: string }

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

export function setError(errMessage: string): InventoryAction {
  return {
    type: SET_ERROR,
    payload: errMessage,
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
      console.log('Inventory data retrieved successfully!')
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setError(error.message))
        // Handle error case
        console.error('Error fetching inventory data:', error)
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

// Update pet interaction data and delete inventory item
export function spendInventoryItem(itemId: number): ThunkAction {
  return async (dispatch) => {
    try {
      await deleteInventoryItem(itemId)
      const inventory = await getInventoryData()
      // only fetch pet data
      dispatch(setInventorySuccess(inventory))
      // Handle success case
      console.log('Inventory item deleted successfully!')
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setError(error.message))
        // Handle error case
        console.error('Error deleting inventory item:', error)
      }
    }
  }
}
