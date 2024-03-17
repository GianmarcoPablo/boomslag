import { Response, Request } from "express";
import { CustomError } from "../../domain/errors/custom.error";
import { JobRepository } from "../../domain/repositories/jobs/jobs.repository";
import { CreateJobUseCase } from "../../domain/use-cases/create-job.usecase";
import { CreateJobDto } from "../../domain/dtos/jobs/create-job.dto";
import { GetAllJobsUseCase } from "../../domain/use-cases/get-all-jobs.usecase";
import { GetJobByIdUseCase } from "../../domain/use-cases/get-job-by-id.usecase";
import { UpdateJobUseCase } from "../../domain/use-cases/update-job.usecase";
import { JobUpdateDto } from "../../domain/dtos/jobs/update-job.dto";
import { DeleteJobUseCsae } from "../../domain/use-cases/delete-job.usecase";

export class JobController {


    constructor(
        private readonly jobRepository: JobRepository
    ) { }

    private handleError(error: any, res: Response) {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message })
        }
        console.log(error) // Winston, Console, etc
        return res.status(500).json({ error: "Internal Server Error" })
    }

    public createJob = async (req: Request, res: Response) => {
        const { user } = req.body;
        try {
            const [error, createJobDto] = CreateJobDto.create({ ...req.body, userId: user.id });
            if (error) return res.status(400).json({ error });
            const job = await new CreateJobUseCase(this.jobRepository).execute(createJobDto!);
            res.status(201).json(job);
        } catch (error) {
            console.log(error)
            this.handleError(error, res);
        }
    }

    public getAllJobs = async (req: Request, res: Response) => {
        try {
            const jobs = await new GetAllJobsUseCase(this.jobRepository).execute();
            res.status(200).json(jobs);
        } catch (error) {
            this.handleError(error, res);
        }
    }

    public getJobById = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const job = await new GetJobByIdUseCase(this.jobRepository).execute(id);
            res.status(200).json(job);
        } catch (error) {
            this.handleError(error, res);
        }
    }

    public updateJob = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { user } = req.body;
        try {
            const [error, jobUpdateDto] = JobUpdateDto.create(req.body!);
            if (error) return res.status(400).json({ error });

            const job = await new UpdateJobUseCase(this.jobRepository).execute(user, id, jobUpdateDto!);
            res.status(200).json(job);
        } catch (error) {
            this.handleError(error, res);
        }
    }

    public deleteJob = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { user } = req.body;
        try {
            const rpta = await new DeleteJobUseCsae(this.jobRepository).execute(user, id);
            res.status(204).json(rpta)
        } catch (error) {
            this.handleError(error, res);
        }
    }

}