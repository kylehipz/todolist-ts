import { Pool, type PoolConfig } from 'pg'

let pool: Pool | null = null

const {
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PORT
} = process.env

const config: PoolConfig = {
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  ssl: false,
  port: DB_PORT
}

export const makePgPool = () => {
  if (pool === null) {
    pool = new Pool(config)
  }

  return pool
}
