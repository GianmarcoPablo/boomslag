import { prisma } from "../../../database/postgresql-prisma";
import { JobDatasource } from "../../../domain/datasources/jobs/jobs.datasource";
import { CreateJobDto } from "../../../domain/dtos/jobs/create-job.dto";
import { JobUpdateDto } from "../../../domain/dtos/jobs/update-job.dto";
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

            // Si una compañía pertenece a un usuario premium, puede crear más de 5 trabajos, de lo contrario, solo puede crear 5 trabajos

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

            console.log({ jobs }) // Ahora debería mostrar todos los trabajos de la compañía, incluyendo el recién creado

            return JobEntity.fromObject(newJob)

        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            console.log(error)
            throw CustomError.internalServerError()
        }
    }
    public async getAllJobs(): Promise<JobEntity[]> {
        try {
            const jobs = await prisma.job.findMany()
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

            await prisma.job.delete({ where: { id } })

            return 'Job deleted'

        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServerError()
        }
    }

}