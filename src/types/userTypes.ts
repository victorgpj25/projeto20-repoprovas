export interface IUser {
    id: number
    email: string
    password: string
}

export type IuserInsertData = Omit<IUser, 'id'>