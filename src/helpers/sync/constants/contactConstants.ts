import { ITableInfo } from "../../../types/database"
import { CONFIG } from "../../../config/config"

export const contactLimit: number = 100
export const contactProperties: string[] = [
    "firstname",
    "lastname",
    "email",
    "phone",
    "lifecyclestage",
    "country",
]
export const contactTable: ITableInfo = {
    name: CONFIG.DB.TABLES.CONTACTS,
    columns: JSON.parse(CONFIG.DB.COLUMNS.CONTACTS),
}

export const contactPaginationTable: ITableInfo = {
    name: CONFIG.DB.TABLES.CONTACTS_PAGINATION,
    columns: JSON.parse(CONFIG.DB.COLUMNS.CONTACTS_PROPERTIES),
}

export const contactPropertiesTable: ITableInfo = {
    name: CONFIG.DB.TABLES.CONTACTS_PROPERTIES,
    columns: JSON.parse(CONFIG.DB.COLUMNS.CONTACTS_PROPERTIES),
}
