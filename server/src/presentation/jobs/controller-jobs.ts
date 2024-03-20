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
import { addFavoriteJobJobUseCase } from "../../domain/use-cases/add-favorite-job.usecase";
import { FavoriteJobDto } from "../../domain/dtos/jobs/favorite-job.dto";
import { ApplyJobUseCase } from "../../domain/use-cases/apply-job.usecase";
import { ApplyJobDto } from "../../domain/dtos/jobs/apply-job.dto";
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
        const { page = 1, limit = 10 } = req.query; // paginacion
        if (isNaN(Number(page)) || isNaN(Number(limit))) return res.status(400).json({ error: "page and limit must be a number" });
        try {
            const jobs = await new GetAllJobsUseCase(this.jobRepository).execute(+page, +limit);
            res.status(200).json({
                jobs,
                nextPage: `http://localhost:4000/api/v1/jobs?page=${+page + 1}&limit=${limit}`,
                prevPage: (+page > 1) ? `http://localhost:4000/api/v1/jobs?page=${+page - 1}&limit=${limit}` : null
            });
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

    public applyJob = async (req: Request, res: Response) => {
        try {
            const { user } = req.body;
            const [error, applyJobDto] = ApplyJobDto.create({ ...req.body, userId: user.id });
            if (error) return res.status(400).json({ error });
            const apply = await new ApplyJobUseCase(this.jobRepository).execute(applyJobDto!);
            res.status(201).json(apply);
        } catch (error) {
            this.handleError(error, res);
        }
    }

    public favoriteJob = async (req: Request, res: Response) => {
        try {
            const { user } = req.body;
            const [error, favoriteJobDto] = FavoriteJobDto.create({ ...req.body, userId: user.id });
            if (error) return res.status(400).json({ error });
            const favorite = await new addFavoriteJobJobUseCase(this.jobRepository).execute(favoriteJobDto!);
            res.status(201).json(favorite);
        } catch (error) {
            this.handleError(error, res);
        }
    }

}