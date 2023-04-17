import { combineReducers } from 'redux'
import allPetsReducer from './allPetsReducer'

import speciesReducer from './speciesReducer'
import tokenReducer from './tokenReducer'
import petInteraction from './petInteractions'
import userReducer from './userReducer'

export default combineReducers({
  species: speciesReducer,
  allPets: allPetsReducer,
  token: tokenReducer,
  petInteractions: petInteraction,
  user: userReducer,
})
