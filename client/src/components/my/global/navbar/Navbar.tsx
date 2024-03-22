import Link from "next/link"
import { titleFont } from "@/config/fonts"
import { ModeToggle } from "@/components/ui/ModeToggle"
import { Sidebar } from "../.."
import LogOut from "../../auth/logout/LogOut"
import { getSession } from "@/helpers/getSession"

export default async function Navbar() {

    const session = await getSession()

    return (
        <div >
            <nav className=" max-w-[1480px] mx-auto ">
                <div className="flex justify-between  py-5">
                    <div className=" flex items-center">
                        <Link className={`${titleFont} font-bold text-xl`} href="/">
                            BoomSlag | .tsx
                        </Link>
                    </div>

                    <div
                        className="flex gap-5 items-center justify-between "
                    >
                        <div>
                            <ModeToggle />
                        </div>
                        <div>
                            <Sidebar />
                        </div>
                        <div >
                            {
                                session ?
                                    <LogOut /> :
                                    <Link className="hover:text-rose-500 " href="/auth/login">
                                        Login
                                    </Link>
                            }
                        </div>
                    </div>
                </div>

            </nav >

            <div className="border-stone-900 border-b flex-1 "></div>

        </div>
    )
}
