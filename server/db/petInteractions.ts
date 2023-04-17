import { PetIntData } from '../../Model/petInt'
import connection from './connection'
import { NewInventoryItem } from '../../Model/inventory'

export function getPetInfo(userId: number | string, db = connection) {
  return db('pets')
    .join('user', 'pets.user_id', 'user.id')
    .join('species', 'pets.species_id', 'species.id')
    .where('user_id', userId)
    .select(
      'pets.id as id',
      'user_id as userId',
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

export function getUserInventory(userId: number | string, db = connection) {
  return db('inventory')
    .join('user', 'inventory.user_id', 'user.id')
    .join('items', 'inventory.item_id', 'items.id')
    .where('user_id', userId)
    .select(
      'inventory.id',
      'user_id as userId',
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
    user_id: addItem.userId,
    item_id: addItem.itemId,
  })
}

export function deleteInventoryItem(id: number, db = connection) {
  return db('inventory').where('id', id).delete()
}
