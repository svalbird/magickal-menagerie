import {
  USER_PENDING,
  USER_SUCCESS,
  SET_ERROR,
  UserAction,
} from '../actions/walletActions'
import { AddUser } from '../../Model/addUser'

interface UserState {
  loading: boolean
  error: string | null
  data: AddUser | null
}

const initialState: UserState = {
  loading: false,
  error: null,
  data: null,
}

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case USER_PENDING:
      return {
        loading: true,
        error: null,
        data: null,
      }
    case USER_SUCCESS:
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

export default userReducer
