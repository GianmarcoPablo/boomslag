import Link from "next/link"
import { Button } from "@/components/ui/button"
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

export default function Sidebar() {
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
                    <Link className="hover:underline text-lg" href="/dashboard">
                        Dashboard
                    </Link>
                    <Link className="hover:underline text-lg" href="/jobs">
                        Jobs
                    </Link>
                    <Link className="hover:underline text-lg" href="/companies">
                        Companies
                    </Link>
                    <Link className="hover:underline text-lg" href="/profile">
                        Profile
                    </Link>
                    <Link className="hover:underline text-lg" href="/settings">
                        Settings
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
            </SheetContent>
        </Sheet>
    )
}
