import {
    CollectionResponseWithTotalSimplePublicObjectForwardPaging,
    SimplePublicObject,
} from "@hubspot/api-client/lib/codegen/crm/contacts"
import { getAllOwners } from "../database/owners/all"
import { ALL_OWNERS_QUERY } from "../../database/query/owners"
import { ownerContactsLastContacted } from "./filters/ownerContactsLastContacted"
import { fetchDataFromHubSpot } from "../hubspot/hubspotFetch"
import { winstonLogger } from "../../services/logger"

export const searchOwnerContacts = async () => {
    let nextAfter
    const ownerResult: Array<{
        email: string
        contacts: SimplePublicObject[]
    }> = []
    try {
        const owners: Array<{ uuid: string; email: string }> = await getAllOwners(ALL_OWNERS_QUERY)
        for (const owner of owners) {
            const ownerEntry = {
                email: owner.email,
                contacts: [] as SimplePublicObject[],
            }
            do {
                const ownerContacts: CollectionResponseWithTotalSimplePublicObjectForwardPaging =
                    await fetchDataFromHubSpot(
                        () => ownerContactsLastContacted(owner.uuid),
                        "Fetch Owners Contacts"
                    )
                ownerEntry.contacts.push(...ownerContacts.results)
                ownerResult
                if (ownerContacts.paging && ownerContacts.paging.next) {
                    nextAfter = ownerContacts.paging?.next?.after
                } else {
                    nextAfter = undefined
                }
            } while (nextAfter)
            ownerResult.push(ownerEntry)
        }
        return ownerResult
    } catch (error: unknown) {
        if (error instanceof Error) {
            winstonLogger.error("Error fetching Owner Contacts", {
                error: error.message,
                type: error.name,
                stack: error.stack,
                cause: error.cause,
            })
        }
    } finally {
        winstonLogger.info(`Fetch Owner Last Contacted completed`)
    }
}
