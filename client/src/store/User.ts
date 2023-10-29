import { create } from 'zustand'
import { jwtDecode } from 'jwt-decode'

interface IUserState {
  user: User | null
  parseToken: (token: string) => User
  setUser: (user: User) => void
}

export const useUserStore = create<IUserState>((set) => ({
  user: null,
  setUser: (user: User) => { set(() => ({ user })) },
  parseToken: (token: string) => {
    const decodedPayload: unknown = jwtDecode(token)
    const decodedUser = decodedPayload as User

    const newUser: User = {
      name: decodedUser.name,
      email: decodedUser.email,
      picture: decodedUser.picture
    }

    set(() => {
      return { user: newUser }
    })

    return newUser
  }
}))
