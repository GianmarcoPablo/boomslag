import { JobRepository } from "../repositories/jobs/jobs.repository";

interface DeleteJobUseCaseInterface {
    execute(user: any, id: string): Promise<string>
}

export class DeleteJobUseCsae implements DeleteJobUseCaseInterface {
    constructor(
        private readonly jobRepository: JobRepository
    ) { }

    async execute(user: any, id: string): Promise<string> {
        return this.jobRepository.deleteJob(user, id);
    }
}