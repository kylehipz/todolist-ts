import { HTTP_STATUS } from '../constants'
import { HTTPError } from '../errors'
import type { Request, Response, NextFunction } from 'express'

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof HTTPError) {
    const { stack, name, message } = err.serialize()
    console.log(stack)

    return res.status(err.getStatus()).json({ name, message })
  }

  console.log(err.stack)
  return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: 'Something went wrong' })
}
