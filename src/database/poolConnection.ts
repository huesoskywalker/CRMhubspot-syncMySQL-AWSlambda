import mysql, { Pool } from "mysql2/promise"
import { CONFIG } from "../config/config"
export const pool: Pool = mysql.createPool({
    host: CONFIG.DB.HOST,
    user: CONFIG.DB.USER,
    password: CONFIG.DB.PASSWORD,
    database: CONFIG.DB.NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})
