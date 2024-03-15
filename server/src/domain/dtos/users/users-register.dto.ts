
enum Role {
    ADMIN = 'admin',
    USER = 'user'
}

export class UserRegisterDto {
    private constructor(
        public readonly name: string,
        public readonly email: string,
        public readonly password: string,
        public readonly role: Role,
        public readonly isActive: boolean,
        public readonly image?: string
    ) { }

    static create(props: { [key: string]: any }): [string?, UserRegisterDto?] {

        const { name, email, password, role, image, isActive } = props;

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!name) return ['name is required', undefined];
        if (!email) return ['email is required', undefined];
        if (!emailRegex.test(email)) return ['email is invalid', undefined];
        if (!password) return ['password is required', undefined];
        if (password.length < 6) return ['password must be at least 6 characters', undefined];
        if (!role) return ['role is required', undefined];

        return [undefined, new UserRegisterDto(name, email, password, role, image, isActive)];
    }
}