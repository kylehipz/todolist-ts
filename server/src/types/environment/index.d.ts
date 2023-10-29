export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'staging' | 'production'
      PORT: number
      DB_PORT: number
      DB_HOST: string
      DB_USER: string
      DB_PASSWORD: string
      DB_NAME: string
    }
  }
}
