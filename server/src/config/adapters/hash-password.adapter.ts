import { hashSync, genSaltSync, compareSync } from "bcryptjs";


export class HashPasswordAdapter {
    static hashPassword(password: string) {
        const salt = genSaltSync(10);
        return hashSync(password, salt);
    }

    static comparePassword(password: string, hashedPassword: string) {
        return compareSync(password, hashedPassword);
    }
}