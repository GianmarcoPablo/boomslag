import Link from "next/link";
import FavoriteJob from "../favoriteJob/FavoriteJob";
import { Building2, MapPin } from "lucide-react";
import { Job } from "@/interfaces/job.interface";
import { formatDate } from "@/helpers/formatDate";


interface Props {
    job: Job,
}

export default function CardJob({ job }: Props) {


    return (

        <div className=" elemento p-4  shadow-xl border-l-4 border-rose-600 mb-5">
            <div className="flex justify-between items-center px-2">
                <h1 className="text-rose-600 mt-2">
                    <Link
                        className="underline text-2xl font-bold uppercase hover:text-rose-500 cursor-pointer"
                        href={`/job/${job.id}`}
                    >
                        {job.jobTitle}
                    </Link>
                </h1>

                <FavoriteJob />
            </div>
            <p className="px-2  font-semibold mb-2 text-lg">Empresa: <Link className="underline" href="">{job.company.nameCompany}</Link> </p>
            <p className="px-2">{formatDate(job.createdAt)}</p>
            <p className="px-2">{job.jobDescription}</p>
            <div className="mt-2 flex gap-3 items-center">
                <div className="flex items-center ">
                    <Building2 className="mx-2" size={24} />
                    <p className="px-2">Modalidad: {job.jobModality}</p>
                </div>
                <div className="flex items-center">
                    <MapPin className="mx-2" size={24} />
                    <p className="px-2">Ubicación: {job.jobLocation}</p>
                </div>
            </div>
        </div>
    )
}
