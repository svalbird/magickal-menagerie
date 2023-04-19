import { PetIntData } from '../../Model/petInt'
import {
  PetInteractionAction,
  SET_PETINTERACTION_PENDING,
  SET_PETINTERACTION_SUCCESS,
  SET_ERROR,
} from '../../client/actions/petInteractions'

const intialState: PetInteractionState = {
  data: null,
  loading: false,
  error: null,
}

type PetInteractionState = {
  data: PetIntData[] | null
  loading: boolean
  error: string | null
}

function petInteraction(
  state = intialState,
  action: PetInteractionAction
): PetInteractionState {
  switch (action.type) {
    case SET_PETINTERACTION_PENDING:
      return {
        data: null,
        loading: true,
        error: null,
      }
    case SET_PETINTERACTION_SUCCESS:
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

export default petInteraction