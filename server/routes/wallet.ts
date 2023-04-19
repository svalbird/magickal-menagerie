import express from 'express'

import checkJwt, { JwtRequest } from '../auth0'
import { getUserByID, updateUserWallet } from '../db/AddUserDb'

const router = express.Router()

router.get('/', checkJwt, async (req: JwtRequest, res) => {
  try {
    const auth0Id = req.auth?.sub
    if (!auth0Id) {
      console.error('No userId')
      return res.status(401).send('Unauthorized')
    }
    const user = await getUserByID(auth0Id)

    res.status(200).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error trying to get User' })
  }
})

router.patch('/', async (req, res) => {
  try {
    const user = req.body
    await updateUserWallet(user)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error trying to update user wallet' })
  }
})

export default router
