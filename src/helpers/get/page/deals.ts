import { CollectionResponseSimplePublicObjectWithAssociationsForwardPaging } from "@hubspot/api-client/lib/codegen/crm/deals"
import { hubspotClient } from "../../../services/hubspot"
import { IPageParams } from "../../../types/hubspot"
import { Configuration } from "@hubspot/api-client/lib/codegen/crm/deals"

export const getDealsByPage = (
    { limit, after, properties, propertiesWithHistory, associations, archived }: IPageParams,
    _options?: Configuration
): Promise<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging> => {
    return hubspotClient.crm.deals.basicApi.getPage(
        limit,
        after,
        properties,
        propertiesWithHistory,
        associations,
        archived,
        _options
    )
}
