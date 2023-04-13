import { ThunkAction } from '../store'
import { AllPets } from '../../Model/pet'
import { getAllPets } from '../apis/allpetsApi'

export const ALLPETS_PENDING = 'ALLPETS_PENDING'
export const ALLPETS_SUCCESS = 'ALLPETS_SUCCESS'
export const SET_ERROR = 'SET_ERROR'

export type AllPetsAction =
  | { type: typeof ALLPETS_PENDING; payload: null }
  | { type: typeof ALLPETS_SUCCESS; payload: AllPets[] }
  | { type: typeof SET_ERROR; payload: string }

export function setAllPetsPending(): AllPetsAction {
  return {
    type: ALLPETS_PENDING,
    payload: null,
  }
}

export function setAllPetsSuccess(allPets: AllPets[]): AllPetsAction {
  return {
    type: ALLPETS_SUCCESS,
    payload: allPets,
  }
}

export function setError(errMessage: string): AllPetsAction {
  return {
    type: SET_ERROR,
    payload: errMessage,
  }
}

export function fetchAllPets(): ThunkAction {
  return (dispatch) => {
    dispatch(setAllPetsPending())
    return getAllPets()
      .then((allPets) => {
        dispatch(setAllPetsSuccess(allPets))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}