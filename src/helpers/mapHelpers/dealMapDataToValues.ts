import { IDeal, dealDatabaseValuesType } from "../../types/deal"

export const dealMapDataToValues = (deal: IDeal): dealDatabaseValuesType => [
    deal.id,
    deal.properties.dealname,
    deal.properties.dealstage,
    deal.properties.amount,
    deal.properties.deal_currency_code,
    deal.associations?.contacts?.results[0]?.id,
    deal.properties.hubspot_owner_id,
    deal.properties.createdate,
    deal.properties.closedate,
    deal.properties.hs_lastmodifieddate,
]
