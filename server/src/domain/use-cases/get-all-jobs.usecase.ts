import { JobEntity } from "../entities/jobs/jobs.entity"
import { JobRepository } from "../repositories/jobs/jobs.repository";

interface GetAllJobsUseCaseInterface {
    execute(number: number, limit: number): Promise<JobEntity[]>
}

export class GetAllJobsUseCase implements GetAllJobsUseCaseInterface {
    constructor(
        private readonly jobRepository: JobRepository
    ) { }

    async execute(page: number, limit: number): Promise<JobEntity[]> {
        return this.jobRepository.getAllJobs(page, limit)
    }
}