import 'express-async-errors'
import express, {
  type Application,
  type Request,
  type Response
} from 'express'
import morgan from 'morgan'
import path from 'path'

import { errorHandler } from '@middlewares'
import { todoRouter, userRouter } from '@routes'
import { makePgPool } from '@config'

const { PORT } = process.env

const publicPath = path.resolve(__dirname, '../../../client/dist')

export class Server {
  private readonly app: Application

  constructor () {
    this.app = express()
  }

  async start () {
    const pool = makePgPool()
    await pool.connect()

    const { app } = this

    console.log('Database connected')

    app.use(express.json())
    app.use(morgan('common'))

    // * Routes
    app.use('/api/v1/todos', todoRouter)
    app.use('/api/v1/users', userRouter)

    // * Error handler
    app.use(errorHandler)

    // * Serve UI
    app.use('/', express.static(publicPath))

    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.resolve(publicPath, 'index.html'))
    })

    app.listen(PORT, () => { console.log(`Server started on port ${PORT}`) })
  }
}
