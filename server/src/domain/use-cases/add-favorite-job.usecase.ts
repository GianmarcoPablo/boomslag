import { FavoriteJobDto } from "../dtos/jobs/favorite-job.dto"
import { FavoriteJobEntity } from "../entities/jobs/favorite-job.entity"
import { JobRepository } from "../repositories/jobs/jobs.repository";

interface addFavoriteJobJobUseCaseInterface {
    execute(favorite: FavoriteJobDto): Promise<string>
}

export class addFavoriteJobJobUseCase implements addFavoriteJobJobUseCaseInterface {
    constructor(private readonly jobRepository: JobRepository) { }

    async execute(favorite: FavoriteJobDto): Promise<string> {
        return this.jobRepository.addFavoriteJob(favorite)
    }
}