import { HeartHandshake } from "lucide-react"
import { getSession } from "next-auth/react"
import DialogAlert from "../../global/alert/AlertDialog";

export default async function FavoriteJob() {

    const session = await getSession();

    return (
        <div>
            {
                session ? (
                    <div
                        className="bg-rose-600 text-white py-2 px-3 rounded-md cursor-pointer hover:bg-zinc-800 transition-colors"
                    >
                        <HeartHandshake />
                    </div>
                ) : (
                    <DialogAlert />

                )
            }
        </div>
    )
}
