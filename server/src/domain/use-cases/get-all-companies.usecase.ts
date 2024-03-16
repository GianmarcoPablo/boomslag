import { CompanyEntity } from "../entities/company/company.entity"
import { CompanyRepository } from "../repositories/company/company.repository";


interface GetAllCompaniesUseCaseInterface {
    execute(page: number, limit: number): Promise<CompanyEntity[]>
}

export class GetAllCompaniesUseCase implements GetAllCompaniesUseCaseInterface {

    constructor(
        private readonly companyRepository: CompanyRepository
    ) { }

    async execute(page: number, limit: number): Promise<CompanyEntity[]> {
        return this.companyRepository.getAllCompanies(page, limit);
    }
}