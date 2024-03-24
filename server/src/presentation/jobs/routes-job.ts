import { Router } from "express";
import { JobRepositoryImpl } from "../../infrastructure/repositories/jobs/jobs.repository.impl";
import { JobDatasourceImpl } from "../../infrastructure/datasources/jobs/jobs.datasource.impl";
import { JobController } from "./controller-jobs";
import { ExitsUserMiddleware } from "../middlewares/users/exits-user.middleware";

export class JobsRoutes {
    static get routes(): Router {

        const router = Router();

        const jobdatasource = new JobDatasourceImpl();
        const jobRepository = new JobRepositoryImpl(jobdatasource);
        const jobController = new JobController(jobRepository);

        router.get("/", jobController.getAllJobs);
        router.get("/:id", jobController.getJobById);
        router.get("/by/companies/:companyId", jobController.getJobsByCompany);


        router.post("/", [ExitsUserMiddleware.validateJWT], jobController.createJob);
        router.put("/:id", [ExitsUserMiddleware.validateJWT], jobController.updateJob);
        router.delete("/:id", [ExitsUserMiddleware.validateJWT], jobController.deleteJob);
        router.post("/action/apply", [ExitsUserMiddleware.validateJWT], jobController.applyJob);

        router.post("/action/favorite", [ExitsUserMiddleware.validateJWT], jobController.favoriteJob);
        router.get("/by/user/:userId", [ExitsUserMiddleware.validateJWT], jobController.getJobsByUser);
        return router;
    }
}