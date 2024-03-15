import { CreateCompanyDto } from "../../dtos/company/create-company.dto";
import { CompanyEntity } from "../../entities/company/company.entity";

export abstract class CompanyRepository {
    abstract createCompany(createCompanyDto: CreateCompanyDto): Promise<CompanyEntity>;
    abstract getCompanyById(id: string): Promise<CompanyEntity>;
}