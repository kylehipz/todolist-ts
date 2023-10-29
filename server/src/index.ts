import 'dotenv/config'
import { Server } from './server'

const server = new Server()

process.on('SIGTERM', async () => {
  console.log('SIGTERM signal received')
  process.exit(1)
})

process.on('SIGINT', async () => {
  console.log('SIGINT (Ctrl-C) received')
  process.exit(2)
})

// * catch uncaught exceptions, trace, then exit normally
process.on('uncaughtException', async (error) => {
  console.log(error)
  process.exit(99)
})

server.start() // eslint-disable-line
