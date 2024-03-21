import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth, { NextAuthOptions } from "next-auth"

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
                    const res = await fetch("http://localhost:4000/api/v1/users/login", {
                        method: 'POST',
                        body: JSON.stringify(credentials),
                        headers: { 'Content-Type': 'application/json' }
                    })

                    const user = await res.json()
                    if (user) {
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
            const dbUser = await fetch("http://localhost:4000/api/v1/users/finduser", {
                method: 'POST',
                body: JSON.stringify(token),
                headers: { 'Content-Type': 'application/json' }
            })

            const userDb = await dbUser.json()
            token.roles = userDb?.role ?? ["no-roles"];
            token.id = userDb?.id ?? "no-id"
            console.log("token", token)
            return token
        },
        async session({ session, token }) {
            console.log({ session, token })
            if (session.user) {
                session.user.id = token.id;
                session.user.roles = token.roles;
            }
            return session;
        }
    }
}


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }