import { ThunkAction } from '../store'
import { SpeciesData } from '../../Model/species'
import { getSpecies } from '../apis/speciesAPI'
import { NewPet } from '../../Model/pet'

export const ADD_PET_PENDING = 'ADD_PET_PENDING'
export const ADD_PET_SUCCESS = 'ADD_PET_SUCCESS'
export const ADD_ERROR = 'SET_ERROR'

export type SpeciesAction =
  | { type: typeof ADD_PET_PENDING; payload: null }
  | { type: typeof ADD_PET_SUCCESS; payload: SpeciesData[] }
  | { type: typeof ADD_ERROR; payload: string }

export function addPetPending(): SpeciesAction {
  return {
    type: ADD_PET_PENDING,
    payload: null,
  }
}

export function addPetSuccess(species: SpeciesData[]): SpeciesAction {
  return {
    type: ADD_PET_SUCCESS,
    payload: species,
  }
}

export function setError(errMessage: string): SpeciesAction {
  return {
    type: ADD_ERROR,
    payload: errMessage,
  }
}

// export function addPetToUser(pet:NewPet): ThunkAction {
//   return (dispatch) => {
//     dispatch(addPetPending())
//     return addPetAPI(pet)
//       .then((addpet) => {
//         dispatch(addPetSuccess(pet))
//       })
//       .catch((err) => {
//         dispatch(setError(err.message))
//       })
//   }
// }



