type Todo = import('zod').infer<typeof import('./todo')['todoSchema']>
type User = import('zod').infer<typeof import('./user')['userSchema']>

// * Remote
interface RemoteTodo {
  id?: string
  content: string
  completed: boolean
  due_date: string
  created_by: string
  user_name?: string
  user_picture?: string
}
