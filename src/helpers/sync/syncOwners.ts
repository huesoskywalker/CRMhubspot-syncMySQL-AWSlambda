import { syncData } from "./syncData"
import { IOwnersResults, ownerDatabaseValuesType } from "../../types/owners"
import { PublicOwner } from "@hubspot/api-client/lib/codegen/crm/owners"
import { getOwnersByPage } from "../get/page/owners"
import { ownersLimit, ownersTable } from "./constants/ownersConstants"
import { ownersMapDataToValues } from "../mapHelpers/ownersMapDataToValues"

export const syncOwners = async (): Promise<void> => {
    await syncData<IOwnersResults, PublicOwner, ownerDatabaseValuesType>(
        (nextAfter) => getOwnersByPage({ email: undefined, after: nextAfter, limit: ownersLimit }),
        { name: ownersTable.name, columns: ownersTable.columns },
        ownersMapDataToValues
    )
}
