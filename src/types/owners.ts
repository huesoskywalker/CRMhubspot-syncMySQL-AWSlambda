import { PublicOwner, ForwardPaging } from "@hubspot/api-client/lib/codegen/crm/owners"

export interface IOwnersResults {
    results: PublicOwner[]
    paging?: ForwardPaging
}

export type ownerDatabaseValuesType = [
    string,
    number | undefined,
    string | undefined,
    string | undefined,
    string | undefined
]
