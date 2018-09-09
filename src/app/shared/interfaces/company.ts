export interface ICompany {

    _id: number,
    owner_id: number,
    name: string,
    website: string,
    phone: string,
    lifecycle_stage_id: number,
    industry_id: number,
    email: string,
    emp_count_id: number,
    created_date: Date,
    city: string,
    country: string,
    province: string,
}

export interface IProduct {
    _id: number,
    company_id: number,
    name: number,
    stage: number,
    created_date: Date,
    launch_date: Date,
    funding_status: number,
    type: number,
    industry: number,
}

export interface IIndustry {
    _id: number,
    title: string,
}

export interface IProductStage {
    _id: number,
    title: string,
    description: string,
}

export interface IProductFundingStatus {
    _id: number,
    title: string,
    description: string,
}

export interface IProductType {
    _id: number,
    title: string,
    description: string,
}