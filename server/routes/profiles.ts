import express from 'express'
import { getAllPetsInfo } from '../db/ProfilePets'

const router = express.Router()

//GET /api/v1/profiles
router.get('/', async (req, res) => {
  try {
    const allPetInfo = await getAllPetsInfo()
    res.status(200).json(allPetInfo)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

export default router
