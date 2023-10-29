import z from 'zod'

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
