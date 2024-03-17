import { CompanyEntity } from "../entities/company/company.entity";
import { CompanyRepository } from "../repositories/company/company.repository";

interface GetCompaniesUserUseCaseInterface {
    execute(user: any): Promise<CompanyEntity[]>;
}

export class GetCompaniesUserUseCase implements GetCompaniesUserUseCaseInterface {
    constructor(
        private readonly companyRepository: CompanyRepository
    ) { }

    async execute(user: any): Promise<CompanyEntity[]> {
        return this.companyRepository.getAllCompaniesByUser(user);
    }
}