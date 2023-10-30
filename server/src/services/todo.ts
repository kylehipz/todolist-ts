import { TodoModel } from '@models'
import { NotFoundError } from '@errors'

export class TodoListService {
  private readonly todoDb: TodoDB

  constructor (todoDb: TodoDB) {
    this.todoDb = todoDb
  }

  async listTodos () {
    const todos = await this.todoDb.getAll()
    const validatedTodos = todos.map((todo) => new TodoModel(todo).toJSON())

    return validatedTodos
  }

  async addTodo (todo: Todo) {
    const validatedTodo = new TodoModel(todo).toJSON()

    return await this.todoDb.add(validatedTodo)
  }

  async getTodoById (id: string) {
    const todo = await this.todoDb.getById(id)

    if (todo === null) {
      throw new NotFoundError('Todo not found')
    }

    return todo
  }

  async updateTodo (id: string, todo: Todo) {
    const existingTodo = await this.todoDb.getById(id)

    if (existingTodo === null) {
      throw new NotFoundError('Todo not found')
    }

    const validatedTodo = new TodoModel(todo).toJSON()

    return await this.todoDb.updateById(id, validatedTodo)
  }

  async deleteTodo (id: string) {
    const existingTodo = await this.todoDb.getById(id)

    if (existingTodo === null) {
      throw new NotFoundError('Todo not found')
    }

    await this.todoDb.deleteById(id)
  }
}
