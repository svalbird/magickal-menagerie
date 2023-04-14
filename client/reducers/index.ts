import { combineReducers } from 'redux'
import allPetsReducer from './allPetsReducer'

import speciesReducer from './speciesReducer'
import tokenReducer from './tokenReducer'

export default combineReducers({
  species: speciesReducer,
  allPets: allPetsReducer,
  token: tokenReducer,
})
