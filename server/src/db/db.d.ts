interface TodoDB {
  getAll: () => Promise<Todo[]>
  getById: (id: string) => Promise<Todo | null>
  add: (todo: Todo) => Promise<Todo>
  updateById: (id: string, todo: Todo) => Promise<Todo>
  deleteById: (id: string) => Promise<void>
}

interface UserDB {
  getByEmail: (email: string) => Promise<User | null>
  add: (user: User) => Promise<User>
}
