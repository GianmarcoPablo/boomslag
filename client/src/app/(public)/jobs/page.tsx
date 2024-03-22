import { FilterJobs, ContainerJobs } from "@/components/my"
export default function JobsPage() {
    return (
        <main>
            <h1 className="text-rose-600 my-5 text-2xl font-bold uppercase">
                Encuentra el trabajo que buscas en BoomSlag
            </h1>
            <div className="grid grid-cols-5 gap-8">
                <aside className="col-span-1">
                    <FilterJobs />
                </aside>
                <div className="col-span-4">
                    <ContainerJobs />
                </div>
            </div>
        </main>
    )
}
