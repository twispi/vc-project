export interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    phone: string,
    role: number,
    email:string,
}

export interface IRole {
    id: number,
    title: string,
    description: string,
}