import { getSession } from "@/helpers/getSession"
export default async function ProfilePage() {
    const session = await getSession()
    return (
        <div>
            {JSON.stringify(session)}
        </div>
    )
}
