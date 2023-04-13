import {
  SET_SPECIES_PENDING,
  SET_SPECIES_SUCCESS,
  SET_ERROR,
  SpeciesAction,
} from '../actions/speciesActions'
import { SpeciesData } from '../../Model/species'

interface SpeciesState {
  loading: boolean
  error: string | null
  data: SpeciesData[] | []
}

const initialState: SpeciesState = {
  loading: false,
  error: null,
  data: [],
}

const speciesReducer = (
  state = initialState,
  action: SpeciesAction
): SpeciesState => {
  switch (action.type) {
    case SET_SPECIES_PENDING:
      return {
        loading: true,
        error: null,
        data: [],
      }
    case SET_SPECIES_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      }
    case SET_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      }
    default:
      return state
  }
}

export default speciesReducer
