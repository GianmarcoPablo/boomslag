import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { ModeToggle } from "@/components/ui/ModeToggle"

export default function NavbarDashboard() {
    return (
        <Card>
            <div className="flex justify-end gap-3 py-3 items-center px-5">

                <ModeToggle />

                <Button variant={"destructive"} className="flex items-center gap-2">
                    Cerrar Sesión
                    <LogOut size={24} />
                </Button>
            </div>
        </Card>
    )
}
