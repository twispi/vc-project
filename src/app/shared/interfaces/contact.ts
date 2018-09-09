export interface IContact {
    _id: number,
    company_id: number,
    firstName: string,
    lastName: string,
    phone: string,
    owner_id: number,
    province: string,
    country: string,
    city: string,
    type: number,
    email:string,
}

export interface IContactType {
    _id: number,
    title: string,
    description: string
}