import { combineReducers } from 'redux'
import allPetsReducer from './allPetsReducer'

import speciesReducer from './speciesReducer'

export default combineReducers({
  species: speciesReducer,
  allPets: allPetsReducer,
})
