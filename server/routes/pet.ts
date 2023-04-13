import express from 'express'
import { addPetDB } from '../db/AddPetDb'

const router = express.Router()
//GET /api/v1/pet
router.post('/', async (req, res) => {
  try {
    const petData = req.body
    const userId = 4
    console.log(petData)
    await addPetDB(petData, userId)
    res.status(200)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

export default router
