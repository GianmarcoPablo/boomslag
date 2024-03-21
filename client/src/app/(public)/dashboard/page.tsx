import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
export default async function DashBoardPage() {

    const session = await getServerSession(authOptions)
    return (
        <div>
            {JSON.stringify(session)}
        </div>
    )
}
