import { makePgPool } from '../config'
import { TodoPostgresDb } from './todo-db'
import { UserPostgresDB } from './user-db'

const pool = makePgPool()

export const todoDb = new TodoPostgresDb(pool)
export const userDb = new UserPostgresDB(pool)
