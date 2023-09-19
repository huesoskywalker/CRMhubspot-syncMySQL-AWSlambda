import { CollectionResponseSimplePublicObjectWithAssociationsForwardPaging } from "@hubspot/api-client/lib/codegen/crm/deals"
import {
    dealAssociations,
    dealLimit,
    dealPaginationTable,
    dealProperties,
    dealTable,
} from "./constants/dealConstants"
import { IDeal, dealDatabaseValuesType } from "../../types/deal"
import { dealMapDataToValues } from "../mapHelpers/dealMapDataToValues"
import { syncData } from "./syncData"
import { DEALS_PAGINATION_QUERY } from "../../database/query/dealsPagination"
import { getLastPage } from "../database/pagination/getLastPage"
import { getDealsByPage } from "../get/page/deals"

export const syncDeals = async (): Promise<void> => {
    const lastNextAfter = await getLastPage(DEALS_PAGINATION_QUERY)
    await syncData<
        CollectionResponseSimplePublicObjectWithAssociationsForwardPaging,
        IDeal,
        dealDatabaseValuesType
    >(
        (nextAfter = lastNextAfter) =>
            getDealsByPage({
                limit: dealLimit,
                after: nextAfter,
                properties: dealProperties,
                propertiesWithHistory: undefined,
                associations: dealAssociations,
            }),
        { name: dealTable.name, columns: dealTable.columns },
        dealMapDataToValues,
        { name: dealPaginationTable.name, columns: dealPaginationTable.columns }
    )
}
