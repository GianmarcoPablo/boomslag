import { CreateCompanyDto } from "../../dtos/company/create-company.dto";
import { UpdateCompanyDto } from "../../dtos/company/update-company.dto";
import { CompanyEntity } from "../../entities/company/company.entity";

export abstract class CompanyDataSource {
    abstract createCompany(createCompanyDto: CreateCompanyDto): Promise<CompanyEntity>;
    abstract getCompanyById(id: string): Promise<CompanyEntity>;
    abstract getAllCompanies(page: number, limit: number): Promise<CompanyEntity[]>;
    abstract updateCompany(user: any, id: string, updateCompanyDto: UpdateCompanyDto): Promise<CompanyEntity>;
    abstract deleteCompany(user: any, id: string): Promise<string>;
}