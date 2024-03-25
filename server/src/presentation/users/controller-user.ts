import { Request, Response } from "express";
import { LoginUserUseCase, UserLoginDto, UserRegisterDto, UserRepository } from "../../domain";
import { CustomError } from "../../domain/errors/custom.error";
import { prisma } from "../../database/postgresql-prisma";
export class UserController {

    constructor(
        private readonly userRepository: UserRepository
    ) { }

    private handleError(error: any, res: Response) {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message })
        }
        console.log(error) // Winston, Console, etc
        return res.status(500).json({ error: "Internal Server Error" })
    }

    public login = async (req: Request, res: Response) => {
        const [error, loginUserDto] = UserLoginDto.create(req.body!);
        if (error) return res.status(400).json({ error });
        try {
            const user = await new LoginUserUseCase(this.userRepository).execute(loginUserDto!)
            console.log(user)
            res.status(200).json(user);
        } catch (error) {
            this.handleError(error, res);
        }
    }

    public register = async (req: Request, res: Response) => {
        const [error, userRegisterDto] = UserRegisterDto.create(req.body!);
        if (error) return res.status(400).json({ error });
        try {
            const user = await this.userRepository.register(userRegisterDto!);
            res.status(200).json(user);
        } catch (error) {
            this.handleError(error, res);
        }
    }

    public findUser = async (req: Request, res: Response) => {
        try {
            const user = await prisma.user.findUnique({ where: { email: req.body.email } })
            if (!user) return res.status(404).json({ error: "User not found" });
            res.status(200).json(user);
        } catch (error) {
            this.handleError(error, res);
        }
    }

}