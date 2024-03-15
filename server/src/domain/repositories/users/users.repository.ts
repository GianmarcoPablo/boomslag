import { UserLoginDto, UserEntity, UserRegisterDto } from "../..";

export abstract class UserRepository {
    abstract register(user: UserRegisterDto): Promise<UserEntity>;
    abstract login(user: UserLoginDto): Promise<UserEntity>;
}