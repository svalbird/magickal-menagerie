import { Router } from 'express'
import {
  getPetInfo,
  getUserInventory,
  deleteInventoryItem,
  updatePetInfo,
} from '../db/petInteractions'

const router = Router()

// GET /petInteraction
router.get('/', async (req, res) => {
  try {
    const userId = 1
    const resultPet = await getPetInfo(userId)
    const resultInventory = await getUserInventory(userId)
    res.json({ pets: resultPet, inventory: resultInventory })
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
    res.json({ pets })
  } catch (err) {
    console.error(err)
    res.status(500).send('Something went wrong feeding the pet')
  }
})
// DELETE /petInteraction/:id
router.delete('/:id', async (req, res) => {
  try {
    const userId = 1
    const id = Number(req.params.id)
    await deleteInventoryItem(id)
    const inventory = await getUserInventory(userId)
    res.json( inventory )
  } catch (err) {
    console.error(err)
    res.status(500).send('Something went wrong')
  }
})

export default router
