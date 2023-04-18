import express from 'express'
import { getUserByID, addUser } from '../db/AddUserDb'
import checkJwt, { JwtRequest } from '../auth0'

const router = express.Router()

router.get('/', checkJwt, async (req: JwtRequest, res) => {
  try {
    const auth0Id = req.auth?.sub
    if (!auth0Id) {
      console.error('No userId')
      return res.status(401).send('Unauthorized')
    }
    const user = await getUserByID(auth0Id)

    const exists = Boolean(user)

    res.status(200).json({ exists })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

//POST /api/v1/adduser
router.post('/', checkJwt, async (req: JwtRequest, res) => {
  try {
    const displayName = req.body
    const auth0Id = req.auth?.sub
    if (!auth0Id) {
      console.error('No userId')
      return res.status(401).send('Unauthorized')
    }
    await addUser(auth0Id, displayName)
    res.status(200)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

export default router


