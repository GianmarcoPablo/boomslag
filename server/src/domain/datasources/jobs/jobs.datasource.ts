import { CreateJobDto } from "../../dtos/jobs/create-job.dto";
import { JobEntity } from "../../entities/jobs/jobs.entity";
import { JobUpdateDto } from "../../dtos/jobs/update-job.dto";
export abstract class JobDatasource {
    abstract createJob(job: CreateJobDto): Promise<JobEntity>;
    abstract getAllJobs(): Promise<JobEntity[]>;
    abstract getJobById(id: string): Promise<JobEntity>;
    abstract updateJob(user: any, id: string, job: JobUpdateDto): Promise<JobEntity>;
    abstract deleteJob(user: any, id: string): Promise<string>;
}