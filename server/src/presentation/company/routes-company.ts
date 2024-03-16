import { Router } from "express";
import { CompanyController } from "./controller-company";
import { CompanyDataSourceImpl } from "../../infrastructure/datasources/company/company.datasource.impl";
import { CompanyRepositoryImpl } from "../../infrastructure/repositories/company/company.repository.impl";
import { ExitsUserMiddleware } from "../middlewares/users/exits-user.middleware";

export class CompanyRoutes {

    static get routes(): Router {
        const router = Router();

        const companyDataSource = new CompanyDataSourceImpl();
        const companyRepository = new CompanyRepositoryImpl(companyDataSource);
        const controller = new CompanyController(companyRepository);

        router.get('/', controller.getAllCompanies);
        router.get('/:id', controller.getCompany);
        router.post('/', [ExitsUserMiddleware.validateJWT], controller.createCompany);
        router.put('/:id', [ExitsUserMiddleware.validateJWT], controller.updateCompany);
        router.delete('/:id', [ExitsUserMiddleware.validateJWT], controller.deleteCompany);

        // obtener todas las empresas de un usuario y que no pueda obtener las empresas de otro usuario

        router.get("/protected", [ExitsUserMiddleware.validateJWT], controller.getAllCompaniesByUser);

        return router;
    }
}