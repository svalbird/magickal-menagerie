import express from 'express'
import { getPetByID, updateOtherPet } from '../db/otherPetDb'

const router = express.Router()

router.get('/:petId', async (req, res) => {
  try {
    const petId = parseInt(req.params.petId)

    const pet = await getPetByID(petId) 

    res.status(200).json(pet)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error trying to get Pet' })
  }
})

router.patch('/', async (req, res) => {
  try {
    const updatedPet = req.body
    await updateOtherPet(updatedPet)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error trying to update user wallet' })
  }
})

export default router
