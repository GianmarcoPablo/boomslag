import { UserLoginDto } from "../dtos/users/users-login.dto";
import { UserEntity } from "../entities/users/users.entity";
import { UserRepository } from "../repositories/users/users.repository";


export interface LoginUserUsecaseInterface {
    execute(user: UserLoginDto): Promise<UserEntity>;
}


export class LoginUserUseCase implements LoginUserUsecaseInterface {

    constructor(
        private readonly userRepository: UserRepository
    ) { }

    execute(user: UserLoginDto): Promise<UserEntity> {
        return this.userRepository.login(user);
    }

}