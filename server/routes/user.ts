import express from 'express'
import { getUserByID, addUser } from '../db/AddUserDb'
import checkJwt, { JwtRequest } from '../auth0'

const router = express.Router()

router.get('/', checkJwt, async (req: JwtRequest, res) => {
  try {
    const userId = req.auth?.sub
    if (!userId) {
      console.error('No userId')
      return res.status(401).send('Unauthorized')
    }
    const user = await getUserByID(userId)
    
    const exists = Boolean(user)
   
    res.json({ exists })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

//POST /api/v1/adduser
router.post('/', async (req, res) => {
  try {
    const displayName = req.body
    const auth0Id = '4'
    await addUser(auth0Id, displayName)
    res.status(200)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

export default router

// if (!userId) {
//   console.error('No userId')
//   return res.status(401).send('Unauthorized')
// }
