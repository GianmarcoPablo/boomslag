import { Router } from "express";
import { JobRepositoryImpl } from "../../infrastructure/repositories/jobs/jobs.repository.impl";
import { JobDatasourceImpl } from "../../infrastructure/datasources/jobs/jobs.datasource.impl";
import { JobController } from "./controller-jobs";
import { ExitsUserMiddleware } from "../middlewares/users/exits-user.middleware";

export class JobsRoutes {
    static get routes(): Router {

        const routes = Router();

        const jobdatasource = new JobDatasourceImpl();
        const jobRepository = new JobRepositoryImpl(jobdatasource);
        const jobController = new JobController(jobRepository);

        routes.get("/");
        routes.get("/:id");
        routes.post("/", [ExitsUserMiddleware.validateJWT], jobController.createJob);
        routes.put("/:id");
        routes.delete("/:id");

        return routes;
    }
}