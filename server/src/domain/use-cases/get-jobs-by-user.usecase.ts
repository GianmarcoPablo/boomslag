import { JobEntity } from "../entities/jobs/jobs.entity";
import { JobRepository } from "../repositories/jobs/jobs.repository";

export interface GetJobsByUserInterface {
    execute(userId: string): Promise<JobEntity[]>
}

export class GetJobsByUserUseCase implements GetJobsByUserInterface {
    constructor(
        private readonly jobRepository: JobRepository
    ) { }

    async execute(userId: string): Promise<JobEntity[]> {
        return this.jobRepository.getJobsByUser(userId)
    }
}