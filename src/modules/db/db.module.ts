import { Pool } from 'pg';

class Database {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      user: "postgres",
      host: "localhost",
      database: "Challenge-api-db",
      password: "admin",
      port: 5432,
    });
  }

  async query(text: string, params?: any[]) {
    const client = await this.pool.connect();

    try {
      const result = await client.query(text, params);
      return result;
    } catch (error) {
      throw error;
    } finally {
      client.release();
    }
  }
}

export const DatabaseInstance = new Database();
