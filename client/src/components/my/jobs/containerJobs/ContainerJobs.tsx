import { Suspense } from "react"
import { CardJob } from "../.."
import { getAllJobs } from "@/actions/get-all-jobs"

export default async function ContainerJobs() {

    const data = await getAllJobs()
    return (
        <Suspense
            fallback={<h1>Cargando...</h1>}
        >
            {
                data.jobs.map((job: any) => (
                    <CardJob
                        key={job.id}
                        job={job}
                    />
                ))
            }
        </Suspense>
    )
}
