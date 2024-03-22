import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { HeartHandshake } from "lucide-react"
import Link from "next/link"

export default function DialogAlert() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    className="bg-rose-600 text-white"
                    variant="outline"
                >
                    <HeartHandshake />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Para agregar a favoritos, inicia sesión
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        ¿No tienes cuenta? Regístrate
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>
                        <Link
                            href="/auth/login"
                        >
                            Iniciar sesión
                        </Link>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
