import { ThunkAction } from '../store'
import { SpeciesData } from '../../Model/species'
import { getSpecies } from '../apis/speciesAPI'

export const SET_SPECIES_PENDING = 'SET_SPECIES_PENDING'
export const SET_SPECIES_SUCCESS = 'SET_SPECIES_SUCCESS'
export const SET_ERROR = 'SET_ERROR'

export type SpeciesAction =
  | { type: typeof SET_SPECIES_PENDING; payload: null }
  | { type: typeof SET_SPECIES_SUCCESS; payload: SpeciesData[] }
  | { type: typeof SET_ERROR; payload: string }

export function setSpeciesPending(): SpeciesAction {
  return {
    type: SET_SPECIES_PENDING,
    payload: null,
  }
}

export function setSpeciesSuccess(species: SpeciesData[]): SpeciesAction {
  return {
    type: SET_SPECIES_SUCCESS,
    payload: species,
  }
}

export function setError(errMessage: string): SpeciesAction {
  return {
    type: SET_ERROR,
    payload: errMessage,
  }
}

export function fetchSpecies(): ThunkAction {
  return (dispatch) => {
    dispatch(setSpeciesPending())
    return getSpecies()
      .then((species) => {
        dispatch(setSpeciesSuccess(species))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}



