import z from 'zod'
import { Model } from './model'

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  picture: z.string().nullable()
})

export class UserModel extends Model<User> {
  constructor (user: User) {
    super(userSchema, user)
  }
}
