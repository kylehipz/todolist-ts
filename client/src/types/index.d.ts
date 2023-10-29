interface User {
  name: string
  email: string
  picture: string
}

type Todo = import('zod').infer<typeof import('../models/todo')['todoSchema']>
