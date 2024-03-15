import { prisma } from "../../../database/postgresql-prisma"
import { UserDatasource, UserEntity, UserLoginDto, UserRegisterDto } from "../../../domain";
import { CustomError } from "../../../domain/errors/custom.error";
import { HashPasswordAdapter } from "../../../config/adapters/hash-password.adapter";
import { JwtAdapter } from "../../../config/adapters/jwt.adapter";

export class UserDatasourceImpl implements UserDatasource {
    public async register(user: UserRegisterDto): Promise<UserEntity> {
        try {
            const userExists = await prisma.user.findFirst({ where: { email: user.email } })
            if (userExists) throw CustomError.conflict('User already exists')
            const hashedPassword = HashPasswordAdapter.hashPassword(user.password)
            const newUser = await prisma.user.create({
                data: {
                    ...user,
                    password: hashedPassword
                }
            })

            const token = await JwtAdapter.generateToken({ id: newUser.id })

            return UserEntity.fromObject({ ...newUser, token })
        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServerError()
        }
    }
    public async login(user: UserLoginDto): Promise<UserEntity> {
        try {
            const userExists = await prisma.user.findFirst({ where: { email: user.email } })
            if (!userExists) throw CustomError.notFound('User not found')
            const passwordMatch = HashPasswordAdapter.comparePassword(user.password, userExists.password)
            if (!passwordMatch) throw CustomError.unauthorized('Invalid credentials')

            const token = await JwtAdapter.generateToken({ id: userExists.id, email: userExists.email })

            return UserEntity.fromObject({ ...userExists, token })
        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServerError()
        }
    }
}