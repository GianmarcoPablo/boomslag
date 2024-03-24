import { CreateJobDto } from "../../dtos/jobs/create-job.dto";
import { JobEntity } from "../../entities/jobs/jobs.entity";
import { JobUpdateDto } from "../../dtos/jobs/update-job.dto";
import { FavoriteJobDto } from "../../dtos/jobs/favorite-job.dto";
import { ApplyJobEntity } from "../../entities/jobs/apply-job.entity";
import { ApplyJobDto } from "../../dtos/jobs/apply-job.dto";
import { FavoriteJobEntity } from "../../entities/jobs/favorite-job.entity";
export abstract class JobRepository {
    abstract createJob(job: CreateJobDto): Promise<JobEntity>;
    abstract getAllJobs(page: number, limit: number): Promise<JobEntity[]>;
    abstract getJobById(id: string): Promise<JobEntity>;
    abstract updateJob(user: any, id: string, job: JobUpdateDto): Promise<JobEntity>;
    abstract deleteJob(user: any, id: string): Promise<string>;
    abstract addFavoriteJob(favorite: FavoriteJobDto): Promise<FavoriteJobEntity>;
    abstract getFavoriteJobs(userId: string): Promise<JobEntity[]>;
    abstract removeFavoriteJob(id: FavoriteJobDto): Promise<string>;
    abstract applyJob(apply: ApplyJobDto): Promise<ApplyJobEntity>;
    abstract deleteApplyJob(user: any, id: string): Promise<string>;
    abstract getJobsByCompany(companyId: string): Promise<JobEntity[]>;
    abstract getJobsByUser(userId: string): Promise<JobEntity[]>;
}