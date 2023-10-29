import { todoListService } from '../services'
import { HTTP_STATUS } from '../constants/'

import type { Request, Response } from 'express'

interface IdParam { id: string }

export async function listTodosController (req: Request, res: Response) {
  const todos = await todoListService.listTodos()

  return res.status(HTTP_STATUS.OK).json({ data: todos })
}

export async function addTodoController (req: Request<any, any, Todo>, res: Response) {
  const todo = req.body
  const newTodo = await todoListService.addTodo(todo)

  return res.status(HTTP_STATUS.CREATED).json({ data: newTodo })
}

export async function updateTodoController (req: Request<IdParam, any, Todo>, res: Response) {
  const todo = req.body
  const { id } = req.params
  const todos = await todoListService.updateTodo(id, todo)

  return res.status(HTTP_STATUS.OK).json({ data: todos })
}

export async function deleteTodoController (req: Request, res: Response) {
  const { id } = req.params
  await todoListService.deleteTodo(id)

  return res.status(HTTP_STATUS.NO_CONTENT).send()
}
