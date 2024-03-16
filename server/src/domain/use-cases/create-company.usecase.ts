import { CreateCompanyDto } from "../dtos/company/create-company.dto";
import { CompanyEntity } from "../entities/company/company.entity";
import { CompanyRepository } from "../repositories/company/company.repository";

interface CreateCompanyUseCaseInterface {
    execute(company: CreateCompanyDto): Promise<CompanyEntity>;
}

export class CreateCompanyUseCase implements CreateCompanyUseCaseInterface {

    constructor(
        private readonly companyRepository: CompanyRepository
    ) { }

    execute(company: CreateCompanyDto): Promise<CompanyEntity> {
        return this.companyRepository.createCompany(company);
    }
}