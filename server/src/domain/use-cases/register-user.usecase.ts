import { UserRegisterDto } from "../dtos/users/users-register.dto";
import { UserEntity } from "../entities/users/users.entity";
import { UserRepository } from "../repositories/users/users.repository";

export interface RegisterUserUsecaseInterface {
    execute(user: UserRegisterDto): Promise<UserEntity>;
}

export class RegisterUserUsecase implements RegisterUserUsecaseInterface {

    constructor(
        private readonly userRepository: UserRepository
    ) { }

    execute(user: UserRegisterDto): Promise<UserEntity> {
        return this.userRepository.register(user);
    }
}