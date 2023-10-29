import { todoDb, userDb } from '../db'
import { TodoListService } from './todo'
import { UserService } from './user'

export const todoListService = new TodoListService(todoDb)
export const userService = new UserService(userDb)
