import { JobDatasource } from "../../../domain/datasources/jobs/jobs.datasource";
import { CreateJobDto } from "../../../domain/dtos/jobs/create-job.dto";
import { JobUpdateDto } from "../../../domain/dtos/jobs/update-job.dto";
import { JobEntity } from "../../../domain/entities/jobs/jobs.entity";
import { JobRepository } from "../../../domain/repositories/jobs/jobs.repository";

export class JobRepositoryImpl implements JobRepository {

    constructor(
        private readonly jobDatasource: JobDatasource
    ) { }

    createJob(job: CreateJobDto): Promise<JobEntity> {
        return this.jobDatasource.createJob(job);
    }
    getAllJobs(): Promise<JobEntity[]> {
        return this.jobDatasource.getAllJobs();
    }
    getJobById(id: string): Promise<JobEntity> {
        return this.jobDatasource.getJobById(id);
    }
    updateJob(user: any, id: string, job: JobUpdateDto): Promise<JobEntity> {
        return this.jobDatasource.updateJob(user, id, job);
    }
    deleteJob(user: any, id: string): Promise<string> {
        return this.jobDatasource.deleteJob(user, id);
    }
}