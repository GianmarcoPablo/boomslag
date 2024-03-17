import { JobUpdateDto } from "../dtos/jobs/update-job.dto"
import { JobEntity } from "../entities/jobs/jobs.entity"
import { JobRepository } from "../repositories/jobs/jobs.repository";

interface UpdateJobUseCaseInterface {
    execute(user: any, id: string, job: JobUpdateDto): Promise<JobEntity>
}

export class UpdateJobUseCase implements UpdateJobUseCaseInterface {
    constructor(
        private readonly jobRepository: JobRepository
    ) { }

    async execute(user: any, id: string, job: JobUpdateDto): Promise<JobEntity> {
        return this.jobRepository.updateJob(user, id, job);
    }
}