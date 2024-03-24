import { JobDatasource } from "../../../domain/datasources/jobs/jobs.datasource";
import { ApplyJobDto } from "../../../domain/dtos/jobs/apply-job.dto";
import { CreateJobDto } from "../../../domain/dtos/jobs/create-job.dto";
import { FavoriteJobDto } from "../../../domain/dtos/jobs/favorite-job.dto";
import { JobUpdateDto } from "../../../domain/dtos/jobs/update-job.dto";
import { ApplyJobEntity } from "../../../domain/entities/jobs/apply-job.entity";
import { FavoriteJobEntity } from "../../../domain/entities/jobs/favorite-job.entity";
import { JobEntity } from "../../../domain/entities/jobs/jobs.entity";
import { JobRepository } from "../../../domain/repositories/jobs/jobs.repository";

export class JobRepositoryImpl implements JobRepository {

    constructor(
        private readonly jobDatasource: JobDatasource
    ) { }


    createJob(job: CreateJobDto): Promise<JobEntity> {
        return this.jobDatasource.createJob(job);
    }
    getAllJobs(page: number, limit: number): Promise<JobEntity[]> {
        return this.jobDatasource.getAllJobs(page, limit);
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
    addFavoriteJob(favorite: FavoriteJobDto): Promise<FavoriteJobEntity> {
        return this.jobDatasource.addFavoriteJob(favorite);
    }
    getFavoriteJobs(userId: string): Promise<JobEntity[]> {
        throw new Error("Method not implemented.");
    }
    removeFavoriteJob(id: FavoriteJobDto): Promise<string> {
        throw new Error("Method not implemented.");
    }
    applyJob(apply: ApplyJobDto): Promise<ApplyJobEntity> {
        return this.jobDatasource.applyJob(apply);
    }
    deleteApplyJob(user: any, id: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    getJobsByCompany(companyId: string): Promise<JobEntity[]> {
        return this.jobDatasource.getJobsByCompany(companyId);
    }

    getJobsByUser(userId: string): Promise<JobEntity[]> {
        return this.jobDatasource.getJobsByUser(userId);
    }
}