import { randomUUID } from 'crypto'

export class UserStubDB implements UserDB {
  private readonly users: User[]

  constructor (users: User[]) {
    this.users = users
  }

  async add (user: User) {
    const newUser = { ...user, id: randomUUID() }
    this.users.push(newUser)

    return newUser
  }

  async getByEmail (email: string) {
    const foundUser = this.users.find((user) => user.email === email)

    return foundUser ?? null
  }
}
