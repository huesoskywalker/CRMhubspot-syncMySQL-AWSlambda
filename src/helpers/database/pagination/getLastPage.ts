import { QueryError, RowDataPacket } from "mysql2"
import { PoolConnection } from "mysql2/promise"
import { pool } from "../../../database/poolConnection"

export const getLastPage = async (query: string): Promise<string | undefined> => {
    let connection: PoolConnection | null = null
    try {
        connection = await pool.getConnection()
        const [rows] = await connection.query<RowDataPacket[]>(query)
        if (rows.length > 0) {
            return rows[0].next_after as string
        } else {
            return undefined
        }
    } catch (error: unknown) {
        throw error as QueryError
    } finally {
        if (connection) {
            connection.release()
        }
    }
}
