import { UserService } from '@services/user'
import { UserStubDB } from '@stubs'

const userService = new UserService(new UserStubDB([]))

describe('User Service', () => {
  it('should successfully add a user', async () => {
    const user: User = {
      email: 'kylehipolito.az@gmail.com',
      name: 'Kyle Hipolito',
      picture: ''
    }

    const createdUser = await userService.addUser(user)

    expect(createdUser).toBeDefined()
    expect(createdUser).not.toBeNull()
    expect(createdUser.id).toBeDefined()
    expect(createdUser.email).toBe(user.email)
    expect(createdUser.name).toBe(user.name)
    expect(createdUser.picture).toBe(user.picture)
  })

  it('should not add a new user if email already exists', async () => {
    const user: User = {
      email: 'kylehipolito.az@gmail.com',
      name: 'Kyle Hipolito New Name',
      picture: ''
    }

    const existingUser = await userService.addUser(user)

    expect(existingUser).toBeDefined()
    expect(existingUser).not.toBeNull()
    expect(existingUser.id).toBeDefined()
    expect(existingUser.email).toBe(user.email)
    expect(existingUser.name).not.toBe(user.name)
    expect(existingUser.picture).toBe(user.picture)
  })
})

