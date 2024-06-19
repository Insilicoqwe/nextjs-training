import { Pool } from 'pg';

const pool = new Pool({
    host: "localhost",
    port: "5432",
    user: "next",
    password: "phpsosipenis",
    database: "insilico"
});

export default pool;