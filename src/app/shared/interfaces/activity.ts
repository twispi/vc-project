export interface IActivity {
    _id: number,
    company_id: number,
    owner_id: number,
    type: number,
    text: string,
}

export interface IActivityType {
    _id: number,
    name: string,
}