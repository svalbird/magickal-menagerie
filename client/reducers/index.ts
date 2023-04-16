import { combineReducers } from 'redux'
import allPetsReducer from './allPetsReducer'

import speciesReducer from './speciesReducer'
import tokenReducer from './tokenReducer'
import petInteraction from './petInteractions'

export default combineReducers({
  species: speciesReducer,
  allPets: allPetsReducer,
  token: tokenReducer,
  petInteractions: petInteraction
})
