"use server"
import { AuthForm } from "@/components/my"
import { redirect } from "next/navigation";
import { getSession } from "@/helpers/getSession";
export default async function Loginpage() {

    const session = await getSession()

    if (session) {
        redirect("/")
    }

    return (
        <div className="flex justify-center ">
            <div className="mx-auto w-1/4 ">
                <AuthForm />
            </div>
        </div>
    )
}
