import { Router } from "express";
import { CompanyController } from "./controller-company";

export class CompanyRoutes {

    static get router(): Router {
        const router = Router();
        const controller = new CompanyController();

        router.get('/company', controller.getAllCompanies);
        router.get('/company/:id', controller.getCompany);
        router.post('/company', controller.createCompany);
        router.put('/company/:id', controller.updateCompany);
        router.delete('/company/:id', controller.deleteCompany);

        return router;
    }
}