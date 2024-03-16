import { CompanyRepository } from "../repositories/company/company.repository";

interface DeleteCompanyUseCaseInterface {
    execute(user: any, id: string): Promise<string>;
}

export class DeleteCompanyUseCase implements DeleteCompanyUseCaseInterface {
    constructor(
        private readonly companyRepository: CompanyRepository
    ) { }

    async execute(user: any, id: string): Promise<string> {
        return this.companyRepository.deleteCompany(user, id);
    }
}