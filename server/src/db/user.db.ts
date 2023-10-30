import type { Pool } from 'pg'

export class UserPostgresDB implements UserDB {
  private readonly pool: Pool

  constructor (pool: Pool) {
    this.pool = pool
  }

  async getByEmail (email: string) {
    const { rows } = await this.pool.query<User>(
      'SELECT * FROM users WHERE email = $1',
      [email]
    )

    return rows[0] ?? null
  }

  async add (user: User) {
    const { name, email, picture } = user

    const query = 'INSERT INTO users VALUES(gen_random_uuid(), $1, $2, $3)'
    const values = [email, name, picture]

    const { rows } = await this.pool.query<User>(query, values)

    return rows[0]
  }
}
