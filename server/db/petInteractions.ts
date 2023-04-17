import { PetIntData } from '../../Model/petInt'
import connection from './connection'
import { NewInventoryItem } from '../../Model/inventory'

export function getPetInfo(auth0Id: string, db = connection) {
  return db('pets')
    .join('user', 'pets.auth0_id', 'user.auth0_id')
    .join('species', 'pets.species_id', 'species.id')
    .where('pets.auth0_id', auth0Id)
    .select(
      'pets.id as id',
      'pets.auth0_id as auth0Id',
      'species_id as speciesId',
      'pets.name as petName',
      'species.name as speciesName',
      'xp_current as xpCurrent',
      'hp_current as hpCurrent',
      'hunger_current as hungerCurrent',
      'level',
      'hp_max as hpMax',
      'hunger_max as hungerMax',
      'fave_food as faveFood',
      'species.image'
    )
    .orderBy('pets.id')
}

export function getUserInventory(auth0Id: string, db = connection) {
  return db('inventory')
    .join('user', 'inventory.auth0_id', 'user.auth0_id')
    .join('items', 'inventory.item_id', 'items.id')
    .where('inventory.auth0_id', auth0Id)
    .select(
      'inventory.id',
      'inventory.auth0_id as auth0Id',
      'item_id as itemId',
      'name',
      'type',
      'description',
      'hunger_fill as hungerFill',
      'hp_fill as hpFill',
      'image'
    )
    .orderBy('inventory.id')
}

export function updatePetInfo(newPet: PetIntData, db = connection) {
  const pet = newPet // extract the pet object from the newPet parameter
  return db('pets')
    .where('id', newPet.id)
    .update({ hunger_current: pet.hungerCurrent }) // update the pet object
}

export function addANewItem(addItem: NewInventoryItem, db = connection) {
  return db('inventory').insert({
    auth0_id: addItem.auth0Id,
    item_id: addItem.itemId,
  })
}

export function deleteInventoryItem(id: number, db = connection) {
  return db('inventory').where('id', id).delete()
}
