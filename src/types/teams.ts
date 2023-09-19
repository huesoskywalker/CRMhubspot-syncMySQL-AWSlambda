export interface IUser {
    id: string
    email: string
    roleId?: string
    primaryTeamId?: string
    secondaryTeamIds?: string[]
}

export interface ITeam {
    id: string
    name: string
    primaryUsers: IUser[]
    secondaryUsers: IUser[]
}

export interface ITeamUsersResults {
    results: ITeamUserRecord[]
}
export interface ITeamUserRecord {
    teamId: string
    userId: string
    userEmail: string
}

// this is related based on the quantity of properties we are inserting in the database
// and in most cases there are not all the properties
export type teamDatabaseValuesType = [string, string]

export type teamUsersDatabaseValuesType = [string, string, string]
