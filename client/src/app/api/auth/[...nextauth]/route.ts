import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth, { NextAuthOptions } from "next-auth"
import { setCookie } from 'cookies-next';
import { cookies } from 'next/headers';

export const authOptions: NextAuthOptions = {
    secret: process.env.SECRET,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "usuario@gmail.com" },
                password: { label: "Password", type: "password", placeholder: "********" },
            },
            async authorize(credentials, req) {
                try {
                    const res = await fetch("http://localhost:4001/api/v1/users/login", {
                        method: 'POST',
                        body: JSON.stringify(credentials),
                        headers: { 'Content-Type': 'application/json' }
                    })
                    const user = await res.json()
                    if (user) {
                        const data = setCookie("tokenUserBoomslag", user.token, { cookies })
                        console.log(data)
                        return user
                    }

                } catch (error) {
                    console.error("Error in signInEmailPassword", error)
                    return null
                }
            }
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            return true
        },

        async jwt({ token, user, account, profile }) {
            const dbUser = await fetch("http://localhost:4001/api/v1/users/finduser", {
                method: 'POST',
                body: JSON.stringify(token),
                headers: { 'Content-Type': 'application/json' }
            })
            const userDb = await dbUser.json()
            token.roles = userDb?.role ?? ["no-roles"];
            token.id = userDb?.id ?? "no-id"
            token.isPremium = userDb?.isPremium ?? false
            token.isActive = userDb?.isActive ?? false
            return token
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id;
                session.user.roles = token.roles;
                session.user.isPremium = token.isPremium;
                session.user.isActive = token.isActive;
            }
            return session;
        }
    }
}


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }