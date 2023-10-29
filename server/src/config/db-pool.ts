import { Pool, type PoolConfig } from 'pg'

let pool: Pool | null = null

const {
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
  DB_USER
} = process.env

const config: PoolConfig = {
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  ssl: false
}

export const makePgPool = () => {
  if (pool === null) {
    pool = new Pool(config)
  }

  return pool
}
