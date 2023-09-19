import {
    CollectionResponsePublicTeamNoPaging,
    PublicTeam,
} from "@hubspot/api-client/lib/codegen/settings/users"
import { teamDatabaseValuesType } from "../../types/teams"
import { getAllTeams } from "../get/all/teams"
import { teamsMapDataToValues } from "../mapHelpers/teamsMapDataToValues"
import { syncData } from "./syncData"
import { teamTable } from "./constants/teamConstants"

export const syncTeams = async (): Promise<void> => {
    await syncData<CollectionResponsePublicTeamNoPaging, PublicTeam, teamDatabaseValuesType>(
        () => getAllTeams(),
        { name: teamTable.name, columns: teamTable.columns },
        teamsMapDataToValues
    )
}
