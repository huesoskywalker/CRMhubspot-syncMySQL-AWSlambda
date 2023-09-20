import {
    CollectionResponsePublicOwnerForwardPaging,
    Configuration,
    PublicOwner,
} from "@hubspot/api-client/lib/codegen/crm/owners"
import { hubspotClient } from "../../../services/hubspot"
import { IOwnerPageParams } from "../../../types/hubspot"
import { IOwnersResults } from "../../../types/owners"
export const getOwnersByPage = async (
    { email, after, limit, archived }: IOwnerPageParams,
    _options?: Configuration
): Promise<IOwnersResults> => {
    const ownersByPage: CollectionResponsePublicOwnerForwardPaging =
        await hubspotClient.crm.owners.ownersApi.getPage(email, after, limit, archived, _options)

    const propitalEmailRegex: RegExp = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@propital\.com$/

    const filteredOwners: PublicOwner[] = ownersByPage.results.filter((owner) => {
        return owner.email ? propitalEmailRegex.test(owner.email) : false
    })

    const ownersResult: IOwnersResults = {
        results: filteredOwners,
        paging: ownersByPage.paging,
    }

    return ownersResult
}
