import { CONFIG } from "../../../config/config"
import { ITableInfo } from "../../../types/database"

export const dealLimit: number = 100
export const dealProperties: string[] = [
    "dealname",
    "dealstage",
    "amount",
    "deal_currency_code",
    "hubspot_owner_id",
    "createdate",
    "closedate",
    "hs_lastmodifieddate",
]
export const dealAssociations: string[] = ["contacts"]
export const dealTable: ITableInfo = {
    name: CONFIG.DB.TABLES.DEALS,
    columns: JSON.parse(CONFIG.DB.COLUMNS.DEALS),
}

export const dealPaginationTable: ITableInfo = {
    name: CONFIG.DB.TABLES.DEALS_PAGINATION,
    columns: JSON.parse(CONFIG.DB.COLUMNS.DEALS_PAGINATION),
}
