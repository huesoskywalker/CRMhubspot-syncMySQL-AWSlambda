export interface IPagination {
    next_after: string
    last_sync_date: Date
}

export type paginationDatabaseValuesType = [string, Date]
