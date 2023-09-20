import { PublicOwner } from "@hubspot/api-client/lib/codegen/crm/owners"
import { ownerDatabaseValuesType } from "../../types/owners"

export const ownersMapDataToValues = (owner: PublicOwner): ownerDatabaseValuesType => [
    owner.id,
    owner.userId,
    owner.email,
    owner.firstName,
    owner.lastName,
]
