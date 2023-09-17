export const DEALS_PAGINATION_QUERY: string = `SELECT next_after FROM hs_deals_pagination ORDER BY last_sync_date DESC LIMIT 1`
