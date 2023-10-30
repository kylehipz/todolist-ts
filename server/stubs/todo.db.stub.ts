import { randomUUID } from 'crypto'

export class TodoStubDB implements TodoDB {
  private todos: Todo[]

  constructor (todos: Todo[]) {
    this.todos = todos
  }

  async getAll () {
    return this.todos
  }

  async getById (id: string) {
    const foundTodo = this.todos.find((todo) => todo.id === id)

    return foundTodo ?? null
  }

  async add (todo: Todo) {
    const newTodo = { ...todo, id: randomUUID() }
    this.todos.push(newTodo)

    return newTodo
  }

  async updateById (id: string, todo: Todo) {
    const index = this.todos.findIndex((todo) => todo.id === id)

    const foundTodo = this.todos[index]

    this.todos[index] = {
      ...foundTodo,
      ...todo,
      id
    }

    return todo
  }

  async deleteById (id: string) {
    const index = this.todos.findIndex((todo) => todo.id === id)

    this.todos.splice(index, 1)
  }
}

