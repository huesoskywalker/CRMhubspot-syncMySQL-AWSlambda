import { ITeam } from "../../../types/teams"
import { getAllTeams } from "./teams"
import {
    CollectionResponsePublicTeamNoPaging,
    PublicUser,
    ErrorDetail,
    PublicTeam,
} from "@hubspot/api-client/lib/codegen/settings/users"
import { getUserById } from "../byId/user"
import { retryOperation } from "../../retry/retryOperation"

export const getTeamsAndUsers = async (): Promise<ITeam[]> => {
    const teamResults: ITeam[] = []

    try {
        const teams: CollectionResponsePublicTeamNoPaging = await retryOperation(
            () => getAllTeams(),
            `getAllTeams()`
        )

        for (const team of teams.results as PublicTeam[]) {
            const primaryUserPromises: Promise<PublicUser>[] = team.userIds.map((userId: string) =>
                retryOperation(() => getUserById(userId), `primaryTeam getUserById(${userId})`)
            )

            const secondaryUserPromises: Promise<PublicUser>[] = team.secondaryUserIds.map(
                (userId: string) =>
                    retryOperation(
                        () => getUserById(userId),
                        `secondaryTeam getUserById(${userId})`
                    )
            )

            const [primaryUsers, secondaryUsers] = await Promise.all([
                Promise.all(primaryUserPromises),
                Promise.all(secondaryUserPromises),
            ])

            // We can perform better this and use only the primaryUsers and grab the value from
            // the secondaryTeamIds? (optional parameter confuses me at the time to insert into db)

            teamResults.push({
                id: team.id,
                name: team.name,
                primaryUsers: primaryUsers.map((user: PublicUser) => ({
                    id: user.id,
                    email: user.email,
                    roleId: user.roleId,
                    primaryTeamId: user.primaryTeamId,
                    secondaryTeamId: user.secondaryTeamIds,
                })),
                secondaryUsers: secondaryUsers.map((user: PublicUser) => ({
                    id: user.id,
                    email: user.email,
                    roleId: user.roleId,
                    primaryTeamId: user.primaryTeamId,
                    secondaryTeamIds: user.secondaryTeamIds,
                })),
            })
        }
        return teamResults
    } catch (error: unknown) {
        throw error as ErrorDetail
    }
}
