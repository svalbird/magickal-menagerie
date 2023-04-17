import { combineReducers } from 'redux'

import speciesReducer from './speciesReducer'
import petInteraction from './petInteractions'
import inventory from './inventory'

export default combineReducers({
  inventory: inventory,
  species: speciesReducer,
  petInteractions: petInteraction
})
