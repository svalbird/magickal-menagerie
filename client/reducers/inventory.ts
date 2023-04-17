import { Inventory } from '../../Model/inventory'
import {
  InventoryAction,
  SET_INVENTORY_PENDING,
  SET_INVENTORY_SUCCESS,
  SET_ERROR,
} from '../../client/actions/inventory'

const intialState: InventoryState = {
  data: null,
  loading: false,
  error: null,
}

type InventoryState = {
  data: Inventory[] | null
  loading: boolean
  error: string | null
}

function inventory(
  state = intialState,
  action: InventoryAction
): InventoryState {
  switch (action.type) {
    case SET_INVENTORY_PENDING:
      return {
        data: null,
        loading: true,
        error: null,
      }
    case SET_INVENTORY_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: null,
      }
    case SET_ERROR:
      return {
        data: null,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default inventory
