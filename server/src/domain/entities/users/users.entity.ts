export class UserEntity {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly email: string,
        public readonly password: string,
        public readonly role: string,
        public readonly isActive: boolean,
        public readonly token?: string,
        public readonly image?: string,
        public readonly createdAt?: Date,
        public readonly updatedAt?: Date,
        public readonly isPremium?: boolean,
    ) { }

    public static fromObject(props: { [key: string]: any }): UserEntity {
        const { id, name, email, password, role, isActive, token, image, createdAt, updatedAt, isPremium } = props;

        if (!id) throw new Error('id is required');
        if (!name) throw new Error('name is required');
        if (!email) throw new Error('email is required');
        if (!role) throw new Error('role is required');
        if (isActive === undefined) throw new Error('isActive is required');
        if (typeof isActive !== 'boolean') throw new Error('isActive must be a boolean');
        if (createdAt && !(createdAt instanceof Date)) throw new Error('createdAt must be a Date');
        if (updatedAt && !(updatedAt instanceof Date)) throw new Error('updatedAt must be a Date');
        if (isPremium && typeof isPremium !== 'boolean') throw new Error('isPremium must be a boolean');


        return new UserEntity(id, name, email, password, role, isActive, token, image, createdAt, updatedAt, isPremium);
    }
}