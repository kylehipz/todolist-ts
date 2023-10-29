import 'express-async-errors'
import express, { type Application } from 'express'
import morgan from 'morgan'
import { todoRouter, userRouter } from './routes'
import { makePgPool } from './config'

const { PORT } = process.env

export class Server {
  private readonly app: Application

  constructor () {
    this.app = express()
  }

  async start () {
    const pool = makePgPool()
    await pool.connect()
    console.log('Database connected')

    this.app.use(express.json())
    this.app.use(morgan('combined'))

    this.app.use('/api/v1/todos', todoRouter)
    this.app.use('/api/v1/users', userRouter)

    this.app.listen(PORT, () => { console.log(`Server started on port ${PORT}`) })
  }
}
