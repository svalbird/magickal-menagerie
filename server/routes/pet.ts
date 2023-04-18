import express from 'express'
import checkJwt, { JwtRequest } from '../auth0'
import { addPetDB } from '../db/AddPetDb'

const router = express.Router()
//GET /api/v1/pet
router.post('/', checkJwt, async (req: JwtRequest, res) => {
  try {
    const petData = req.body
    const auth0Id = req.auth?.sub
    if (!auth0Id) {
      console.error('No userId')
      return res.status(401).send('Unauthorized')
    }
    await addPetDB(petData, auth0Id)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

export default router
