import { GoogleOAuthProvider } from '@react-oauth/google'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Login, TodoListContainer } from '@components'
import { GOOGLE_CLIENT_ID } from '@constants/google'
import { useUserStore } from '@store'

import './App.css'

const queryClient = new QueryClient()

function App () {
  const { user } = useUserStore()

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <QueryClientProvider client={queryClient}>
        <div className='overflow-hidden'>
          {user !== null ? (<TodoListContainer />) : (<Login />)}
        </div>
      </QueryClientProvider>
    </GoogleOAuthProvider>
  )
}

export default App
