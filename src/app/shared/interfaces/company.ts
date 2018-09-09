export interface ICompany {

    id: number,
    owner_id: number,
    name: string,
    website: string,
    phone: string,
    lifecycle_stage: number,
    industry_id: number,
    email: string,
    emp_count_id: number,
    created_date: Date,
    city: string,
    country: string,
    province: string,
}

export interface IProduct {
    id: number,
    company_id: number,
    name: number,
    stage: number,
    created_date: Date,
    launch_date: Date,
    funding_status: number,
    type: number,
    industry: number,
}

export interface ILifecycle_Stage {
    id: number,
    name: string,
}

export interface IIndustry {
    id: number,
    industry_name: string,
}

export interface IProductStage {
    id: number,
    name: string,
    description: string,
}

export interface IProductFundingStatus {
    id: number,
    name: string,
    description: string,
}

export interface IProductType {
    id: number,
    name: string,
    description: string,
}