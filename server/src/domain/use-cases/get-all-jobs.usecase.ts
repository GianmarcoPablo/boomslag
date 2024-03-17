import { JobEntity } from "../entities/jobs/jobs.entity"
import { JobRepository } from "../repositories/jobs/jobs.repository";

interface GetAllJobsUseCaseInterface {
    execute(): Promise<JobEntity[]>
}

export class GetAllJobsUseCase implements GetAllJobsUseCaseInterface {
    constructor(
        private readonly jobRepository: JobRepository
    ) { }

    async execute(): Promise<JobEntity[]> {
        return this.jobRepository.getAllJobs();
    }
}