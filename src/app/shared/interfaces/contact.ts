export interface IContact {
    id: number,
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
    created_date
}

export interface IContactType {
    id: number,
    title: string,
    description: string
}