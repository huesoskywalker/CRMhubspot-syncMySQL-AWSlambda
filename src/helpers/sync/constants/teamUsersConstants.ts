import { CONFIG } from "../../../config/config"
import { ITableInfo } from "../../../types/database"

export const usersPrimaryTeamTable: ITableInfo = {
    name: CONFIG.DB.TABLES.USERS_PRIMARY_TEAM,
    columns: ["uuid", "email", "team_uuid"],
}

export const usersSecondaryTeamTable: ITableInfo = {
    name: CONFIG.DB.TABLES.USERS_SECONDARY_TEAM,
    columns: ["uuid", "email", "team_uuid"],
}
