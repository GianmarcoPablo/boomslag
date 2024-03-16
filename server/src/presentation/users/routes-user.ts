import { Router } from "express";
import { UserController } from "./controller-user";
import { UserRepositoryImpl } from "../../infrastructure/repositories/users/user.repository.impl";
import { UserDatasourceImpl } from "../../infrastructure/datasources/users/user.datasource.impl";

export class UserRoutes {

    static get routes(): Router {
        const router = Router();

        const datasource = new UserDatasourceImpl();
        const repository = new UserRepositoryImpl(datasource);
        const controller = new UserController(repository);

        router.post("/register", controller.register)
        router.post("/login", controller.login)

        return router;
    }
}