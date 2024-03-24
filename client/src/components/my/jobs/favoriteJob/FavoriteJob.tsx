import { HeartHandshake } from "lucide-react"
import { getSession } from "next-auth/react"
import DialogAlert from "../../global/alert/AlertDialog";

export default async function FavoriteJob() {

    const session = await getSession();

    return (
        <div>
            {
                session ? (
                    <div >
                        <HeartHandshake />
                    </div>
                ) : (
                    <DialogAlert />
                )
            }
        </div>
    )
}
