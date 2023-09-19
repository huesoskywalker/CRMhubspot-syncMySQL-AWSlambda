export interface IDeal {
    id: string
    properties: IProperties
    associations: IAssociations
}

interface IProperties {
    hs_object_id: string
    dealname: string
    dealstage: DealStageType
    amount: string
    deal_currency_code: CurrencyCodeType
    hubspot_owner_id: string
    createdate: string
    closedate: string
    hs_lastmodifieddate: string
}

type DealStageType =
    | "54f4f7b0-3c07-4225-b4e0-6acc41a8042a"
    | "presentationscheduled"
    | "2178834"
    | "60bac08c-d553-4425-bd58-09e9bca2e991"
    | "closedwon"
    | "closedlost"
    | "83250958"
    | "83250959"
    | "83250960"
    | "83351479"
    | "83250962"
    | "83250963"

type CurrencyCodeType = "CLF"

export type dealDatabaseValuesType = [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
]

interface IAssociations {
    contacts: ContactType
}

type ContactType = {
    results: {
        id: string
        type: string
    }[]
}
