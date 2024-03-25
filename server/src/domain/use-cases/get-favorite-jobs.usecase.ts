import { FavoriteJobEntity } from "../entities/jobs/favorite-job.entity"
import { JobRepository } from "../repositories/jobs/jobs.repository";

interface GetFavoriteJobsUseCaseInterface {
    execute(userId: string): Promise<FavoriteJobEntity[]>
}

export class GetFavoriteJobsUseCase implements GetFavoriteJobsUseCaseInterface {
    constructor(
        private readonly jobRepository: JobRepository
    ) { }

    async execute(userId: string): Promise<FavoriteJobEntity[]> {
        return this.jobRepository.getFavoriteJobs(userId);
    }
}