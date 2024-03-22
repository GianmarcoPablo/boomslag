import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getSession } from "@/helpers/getSession"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default async function Sidebar() {

    const session = await getSession()
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        Bienvenido a BoomSlag
                    </SheetTitle>
                    <SheetDescription>
                        Encuentra una variedad de oportunidades laborales adaptadas a tus habilidades e intereses.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    {
                        session && (
                            <>
                                <Link href="/dashboard">
                                    Dashboard
                                </Link>
                                <Link href="/dashboard/profile">
                                    Profile
                                </Link>
                            </>
                        )
                    }
                    <Link href="/jobs">
                        Trabajos
                    </Link>
                    <Link href="/companies">
                        Empresas
                    </Link>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent >
        </Sheet >
    )
}
