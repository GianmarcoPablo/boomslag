import { UpdateCompanyDto } from "../dtos/company/update-company.dto"
import { CompanyEntity } from "../entities/company/company.entity"
import { CompanyRepository } from "../repositories/company/company.repository"

interface UpdateCompanyUseCaseInterface {
    execute(user: any, id: string, updateCompanyDto: UpdateCompanyDto): Promise<CompanyEntity>
}

export class UpdateCompanyUseCase implements UpdateCompanyUseCaseInterface {
    constructor(
        private readonly companyRepository: CompanyRepository
    ) { }

    execute(user: any, id: string, updateCompanyDto: UpdateCompanyDto): Promise<CompanyEntity> {
        return this.companyRepository.updateCompany(user, id, updateCompanyDto);
    }
}