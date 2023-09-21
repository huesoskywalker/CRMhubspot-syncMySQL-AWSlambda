import {
    FilterGroup,
    PublicObjectSearchRequest,
} from "@hubspot/api-client/lib/codegen/crm/contacts"
import { ownerContactsProperties } from "../constants/ownerContactsConstants"
import { hubspotClient } from "../../../services/hubspot"

export const ownerContactsLastContacted = (ownerId: string) => {
    const today = new Date()
    const twoMonthAgo = new Date(today)
    twoMonthAgo.setMonth(today.getMonth() - 2)
    twoMonthAgo.toISOString()

    const filterGroup: FilterGroup = {
        filters: [
            {
                propertyName: "hubspot_owner_id",
                operator: "EQ",
                value: ownerId,
            },
            {
                propertyName: "lifecyclestage",
                operator: "EQ",
                value: "salesqualifiedlead",
            },
            {
                propertyName: "hubspot_owner_assigneddate",
                operator: "GTE",
                value: `${twoMonthAgo}`,
            },
        ],
    }

    const sorts = {
        propertyName: "notes_last_contacted",
        direction: "DESCENDING",
    }
    const limit: number = 100

    const ownerContactsSearchRequest: PublicObjectSearchRequest = {
        filterGroups: [filterGroup],
        sorts: [sorts],
        properties: ownerContactsProperties,
        limit: limit,
        after: 0,
    }

    return hubspotClient.crm.contacts.searchApi.doSearch(ownerContactsSearchRequest)
}
