import { NextFunction, Request, Response } from "express";
import { prisma } from "../../../database/postgresql-prisma";
import { JwtAdapter } from "../../../config/adapters/jwt.adapter";


export class ExitsUserMiddleware {
    static async validateJWT(req: Request, res: Response, next: NextFunction) {
        const authorization = req.header('Authorization');
        if (!authorization) return res.status(401).json({ message: 'Unauthorized' });
        if (!authorization.startsWith('Bearer')) return res.status(401).json({ message: 'Unauthorized' });

        const token = authorization.split(' ')[1]; // Bearer token
        try {
            const payload = await JwtAdapter.validateToken(token);
            if (!payload) return res.status(401).json({ message: 'Unauthorized' });
            const { id } = payload as { id: string };
            const user = await prisma.user.findFirst({ where: { id } });
            if (!user) return res.status(401).json({ message: 'Unauthorized' });
            req.body.user = user;
            next();
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Internal server errro" })
        }
    }
}