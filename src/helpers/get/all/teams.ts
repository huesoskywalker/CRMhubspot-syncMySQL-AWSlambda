import {
    CollectionResponsePublicTeamNoPaging,
    ErrorDetail,
} from "@hubspot/api-client/lib/codegen/settings/users"
import { hubspotClient } from "../../../services/hubspot"

export const getAllTeams = async (): Promise<CollectionResponsePublicTeamNoPaging> => {
    try {
        return await hubspotClient.settings.users.teamsApi.getAll()
    } catch (error: unknown) {
        throw error as ErrorDetail
    }
}
