import { prisma } from "../../../database/postgresql-prisma";
import { CompanyDataSource } from "../../../domain/datasources/company/company.datasource";
import { CreateCompanyDto } from "../../../domain/dtos/company/create-company.dto";
import { UpdateCompanyDto } from "../../../domain/dtos/company/update-company.dto";
import { CompanyEntity } from "../../../domain/entities/company/company.entity";
import { CustomError } from "../../../domain/errors/custom.error";

export class CompanyDataSourceImpl implements CompanyDataSource {
    public async createCompany(createCompanyDto: CreateCompanyDto): Promise<CompanyEntity> {

        const { userId } = createCompanyDto

        try {
            if (!createCompanyDto) throw CustomError.badRequest('Invalid data')


            const user = await prisma.user.findUnique({ where: { id: userId }, include: { Company: true } })

            if (!user) throw CustomError.notFound('User not found')

            const isPremium = user.isPremium

            const existingCompanies = user.Company

            if (!isPremium && existingCompanies.length > 0) { // si el usuario no es premium y ya tiene una empresa
                throw CustomError.badRequest('You can only create one company');
            }

            const company = await prisma.company.create({
                data: {
                    ...createCompanyDto
                }
            })

            return CompanyEntity.fromObject(company)

        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServerError()
        }
    }
    async getCompanyById(id: string): Promise<CompanyEntity> {
        try {
            if (!id) throw CustomError.badRequest('Invalid data')
            const company = await prisma.company.findUnique({
                where: {
                    id
                }
            })
            if (!company) throw CustomError.notFound('Company not found')
            return CompanyEntity.fromObject(company)
        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServerError()
        }
    }

    async getAllCompanies(page: number, limit: number): Promise<CompanyEntity[]> {
        const limitNumber = Number(limit)
        const offset = (page - 1) * limit
        try {
            const companies = await prisma.company.findMany({
                take: limitNumber,
                skip: offset
            })
            return companies.map(company => CompanyEntity.fromObject(company))
        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServerError()
        }
    }

    async updateCompany(user: any, id: string, updateCompanyDto: UpdateCompanyDto): Promise<CompanyEntity> {
        try {
            const { id: idUser } = user
            const company = await prisma.company.update({
                where: {
                    id,
                },
                data: {
                    ...updateCompanyDto
                }
            })

            if (!company) throw CustomError.notFound('Company not found')

            if (company.userId !== idUser) {
                throw CustomError.forbidden('You do not have permission to update this company')
            }


            return CompanyEntity.fromObject(company)
        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServerError()
        }
    }

    async deleteCompany(user: any, id: string): Promise<string> {
        console.log({ user, id })
        try {
            const { id: idUser } = user

            const company = await prisma.company.findFirst({ where: { id } })
            console.log({ company })
            if (company?.userId !== idUser) {
                throw CustomError.forbidden('You do not have permission to delete this company')
            }

            await prisma.company.update({
                where: {
                    id
                },
                data: {
                    isActive: false
                }
            })

            return 'Company deleted successfully'

        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServerError()
        }
    }

    async getAllCompaniesByUser(user: any): Promise<CompanyEntity[]> {
        console.log({ user })
        try {
            const { id } = user
            const companies = await prisma.company.findMany({
                where: {
                    userId: id
                }
            })
            return companies.map(company => CompanyEntity.fromObject(company))
        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServerError()
        }
    }
}