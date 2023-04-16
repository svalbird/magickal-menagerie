import { Router } from 'express'
import {
  getPetInfo,
  getUserInventory,
  deleteInventoryItem,
  updatePetInfo,
  addANewItem,
} from '../db/petInteractions'
import { NewInventoryItem } from '../../Model/inventory'

const router = Router()

// GET Pet Info /petInteraction
router.get('/pet', async (req, res) => {
  try {
    const userId = 1
    const resultPet = await getPetInfo(userId)
    res.json({ pets: resultPet })
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

// GET Inventory /petInteraction
router.get('/inv', async (req, res) => {
  try {
    const userId = 1
    const resultInventory = await getUserInventory(userId)
    res.json({ inventory: resultInventory })
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

// PUT /petInteraction
router.put('/', async (req, res) => {
  try {
    const userId = 1
    const newPet = req.body
    await updatePetInfo(newPet)
    const pets = await getPetInfo(userId)
    res.json(pets)
  } catch (err) {
    console.error(err)
    res.status(500).send('Something went wrong feeding the pet')
  }
})

router.post('/addInventoryItem', async (req, res) => {
  try {
    const newItem: NewInventoryItem = req.body
    await addANewItem(newItem)
    const pets = await getUserInventory(newItem.userId)
    res.status(200).json(pets)
  } catch (err) {
    console.error(err)
    res.status(500).send('Something went wrong')
  }
})

// DELETE /petInteraction/:id
router.delete('/:id', async (req, res) => {
  try {
    const userId = 1
    const id = Number(req.params.id)
    await deleteInventoryItem(id)
    const inventory = await getUserInventory(userId)
    res.json(inventory)
  } catch (err) {
    console.error(err)
    res.status(500).send('Something went wrong')
  }
})

export default router
