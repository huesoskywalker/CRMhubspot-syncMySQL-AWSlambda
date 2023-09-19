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
    name: "hs_deals",
    columns: [
        "uuid_deal",
        "deal_name",
        "deal_stage",
        "amount",
        "deal_currency_code",
        "uuid_user",
        "uuid_owner",
        "create_date",
        "close_date",
        "last_modified_date",
    ],
}

export const dealPaginationTable: ITableInfo = {
    name: "hs_deals_pagination",
    columns: ["next_after", "last_sync_date"],
}
