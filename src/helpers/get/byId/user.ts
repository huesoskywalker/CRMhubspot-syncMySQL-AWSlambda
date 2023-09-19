import { PublicUser, ErrorDetail } from "@hubspot/api-client/lib/codegen/settings/users"
import { hubspotClient } from "../../../services/hubspot"
import { winstonLogger } from "../../../services/logger"

export const getUserById = (userId: string): Promise<PublicUser> => {
    try {
        return hubspotClient.settings.users.usersApi.getById(userId)
    } catch (error: unknown) {
        if (error instanceof ErrorDetail) {
            winstonLogger.error("Error fetching User By Id from HubSpot", {
                error: error.message,
                code: error.code,
            })
        }
        return Promise.reject(error)
    }
}
