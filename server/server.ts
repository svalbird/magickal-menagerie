import express from 'express'
import path from 'path'
import petInteractionRoutes from './routes/petInteractions'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use('/api/v1/petInteractions', petInteractionRoutes)

export default server
