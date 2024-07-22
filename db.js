import pg from "pg";
import dotenv from "dotenv";
dotenv.config();


const databaseUrl = process.env.DATABASE_URL;

const { Pool } = pg;

const connection = new Pool({
  connectionString: databaseUrl,
  ssl: {
    rejectUnauthorized: false,
  },
});

export { connection };
