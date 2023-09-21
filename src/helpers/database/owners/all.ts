import { PoolConnection, QueryError, RowDataPacket } from "mysql2/promise"
import { pool } from "../../../database/poolConnection"

export const getAllOwners = async (
    query: string
): Promise<Array<{ uuid: string; email: string }>> => {
    let connection: PoolConnection | null = null
    try {
        connection = await pool.getConnection()
        const [rows] = await connection.query<RowDataPacket[]>(query)
        const values = rows.map((row) => ({
            uuid: row.next_after as string,
            email: row.email as string,
        }))
        return values
    } catch (error: unknown) {
        throw error as QueryError
    } finally {
        if (connection) {
            connection.release()
        }
    }
}
