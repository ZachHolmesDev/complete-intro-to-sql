const pg = require("pg");
const pool = new pg.Pool({
	user: "postgres",
	host: "localhost",
	database: "recipeguru	",
	password: "lol",
	port: 5432,
});

const { rows } = await pool.query(`SELECT * FROM recepies`);


console.log(rows)
