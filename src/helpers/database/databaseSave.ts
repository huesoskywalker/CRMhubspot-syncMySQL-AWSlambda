import { pool } from "../../database/poolConnection"
import { PoolConnection, QueryError } from "mysql2/promise"
import { retryOperation } from "../retry/retryOperation"

export const saveDataToDatabase = async <TItem, TValues>(
    data: TItem[],
    tableName: string,
    tableColumns: string[],
    mapDataToValues: (item: TItem) => TValues
): Promise<void> => {
    const saveData = async () => {
        let connection: PoolConnection | null = null
        try {
            connection = await pool.getConnection()
            const values: TValues[] = data.flatMap(mapDataToValues)
            const placeholders = data
                .map(() => `(${tableColumns.map(() => `?`).join(", ")})`)
                .join(", ")
            const updateOnDuplicate = tableColumns
                .map((columnName) => `${columnName} = VALUES(${columnName})`)
                .join(" ,")

            const sql = `INSERT INTO ${tableName} (${tableColumns.join(
                ", "
            )}) VALUES ${placeholders}
            ON DUPLICATE KEY UPDATE ${updateOnDuplicate}`
            await connection.query(sql, values)
        } catch (error: unknown) {
            throw error as QueryError
        } finally {
            if (connection) {
                connection.release()
            }
        }
    }
    return retryOperation(saveData, `Insert Data into ${tableName}`)
}
