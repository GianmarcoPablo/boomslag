import { ApplyJobDto } from "../dtos/jobs/apply-job.dto";
import { ApplyJobEntity } from "../entities/jobs/apply-job.entity";
import { JobRepository } from "../repositories/jobs/jobs.repository";

interface ApplyJobUseCaseInterface {
    execute(apply: ApplyJobDto): Promise<ApplyJobEntity>
}

export class ApplyJobUseCase implements ApplyJobUseCaseInterface {
    constructor(
        private readonly jobRepository: JobRepository
    ) { }

    async execute(apply: ApplyJobDto): Promise<ApplyJobEntity> {
        return this.jobRepository.applyJob(apply)
    }
}