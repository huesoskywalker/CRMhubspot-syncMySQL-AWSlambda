export interface ITableInfo {
    name: string
    columns: string[]
}

export interface IMySqlTeam {
    id: string
    name: string
    userIds: string[]
    secondaryUserIds: string[]
}
