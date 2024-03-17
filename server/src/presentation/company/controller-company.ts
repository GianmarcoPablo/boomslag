import { Request, Response } from "express"
import { CompanyRepository } from "../../domain/repositories/company/company.repository"
import { CreateCompanyDto } from "../../domain/dtos/company/create-company.dto"
import { CustomError } from "../../domain/errors/custom.error"
import { CreateCompanyUseCase } from "../../domain/use-cases/create-company.usecase"
import { GetAllCompaniesUseCase } from "../../domain/use-cases/get-all-companies.usecase"
import { GetCompanyByIdUseCase } from "../../domain/use-cases/get-company-by-id.usecase"
import { UpdateCompanyDto } from "../../domain/dtos/company/update-company.dto"
import { UpdateCompanyUseCase } from "../../domain/use-cases/update-company.usecase"
import { DeleteCompanyUseCase } from "../../domain/use-cases/delete-company.usecase"
import { GetCompaniesUserUseCase } from "../../domain/use-cases/get-companies-user"

export class CompanyController {


    constructor(
        private readonly companyRepository: CompanyRepository
    ) { }

    private handleError(error: any, res: Response) {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message })
        }
        console.log(error) // Winston, Console, etc
        return res.status(500).json({ error: "Internal Server Error" })
    }

    public getAllCompanies = async (req: Request, res: Response) => {
        //paginacion
        const { page = 1, limit = 10 } = req.query; // paginacion
        if (isNaN(Number(page)) || isNaN(Number(limit))) return res.status(400).json({ error: "page and limit must be a number" });
        try {
            const companies = await new GetAllCompaniesUseCase(this.companyRepository).execute(+page, +limit);
            return res.status(200).json({
                companies,
                nextPage: `http://localhost:4000/api/v1/companies?page=${+page + 1}&limit=${limit}`,
                prevPage: (+page > 1) ? `http://localhost:4000/api/v1/companies?page=${+page - 1}&limit=${limit}` : null
            });
        } catch (error) {
            if (error instanceof CustomError) {
                return res.status(error.statusCode).json({ error: error.message })
            }
            this.handleError(error, res);
        }
    }

    public getCompany = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const company = await new GetCompanyByIdUseCase(this.companyRepository).execute(id);
            return res.status(200).json(company);
        } catch (error) {
            if (error instanceof CustomError) {
                return res.status(error.statusCode).json({ error: error.message })
            }
            this.handleError(error, res);
        }
    }

    public createCompany = async (req: Request, res: Response) => {
        const { user } = req.body
        const [error, companyDto] = CreateCompanyDto.create({ ...req.body, userId: user.id });
        if (error) return res.status(400).json({ error });
        try {
            const company = await new CreateCompanyUseCase(this.companyRepository).execute(companyDto!);
            return res.status(201).json(company);
        } catch (error) {
            if (error instanceof CustomError) {
                return res.status(error.statusCode).json({ error: error.message })
            }
            this.handleError(error, res);
        }
    }

    public updateCompany = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { user } = req.body;
        const [error, companyDto] = UpdateCompanyDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            const company = await new UpdateCompanyUseCase(this.companyRepository).execute(user, id, companyDto!);
            return res.status(200).json(company);
        } catch (error) {
            if (error instanceof CustomError) {
                return res.status(error.statusCode).json({ error: error.message })
            }
            this.handleError(error, res);
        }
    }

    public deleteCompany = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { user } = req.body;
        try {
            const rpta = await new DeleteCompanyUseCase(this.companyRepository).execute(user, id);
            return res.status(204).json(rpta);
        } catch (error) {
            if (error instanceof CustomError) {
                return res.status(error.statusCode).json({ error: error.message })
            }
            this.handleError(error, res);
        }
    }

    public getAllCompaniesByUser = async (req: Request, res: Response) => {
        const { user } = req.body;
        try {
            const companies = await new GetCompaniesUserUseCase(this.companyRepository).execute(user);
            console.log(companies)
            return res.status(200).json(companies);
        } catch (error) {
            if (error instanceof CustomError) {
                return res.status(error.statusCode).json({ error: error.message })
            }
            this.handleError(error, res);
        }
    }

}