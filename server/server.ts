import express from 'express'
import path from 'path'
import { join } from 'node:path'

import speciesRoutes from './routes/species'
import petRoutes from './routes/pet'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use('/api/v1/species', speciesRoutes)
server.use('/api/v1/pet', petRoutes)

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'))
})

export default server
