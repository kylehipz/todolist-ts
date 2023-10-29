import { transformRemoteTodo, transformTodo } from './transformers'
import type { Pool } from 'pg'

export class TodoPostgresDb implements TodoDB {
  private readonly pool: Pool

  constructor (pool: Pool) {
    this.pool = pool
  }

  async getAll () {
    const query = `
      SELECT t.*, u.name user_name, u.picture user_picture from todo t
      LEFT JOIN users u ON t.created_by = u.email
      ORDER BY t.due_date, t.content
    `

    const { rows: todos } = await this.pool.query<RemoteTodo>(query)

    return todos.map(transformRemoteTodo)
  }

  async getById (id: string) {
    const { rows: todos } = await this.pool.query<Todo>('SELECT * FROM todo where id = $1', [id])

    return todos[0] ?? null
  }

  async add (todo: Todo) {
    const { completed, due_date, content, created_by } = transformTodo(todo)

    const query = 'INSERT INTO todo VALUES(gen_random_uuid(), $1, $2, $3, $4) RETURNING *'
    const values = [content, completed, due_date, created_by]

    const { rows: todos } = await this.pool.query<RemoteTodo>(query, values)

    return transformRemoteTodo(todos[0])
  }

  async updateById (id: string, todo: Todo) {
    const { completed, due_date, content } = transformTodo(todo)

    const query = 'UPDATE todo SET content = $1, completed = $2, due_date = $3 WHERE id = $4 RETURNING *'
    const values = [content, completed, due_date, id]

    const { rows: todos } = await this.pool.query<RemoteTodo>(query, values)

    return transformRemoteTodo(todos[0])
  }

  async deleteById (id: string) {
    await this.pool.query('DELETE FROM todo WHERE id=$1', [id])
  }
}
