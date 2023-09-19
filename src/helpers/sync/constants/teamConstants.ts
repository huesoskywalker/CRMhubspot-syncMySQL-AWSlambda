import { ITableInfo } from "../../../types/database"
import { CONFIG } from "../../../config/config"
export const teamTable: ITableInfo = {
    name: CONFIG.DB.TABLES.BROKER_TEAMS,
    columns: ["uuid", "name"],
}
