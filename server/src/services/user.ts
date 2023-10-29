import { UserModel } from '@models'

export class UserService {
  private readonly userDb: UserDB

  constructor (userDb: UserDB) {
    this.userDb = userDb
  }

  async addUser (user: User) {
    const validatedUser = new UserModel(user).toJSON()
    const existingUser = await this.userDb.getByEmail(validatedUser.email)

    if (existingUser !== null) {
      return existingUser
    }

    return await this.userDb.add(validatedUser)
  }
}
