import { combineReducers } from 'redux'
import allPetsReducer from './allPetsReducer'

import speciesReducer from './speciesReducer'
import petInteraction from './petInteractions'

export default combineReducers({
  species: speciesReducer,
  allPets: allPetsReducer,
  petInteractions: petInteraction
})
