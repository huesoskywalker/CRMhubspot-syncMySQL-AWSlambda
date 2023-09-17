import { CollectionResponseSimplePublicObjectWithAssociationsForwardPaging } from "@hubspot/api-client/lib/codegen/crm/contacts"
import { syncData } from "./syncData"
import { IContact, contactDatabaseValuesType } from "../../types/contact"
import {
    contactLimit,
    contactPaginationTable,
    contactProperties,
    contactTable,
} from "./constants/contactConstants"
import { contactMapDataToValues } from "../mapHelpers/contactMapDataToValues"
import { CONTACTS_PAGINATION_QUERY } from "../../database/query/contactsPagination"
import { getLastPage } from "../database/pagination/getLastPage"
import { getContactsByPage } from "../get/page/contacts"

export const syncContacts = async (): Promise<void> => {
    const lastNextAfter = await getLastPage(CONTACTS_PAGINATION_QUERY)
    await syncData<
        CollectionResponseSimplePublicObjectWithAssociationsForwardPaging,
        IContact,
        contactDatabaseValuesType
    >(
        (nextAfter = lastNextAfter) =>
            getContactsByPage({
                limit: contactLimit,
                after: nextAfter,
                properties: contactProperties,
            }),
        { name: contactTable.name, columns: contactTable.columns },
        contactMapDataToValues,
        { name: contactPaginationTable.name, columns: contactPaginationTable.columns }
    )
}
