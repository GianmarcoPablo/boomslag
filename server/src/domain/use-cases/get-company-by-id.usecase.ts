import { CompanyEntity } from "../entities/company/company.entity"
import { CompanyRepository } from "../repositories/company/company.repository";

interface GetCompanyByIdUseCaseInterface {
    execute(id: string): Promise<CompanyEntity>
}

export class GetCompanyByIdUseCase implements GetCompanyByIdUseCaseInterface {
    constructor(
        private readonly companyRepository: CompanyRepository
    ) { }

    async execute(id: string): Promise<CompanyEntity> {
        return this.companyRepository.getCompanyById(id);
    }
}