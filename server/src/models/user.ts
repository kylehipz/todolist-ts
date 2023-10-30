import z from 'zod'
import { Model } from './model'

export const userSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  email: z.string().email(),
  picture: z.string().nullable()
})

export class UserModel extends Model<User> {
  constructor (user: User) {
    super(userSchema, user)
  }
}
