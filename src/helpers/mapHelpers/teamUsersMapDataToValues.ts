import { ITeamUserRecord, teamUsersDatabaseValuesType } from "../../types/teams"

export const teamUsersMapDataToValues = (
    teamRecord: ITeamUserRecord
): teamUsersDatabaseValuesType => [teamRecord.userId, teamRecord.userEmail, teamRecord.teamId]
