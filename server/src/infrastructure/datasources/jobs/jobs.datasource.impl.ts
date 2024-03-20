import { prisma } from "../../../database/postgresql-prisma";
import { JobDatasource } from "../../../domain/datasources/jobs/jobs.datasource";
import { ApplyJobDto } from "../../../domain/dtos/jobs/apply-job.dto";
import { CreateJobDto } from "../../../domain/dtos/jobs/create-job.dto";
import { FavoriteJobDto } from "../../../domain/dtos/jobs/favorite-job.dto";
import { JobUpdateDto } from "../../../domain/dtos/jobs/update-job.dto";
import { ApplyJobEntity } from "../../../domain/entities/jobs/apply-job.entity";
import { FavoriteJobEntity } from "../../../domain/entities/jobs/favorite-job.entity";
import { JobEntity } from "../../../domain/entities/jobs/jobs.entity";
import { CustomError } from "../../../domain/errors/custom.error";

export class JobDatasourceImpl implements JobDatasource {

    public async createJob(job: CreateJobDto): Promise<JobEntity> {
        try {
            const { userId, companyId, ...rest } = job
            const user = await prisma.user.findUnique({ where: { id: userId } })
            if (!user) throw CustomError.notFound('User not found')
            const company = await prisma.company.findUnique({ where: { id: companyId } })
            if (!company) throw CustomError.notFound('Company not found')
            const area = await prisma.area.findUnique({ where: { id: job.areaId } })
            if (!area) throw CustomError.notFound('Area not found')

            if (userId !== company.userId) throw CustomError.forbidden('You are not allowed to create a job for another company')

            const newJob = await prisma.job.create({
                data: {
                    ...rest,
                    companyId,
                }
            })

            const jobs = await prisma.job.findMany({ where: { companyId } })

            if (jobs.length >= 5 && !user.isPremium) {
                throw CustomError.forbidden('You can only create 5 jobs , upgrade to premium to create more jobs.')
            }

            return JobEntity.fromObject(newJob)

        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            console.log(error)
            throw CustomError.internalServerError()
        }
    }
    public async getAllJobs(page: number, limit: number): Promise<JobEntity[]> {
        const limitNumber = Number(limit)
        const offset = (page - 1) * limit
        try {
            const jobs = await prisma.job.findMany({
                take: limitNumber,
                skip: offset,
            })
            return jobs.map(job => JobEntity.fromObject(job))
        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            console.log(error)
            throw CustomError.internalServerError()
        }
    }
    public async getJobById(id: string): Promise<JobEntity> {
        try {
            const job = await prisma.job.findUnique({ where: { id } })
            if (!job) throw CustomError.notFound('Job not found')
            return JobEntity.fromObject(job)
        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            console.log(error)
            throw CustomError.internalServerError()
        }
    }
    public async updateJob(user: any, id: string, job: JobUpdateDto) {
        try {
            const { id: idUser } = user
            const { companyId } = job

            const company = await prisma.company.findUnique({ where: { id: companyId } })

            if (company?.userId !== idUser) throw CustomError.forbidden('You are not allowed to update a job for another company')

            const jobToUpdate = await prisma.job.findUnique({ where: { id } })

            if (!jobToUpdate) throw CustomError.notFound('Job not found')

            const jobUpdated = prisma.job.update({
                where: {
                    id
                },
                data: {
                    ...job
                },

            })

            return jobUpdated

        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            console.log(error)
            throw CustomError.internalServerError()
        }
    }
    public async deleteJob(user: any, id: string): Promise<string> {
        try {

            const { id: idUser } = user

            const jobToDelete = await prisma.job.findUnique({ where: { id } })

            if (!jobToDelete) throw CustomError.notFound('Job not found')

            const company = await prisma.company.findUnique({ where: { id: jobToDelete.companyId } })

            if (company?.userId !== idUser) throw CustomError.forbidden('You are not allowed to delete a job for another company')

            await prisma.job.delete({ where: { id } })

            return 'Job deleted'

        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServerError()
        }
    }
    public async addFavoriteJob(favorite: FavoriteJobDto): Promise<FavoriteJobEntity> {
        try {
            const { userId, jobId } = favorite
            const user = await prisma.user.findUnique({ where: { id: userId } })
            if (!user) throw CustomError.notFound('User not found')
            const job = await prisma.job.findUnique({ where: { id: jobId } })
            if (!job) throw CustomError.notFound('Job not found')

            const favoriteJob = await prisma.favoriteJob.create({
                data: {
                    userId,
                    jobId
                }
            })

            return FavoriteJobEntity.fromObject(favoriteJob)
        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServerError()
        }
    }
    public async getFavoriteJobs(userId: string): Promise<JobEntity[]> {
        throw new Error("Method not implemented.");
    }
    public async removeFavoriteJob(favorite: FavoriteJobDto): Promise<string> {
        const { id } = favorite
        try {
            const favoriteJob = await prisma.favoriteJob.findUnique({ where: { id } })
            if (!favoriteJob) throw CustomError.notFound('Favorite job not found')
            await prisma.favoriteJob.delete({ where: { id } })
            return 'Favorite job deleted'
        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServerError()
        }
    }
    public async applyJob(apply: ApplyJobDto): Promise<ApplyJobEntity> {
        try {
            const { userId, jobId } = apply
            const user = await prisma.user.findUnique({ where: { id: userId } })
            if (!user) throw CustomError.notFound('User not found')
            const job = await prisma.job.findUnique({ where: { id: jobId } })
            if (!job) throw CustomError.notFound('Job not found')

            const applyJob = await prisma.application.create({
                data: {
                    userId,
                    jobId
                }
            })

            return ApplyJobEntity.fromObject(applyJob)
        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServerError()
        }
    }
    public async deleteApplyJob(user: any, id: string): Promise<string> {
        try {

            const application = await prisma.application.findUnique({ where: { id } })
            if (!application) throw CustomError.notFound('Application not found')
            await prisma.application.delete({ where: { id } })
            return 'Application deleted'

        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServerError()
        }
    }
}