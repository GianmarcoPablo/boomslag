import { Router } from "express";
import { UserRoutes } from "./users/routes-user";
import { CompanyRoutes } from "./company/routes-company";
import { JobsRoutes } from "./jobs/routes-job";
export class MainRoutes {

    static get routes(): Router {
        const router = Router();

        router.use("/api/v1/users", UserRoutes.routes);
        router.use("/api/v1/companies", CompanyRoutes.routes);
        router.use("/api/v1/jobs", JobsRoutes.routes);
        return router;
    }
}