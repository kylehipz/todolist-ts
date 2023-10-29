import { Router } from 'express'
import { addUserController } from '@controllers'

const userRouter = Router()

userRouter
  .route('/')
  .post(addUserController)

export { userRouter }
