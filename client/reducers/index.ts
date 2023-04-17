import { combineReducers } from 'redux'
import allPetsReducer from './allPetsReducer'

import speciesReducer from './speciesReducer'
import tokenReducer from './tokenReducer'
import petInteraction from './petInteractions'
import inventory from './inventory'

export default combineReducers({
  inventory: inventory,
  species: speciesReducer,
  allPets: allPetsReducer,
  token: tokenReducer,
  petInteractions: petInteraction
})
