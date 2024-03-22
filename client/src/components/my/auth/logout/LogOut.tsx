"use client"
import { useSession, signOut, } from "next-auth/react";
export default function LogOut() {

    const { data: session, status } = useSession()

    if (status === "loading") {
        return (
            <button className="hover:text-rose-500">
                Espera...
            </button>
        )
    }

    return (
        <button
            onClick={() => signOut()}
            className="hover:text-rose-500"
        >
            Logout
        </button>
    )
}
