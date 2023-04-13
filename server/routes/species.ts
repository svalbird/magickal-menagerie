import express from 'express'
import { speciesInfo } from '../db/petCreationDb'

const router = express.Router()
//GET /api/v1/species
router.get('/', async (req, res) => {
  try {
    const species = await speciesInfo()
    res.status(200).json(species)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

export default router
