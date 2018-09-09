export interface IUser {
    _id: number,
    firstName: string,
    lastName: string,
    phone: string,
    role: number,
    email:string,
}

export interface IRole {
    _id: number,
    title: string,
    description: string,
}