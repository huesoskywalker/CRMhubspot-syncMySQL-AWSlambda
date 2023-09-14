export const CONTACTS_PAGINATION_QUERY = `SELECT next_after FROM hs_contacts_pagination ORDER BY last_sync_date DESC LIMIT 1`
