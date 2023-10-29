import z from 'zod'
import { Model } from './model'

export const todoSchema = z.object({
  id: z.string().uuid().optional(),
  content: z.string().min(1),
  completed: z.boolean(),
  due_date: z.coerce.date(),
  created_by: z.object({
    name: z.string().optional(),
    email: z.string().email(),
    picture: z.string().nullable().optional()
  })
})

export class TodoModel extends Model<Todo> {
  constructor (todo: Todo) {
    super(todoSchema, todo)
  }
}
