import { CreateJobDto } from "../dtos/jobs/create-job.dto"
import { JobEntity } from "../entities/jobs/jobs.entity"
import { JobRepository } from "../repositories/jobs/jobs.repository";

interface CreateJobUseCaseInterface {
    execute(job: CreateJobDto): Promise<JobEntity>
}

export class CreateJobUseCase implements CreateJobUseCaseInterface {

    constructor(
        private readonly jobRepository: JobRepository
    ) { }

    async execute(job: CreateJobDto): Promise<JobEntity> {
        return this.jobRepository.createJob(job);
    }
}