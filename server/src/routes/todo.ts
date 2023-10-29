import { Router } from 'express'
import {
  deleteTodoController,
  listTodosController,
  addTodoController,
  updateTodoController
} from '../controllers'

const todoRouter = Router()

todoRouter
  .route('/')
  .get(listTodosController)
  .post(addTodoController)

todoRouter
  .route('/:id')
  .patch(updateTodoController)
  .delete(deleteTodoController)

export { todoRouter }
