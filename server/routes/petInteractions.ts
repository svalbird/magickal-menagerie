import { Router } from 'express'
import {
  getPetInfo,
  getUserInventory,
  deleteInventoryItem,
  updatePetInfo,
  addANewItem,
} from '../db/petInteractions'
import { NewInventoryItem } from '../../Model/inventory'
import checkJwt, { JwtRequest } from '../auth0'

const router = Router()

// GET Pet Info /petInteraction
router.get('/pet', checkJwt, async (req: JwtRequest, res) => {
  try {
    const auth0Id = req.auth?.sub
    if (!auth0Id) {
      console.error('No userId')
      return res.status(401).send('Unauthorized')
    }
    const pets = await getPetInfo(auth0Id)
    res.json(pets)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

// GET Inventory /petInteraction
router.get('/inv', checkJwt, async (req: JwtRequest, res) => {
  try {
    const auth0Id = req.auth?.sub
    if (!auth0Id) {
      console.error('No userId')
      return res.status(401).send('Unauthorized')
    }
    const inventory = await getUserInventory(auth0Id)
    res.json(inventory)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

// PUT /petInteraction
router.put('/', async (req, res) => {
  try {
    const newPet = req.body
    await updatePetInfo(newPet)

    res.sendStatus(200)
  } catch (err) {
    console.error(err)
    res.status(500).send('Something went wrong feeding the pet')
  }
})

router.post('/addInventoryItem', async (req, res) => {
  try {
    const newItem: NewInventoryItem = req.body
    console.log(newItem)
    await addANewItem(newItem)
    const pets = await getUserInventory(newItem.auth0Id)
    res.status(200).json(pets)
  } catch (err) {
    console.error(err)
    res.status(500).send('Something went wrong')
  }
})

// DELETE /petInteraction/:id
router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await deleteInventoryItem(id)

    res.sendStatus(200)
  } catch (err) {
    console.error(err)
    res.status(500).send('Something went wrong')
  }
})

export default router
