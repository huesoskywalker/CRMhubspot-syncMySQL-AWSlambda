import { IPagination, paginationDatabaseValuesType } from "../../types/pagination"

export const paginationMapDataToValues = (
    pagination: IPagination
): paginationDatabaseValuesType => [pagination.next_after, pagination.last_sync_date]
