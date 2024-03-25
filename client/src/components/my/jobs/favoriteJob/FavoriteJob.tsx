"use client"
import { HeartHandshake } from "lucide-react"
import { getSession } from "next-auth/react"
import DialogAlert from "../../global/alert/AlertDialog";
import { addFavoriteJob } from '@/actions/add-favorite-job'

interface Props {
    jobId: string,
    cookieToken: string
}

export default async function FavoriteJob({ jobId, cookieToken }: Props) {

    const session = await getSession();
    const userId = session?.user?.id
    return (
        <div>
            {
                session ? (
                    <div
                        className='cursor-pointer'
                        onClick={() => addFavoriteJob(jobId, userId, cookieToken)}
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
