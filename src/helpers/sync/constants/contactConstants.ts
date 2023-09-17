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
    columns: [
        "uuid",
        "firstname",
        "lastname",
        "lifecycle_stage",
        "email",
        "phone",
        "country",
        "create_date",
        "last_modified_date",
    ],
}

export const contactPaginationTable: ITableInfo = {
    name: CONFIG.DB.TABLES.CONTACTS_PAGINATION,
    columns: ["next_after", "last_sync_date"],
}
