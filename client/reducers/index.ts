import { combineReducers } from 'redux'

import speciesReducer from './speciesReducer'

export default combineReducers({
  species: speciesReducer,
})
