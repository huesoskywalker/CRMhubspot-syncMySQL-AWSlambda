import { winstonLogger } from "../../services/logger"
import { ITableInfo } from "../../types/database"
import { IHubSpotResponse } from "../../types/hubspot"
import { IPagination } from "../../types/pagination"
import { saveDataToDatabase } from "../database/databaseSave"
import { fetchDataFromHubSpot } from "../hubspot/hubspotFetch"
import { paginationMapDataToValues } from "../mapHelpers/paginationMapDataToValues"

export const syncData = async <TResponse extends IHubSpotResponse, TItem, TValues>(
    fetchFunc: (nextAfter?: string) => Promise<TResponse>,
    mainTable: ITableInfo,
    mapDataToValues: (item: TItem) => TValues,
    paginationTable?: ITableInfo
): Promise<void> => {
    let nextAfter: string | undefined
    try {
        do {
            const response = await fetchDataFromHubSpot(() => fetchFunc(nextAfter), "Fetch Data")
            if (response && response.results && response.results.length > 0) {
                await saveDataToDatabase(
                    response.results,
                    mainTable.name,
                    mainTable.columns,
                    mapDataToValues
                )
            }
            if (response.paging && response.paging.next) {
                nextAfter = response.paging.next.after
            } else {
                if (nextAfter && paginationTable) {
                    const paginationValues: IPagination = {
                        next_after: nextAfter,
                        last_sync_date: new Date(),
                    }
                    await saveDataToDatabase(
                        [paginationValues],
                        paginationTable.name,
                        paginationTable.columns,
                        paginationMapDataToValues
                    )
                }
                nextAfter = undefined
            }
        } while (nextAfter)
    } catch (error) {
        if (error instanceof Error) {
            winstonLogger.error("Error in syncData", {
                error: error.message,
                type: error.name,
                stack: error.stack,
                cause: error.cause,
            })
        }
    } finally {
        winstonLogger.info("syncData operation completed")
    }
}
