import pg from "pg"; // Use import instead of require
const { Pool } = pg; // Destructure the Pool from pg

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "recipeguru",
  password: "lol",
  port: 5432,
});

const { rows } = await pool.query(`SELECT * FROM recipes`);


console.log(rows)
