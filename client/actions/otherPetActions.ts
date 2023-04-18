import { ThunkAction } from '../store'

import { getPetByID, updateOtherPet } from '../apis/otherPetApi'

import { PetIntData } from '../../Model/petInt'

export const OTHER_PET_PENDING = 'OTHER_PET_PENDING'
export const OTHER_PET_SUCCESS = 'OTHER_PET_SUCCESS'
export const SET_ERROR = 'SET_ERROR'

export type OtherPetAction =
  | { type: typeof OTHER_PET_PENDING; payload: null }
  | { type: typeof OTHER_PET_SUCCESS; payload: PetIntData }
  | { type: typeof SET_ERROR; payload: string }

export function setOtherPetPending(): OtherPetAction {
  return {
    type: OTHER_PET_PENDING,
    payload: null,
  }
}

export function setOtherPetSuccess(otherPetData: PetIntData): OtherPetAction {
  return {
    type: OTHER_PET_SUCCESS,
    payload: otherPetData,
  }
}

export function setError(errMessage: string): OtherPetAction {
  return {
    type: SET_ERROR,
    payload: errMessage,
  }
}

export function fetchOtherPetData(petId: number): ThunkAction {
  return (dispatch) => {
    dispatch(setOtherPetPending())
    return getPetByID(petId)
      .then((otherPetData) => {
        dispatch(setOtherPetSuccess(otherPetData))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function updatePet(updatedPet: PetIntData): ThunkAction {
  return (dispatch) => {
    dispatch(setOtherPetPending())
    return updateOtherPet(updatedPet)
      .then(() => {
        dispatch(setOtherPetSuccess(updatedPet))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}
