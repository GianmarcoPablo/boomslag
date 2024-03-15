import { Router } from "express";
import { UserRoutes } from "./users/routes-user";

export class MainRoutes {

    static get routes(): Router {
        const router = Router();

        router.use("/api/v1/users", UserRoutes.routes);

        return router;
    }
}