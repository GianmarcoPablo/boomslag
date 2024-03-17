import { prisma } from "../../../database/postgresql-prisma";
import { JobDatasource } from "../../../domain/datasources/jobs/jobs.datasource";
import { CreateJobDto } from "../../../domain/dtos/jobs/create-job.dto";
import { JobUpdateDto } from "../../../domain/dtos/jobs/update-job.dto";
import { JobEntity } from "../../../domain/entities/jobs/jobs.entity";
import { CustomError } from "../../../domain/errors/custom.error";

export class JobDatasourceImpl implements JobDatasource {
    public async createJob(job: CreateJobDto): Promise<JobEntity> {
        try {
            const user = await prisma.user.findUnique({ where: { id: job.userId } })
            if (!user) throw CustomError.notFound('User not found')
            const company = await prisma.company.findUnique({ where: { id: job.companyId } })
            if (!company) throw CustomError.notFound('Company not found')
            const area = await prisma.area.findUnique({ where: { id: job.areaId } })
            if (!area) throw CustomError.notFound('Area not found')

            if (job.userId !== company.userId) throw CustomError.forbidden('You are not allowed to create a job for another company')

            const { userId, ...rest } = job

            const jobCreated = await prisma.job.create({
                data: {
                    ...rest,
                }
            })

            return JobEntity.fromObject(jobCreated)
        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            console.log(error)
            throw CustomError.internalServerError()
        }
    }
    getAllJobs(): Promise<JobEntity[]> {
        throw new Error("Method not implemented.");
    }
    getJobById(id: string): Promise<JobEntity> {
        throw new Error("Method not implemented.");
    }
    updateJob(user: any, id: string, job: JobUpdateDto): Promise<JobEntity> {
        throw new Error("Method not implemented.");
    }
    deleteJob(user: any, id: string): Promise<string> {
        throw new Error("Method not implemented.");
    }

}