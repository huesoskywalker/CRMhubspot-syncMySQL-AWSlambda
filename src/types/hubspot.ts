export interface IPageParams {
    limit?: number
    after?: string
    properties?: Array<string>
    propertiesWithHistory?: Array<string>
    associations?: Array<string>
    archived?: boolean
}

export interface IOwnerPageParams {
    email?: string
    after?: string
    limit?: number
    archived?: boolean
}

export interface IHubSpotResponse {
    results: any[]
    paging?: {
        next?: {
            after: string
        }
    }
}
