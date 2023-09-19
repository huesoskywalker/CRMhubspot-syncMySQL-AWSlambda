import { winstonLogger } from "../../services/logger"
import {
    ITeam,
    ITeamUserRecord,
    ITeamUsersResults,
    teamUsersDatabaseValuesType,
} from "../../types/teams"
import { getTeamsAndUsers } from "../get/all/teamsAndUsers"
import { teamUsersMapDataToValues } from "../mapHelpers/teamUsersMapDataToValues"
import {
    transformPrimaryTeamsToRecords,
    transformSecondaryTeamsRecords,
} from "../transformations/transformTeamRecords"
import { usersPrimaryTeamTable, usersSecondaryTeamTable } from "./constants/teamUsersConstants"
import { syncData } from "./syncData"

export const syncTeamUsers = async (): Promise<void> => {
    try {
        const teamsAndUsers: ITeam[] = await getTeamsAndUsers()

        const usersFromPrimaryTeam = syncData<
            ITeamUsersResults,
            ITeamUserRecord,
            teamUsersDatabaseValuesType
        >(
            () => Promise.resolve(transformPrimaryTeamsToRecords(teamsAndUsers)),
            { name: usersPrimaryTeamTable.name, columns: usersPrimaryTeamTable.columns },
            teamUsersMapDataToValues
        )

        const usersFromSecondaryTeam = syncData<
            ITeamUsersResults,
            ITeamUserRecord,
            teamUsersDatabaseValuesType
        >(
            () => Promise.resolve(transformSecondaryTeamsRecords(teamsAndUsers)),
            { name: usersSecondaryTeamTable.name, columns: usersSecondaryTeamTable.columns },
            teamUsersMapDataToValues
        )

        // The Promise.all are splitted so we do not overload the rate limit
        await Promise.all([usersFromPrimaryTeam])
        await Promise.all([usersFromSecondaryTeam])
    } catch (error: unknown) {
        if (error instanceof Error) {
            winstonLogger.error("Error in syncTeamUsers", {
                error: error.message,
                type: error.name,
                stack: error.stack,
                cause: error.cause,
            })
        }
    }
}
