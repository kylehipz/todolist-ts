import { useLogin } from '@hooks'
import { GoogleLogin } from '@react-oauth/google'

export const Login = () => {
  const { onLoginError, onLoginSuccess } = useLogin()

  return (
    <div className='m-auto flex flex-col h-[80vh] items-center justify-center space-y-4'>
      <div className='text-2xl font-bold text-gray-900'>
        Todo List Application
      </div>
      <GoogleLogin
        auto_select
        onSuccess={onLoginSuccess}
        onError={onLoginError}
        useOneTap
      />
    </div>
  )
}
