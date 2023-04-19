import { PetIntData } from '../../Model/petInt'
import {
  OTHER_PET_PENDING,
  OTHER_PET_SUCCESS,
  SET_ERROR,
  OtherPetAction,
} from '../actions/otherPetActions'

interface OtherPetState {
  loading: boolean
  error: string | null
  data: PetIntData | null
}

const initialState: OtherPetState = {
  loading: false,
  error: null,
  data: null,
}

const otherPetReducer = (
  state = initialState,
  action: OtherPetAction
): OtherPetState => {
  switch (action.type) {
    case OTHER_PET_PENDING:
      return {
        loading: true,
        error: null,
        data: null,
      }
    case OTHER_PET_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      }
    case SET_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: null,
      }
    default:
      return state
  }
}

export default otherPetReducer
