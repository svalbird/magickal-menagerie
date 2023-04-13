import express from 'express'
import { addUser } from '../db/AddUserDb'

const router = express.Router()
//GET /api/v1/pet
router.post('/', async (req, res) => {
  try {
    const displayName = req.body
    const auth0Id = '4'
    await addUser(displayName, auth0Id)
    res.status(200)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

export default router
