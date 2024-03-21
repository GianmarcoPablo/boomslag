"use server"
import { AuthForm } from "@/components/my"
import { cookies } from "next/headers"
import { redirect } from "next/navigation";


export default async function Loginpage() {

    const cookieStore = cookies()
    const coockieUser = cookieStore.get("user-info")?.value
    const user = JSON.parse(coockieUser!)

    if (user.id) redirect("/")

    return (
        <div className="flex justify-center ">
            <div className="mx-auto w-1/4 ">
                <AuthForm />
            </div>
        </div>
    )
}
