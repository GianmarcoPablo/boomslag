

export class UserLoginDto {
    constructor(
        public readonly email: string,
        public readonly password: string
    ) { }


    static create(props: { [key: string]: any }): [string?, UserLoginDto?] {

        const { email, password } = props;

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!email) return ['email is required', undefined];
        if (!emailRegex.test(email)) return ['email is invalid', undefined];
        if (!password) return ['password is required', undefined];
        if (password.length < 6) return ['password must be at least 6 characters', undefined];

        return [undefined, new UserLoginDto(email, password)];
    }
}