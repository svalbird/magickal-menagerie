import { combineReducers } from 'redux'
import allPetsReducer from './allPetsReducer'

import speciesReducer from './speciesReducer'
import tokenReducer from './tokenReducer'
import petInteraction from './petInteractions'
import userReducer from './userReducer'
import inventory from './inventory'
import otherPetReducer from './otherPetReducer'

export default combineReducers({
  inventory: inventory,
  species: speciesReducer,
  allPets: allPetsReducer,
  token: tokenReducer,
  petInteractions: petInteraction,
  user: userReducer,
  otherPet: otherPetReducer,
})
