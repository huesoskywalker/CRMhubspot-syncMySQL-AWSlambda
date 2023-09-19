import { CollectionResponsePropertyNoPaging } from "@hubspot/api-client/lib/codegen/crm/properties"
import { syncData } from "./syncData"
import { ContactPropertyDatabaseValues, IContactProperty } from "../../types/contact"
import { hubspotClient } from "../../services/hubspot"
import { contactPropertiesTable } from "./constants/contactConstants"
import { contactPropertiesMapDataToValues } from "../mapHelpers/contactMapDataToValues"

export const syncContactProperties = async (): Promise<void> => {
    await syncData<
        CollectionResponsePropertyNoPaging,
        IContactProperty,
        ContactPropertyDatabaseValues
    >(
        () => hubspotClient.crm.properties.coreApi.getAll("contacts"),
        { name: contactPropertiesTable.name, columns: contactPropertiesTable.columns },
        contactPropertiesMapDataToValues
    )
}
