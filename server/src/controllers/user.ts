import { userService } from '@services'
import { HTTP_STATUS } from '@constants'

import type { Request, Response } from 'express'

export async function addUserController (req: Request<any, any, User>, res: Response) {
  const user = req.body
  const newTodo = await userService.addUser(user)

  return res.status(HTTP_STATUS.OK).json({ data: newTodo })
}
