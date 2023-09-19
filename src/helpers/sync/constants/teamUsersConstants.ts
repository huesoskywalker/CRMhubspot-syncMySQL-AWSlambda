import { CONFIG } from "../../../config/config"
import { ITableInfo } from "../../../types/database"

export const usersPrimaryTeamTable: ITableInfo = {
    name: CONFIG.DB.TABLES.USERS_PRIMARY_TEAM,
    columns: JSON.parse(CONFIG.DB.COLUMNS.USERS_PRIMARY_TEAM),
}

export const usersSecondaryTeamTable: ITableInfo = {
    name: CONFIG.DB.TABLES.USERS_SECONDARY_TEAM,
    columns: JSON.parse(CONFIG.DB.COLUMNS.USERS_SECONDARY_TEAM),
}
