import {
    CollectionResponseSimplePublicObjectWithAssociationsForwardPaging,
    Configuration,
} from "@hubspot/api-client/lib/codegen/crm/contacts"
import { IPageParams } from "../../../types/hubspot"
import { hubspotClient } from "../../../services/hubspot"

export const getContactsByPage = (
    { limit, after, properties, propertiesWithHistory, associations, archived }: IPageParams,
    _options?: Configuration
): Promise<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging> => {
    return hubspotClient.crm.contacts.basicApi.getPage(
        limit,
        after,
        properties,
        propertiesWithHistory,
        associations,
        archived,
        _options
    )
}
