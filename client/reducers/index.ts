import { combineReducers } from 'redux'

import speciesReducer from './speciesReducer'
import petInteraction from './petInteractions'

export default combineReducers({
  species: speciesReducer,
  petInteractions: petInteraction
})
