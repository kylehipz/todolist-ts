import axios from 'axios'
import { message } from 'antd'
import { useUserStore } from '@store'

import type { CredentialResponse } from '@react-oauth/google'

export const useLogin = () => {
  const { parseToken } = useUserStore()

  const onLoginSuccess = async (response: CredentialResponse) => {
    const { credential } = response

    if (credential === undefined) {
      message.success('Login failed')
      return
    }

    const user = parseToken(credential)

    try {
      await axios.post('/api/v1/users', user)
      message.success('Login successful')
    } catch (error: any) {
      message.success('Login failed')
    }
  }

  const onLoginError = () => {
    message.error('Login failed')
  }

  return {
    onLoginSuccess,
    onLoginError
  }
}
