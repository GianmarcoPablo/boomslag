import { UserDatasource, UserEntity, UserLoginDto, UserRegisterDto, UserRepository } from "../../../domain";

export class UserRepositoryImpl implements UserRepository {

    constructor(
        private readonly userDatasource: UserDatasource
    ) { }

    register(user: UserRegisterDto): Promise<UserEntity> {
        return this.userDatasource.register(user);
    }
    login(user: UserLoginDto): Promise<UserEntity> {
        return this.userDatasource.login(user);
    }

}