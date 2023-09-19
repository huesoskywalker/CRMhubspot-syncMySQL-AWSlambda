import { PublicTeam } from "@hubspot/api-client/lib/codegen/settings/users"
import { teamDatabaseValuesType } from "../../types/teams"

export const teamsMapDataToValues = (team: PublicTeam): teamDatabaseValuesType => [
    team.id,
    team.name,
]
