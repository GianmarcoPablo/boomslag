import { JobEntity } from "../entities/jobs/jobs.entity";
import { JobRepository } from "../repositories/jobs/jobs.repository";
interface GetJobsByCompanyUseCaseInterface {
    execute(companyId: string): Promise<JobEntity[]>
}

export class GetJobsByCompanyUseCase implements GetJobsByCompanyUseCaseInterface {
    constructor(
        private readonly jobRepository: JobRepository
    ) { }

    async execute(companyId: string): Promise<JobEntity[]> {
        return this.jobRepository.getJobsByCompany(companyId);
    }
}