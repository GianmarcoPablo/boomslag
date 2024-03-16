import { CompanyDataSource } from "../../../domain/datasources/company/company.datasource";
import { CreateCompanyDto } from "../../../domain/dtos/company/create-company.dto";
import { UpdateCompanyDto } from "../../../domain/dtos/company/update-company.dto";
import { CompanyEntity } from "../../../domain/entities/company/company.entity";
import { CompanyRepository } from "../../../domain/repositories/company/company.repository";

export class CompanyRepositoryImpl implements CompanyRepository {

    constructor(
        private readonly companyDataSource: CompanyDataSource
    ) { }

    createCompany(createCompanyDto: CreateCompanyDto): Promise<CompanyEntity> {
        return this.companyDataSource.createCompany(createCompanyDto);
    }
    getCompanyById(id: string): Promise<CompanyEntity> {
        return this.companyDataSource.getCompanyById(id);
    }

    getAllCompanies(page: number, limit: number): Promise<CompanyEntity[]> {
        return this.companyDataSource.getAllCompanies(page, limit);
    }

    updateCompany(user: any, id: string, updateCompanyDto: UpdateCompanyDto): Promise<CompanyEntity> {
        return this.companyDataSource.updateCompany(user, id, updateCompanyDto);
    }

    deleteCompany(user: any, id: string): Promise<string> {
        return this.companyDataSource.deleteCompany(user, id);
    }
}