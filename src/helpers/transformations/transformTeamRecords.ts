import { ITeam, ITeamUserRecord, ITeamUsersResults, IUser } from "../../types/teams"

export const transformPrimaryTeamsToRecords = (teams: ITeam[]): ITeamUsersResults => {
    return {
        results: teams.flatMap((team: ITeam) => [
            ...team.primaryUsers.map((user: IUser) => ({
                teamId: team.id,
                userId: user.id,
                userEmail: user.email,
            })),
        ]),
    }
}

export const transformSecondaryTeamsRecords = (teams: ITeam[]): ITeamUsersResults => {
    return {
        results: teams.flatMap((team: ITeam) => [
            ...team.secondaryUsers.map((user: IUser) => ({
                teamId: team.id,
                userId: user.id,
                userEmail: user.email,
            })),
        ]),
    }
}
