import { CONFIG } from "../../../config/config"
import { ITableInfo } from "../../../types/database"

export const ownersLimit: number = 100

export const ownersTable: ITableInfo = {
    name: CONFIG.DB.TABLES.OWNERS,
    columns: JSON.parse(CONFIG.DB.COLUMNS.OWNERS),
}
