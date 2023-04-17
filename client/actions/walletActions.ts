import { ThunkAction } from '../store'
import { AddUser } from '../../Model/addUser'
import { getUserByID, updateUserWallet } from '../apis/walletApi'

export const USER_PENDING = 'USER_PENDING'
export const USER_SUCCESS = 'USER_SUCCESS'
export const SET_ERROR = 'SET_ERROR'

export type UserAction =
  | { type: typeof USER_PENDING; payload: null }
  | { type: typeof USER_SUCCESS; payload: AddUser }
  | { type: typeof SET_ERROR; payload: string }

export function setUserPending(): UserAction {
  return {
    type: USER_PENDING,
    payload: null,
  }
}

export function setUserSuccess(user: AddUser): UserAction {
  return {
    type: USER_SUCCESS,
    payload: user,
  }
}

export function setError(errMessage: string): UserAction {
  return {
    type: SET_ERROR,
    payload: errMessage,
  }
}

export function fetchUser(token: string): ThunkAction {
  return (dispatch) => {
    dispatch(setUserPending())
    return getUserByID(token)
      .then((user) => {
        dispatch(setUserSuccess(user))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function updateUser(user: AddUser): ThunkAction {
  return (dispatch) => {
    dispatch(setUserPending())
    return updateUserWallet(user)
      .then(() => {
        dispatch(setUserSuccess(user))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}
