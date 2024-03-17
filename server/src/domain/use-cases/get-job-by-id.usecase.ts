import { JobEntity } from "../entities/jobs/jobs.entity"
import { JobRepository } from "../repositories/jobs/jobs.repository";

interface GetJobByIdUseCaseInterface {
    execute(id: string): Promise<JobEntity>
}

export class GetJobByIdUseCase implements GetJobByIdUseCaseInterface {
    constructor(
        private readonly jobRepository: JobRepository
    ) { }

    async execute(id: string): Promise<JobEntity> {
        return this.jobRepository.getJobById(id);
    }
}