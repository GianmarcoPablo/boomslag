import Link from "next/link";
import FavoriteJob from "../favoriteJob/FavoriteJob";
import { Building2, MapPin } from "lucide-react";
export default function CardJob() {
    return (

        <div className=" elemento p-4  shadow-xl border-l-4 border-rose-600 mb-5">
            <div className="flex justify-between items-center px-2">
                <h1 className="text-rose-600 text-2xl font-bold my-3">
                    <Link className="underline decoration-slice" href="/job/1">
                        Programador Backend Spring Boot
                    </Link>
                </h1>
                <p className="flex gap-2">
                    <span >
                        <Building2 />
                    </span>
                    presencial
                </p>
                <p className="flex gap-2">
                    <span>
                        <MapPin />
                    </span>
                    Madrid
                </p>
                <FavoriteJob />

            </div>
            <div className="flex gap-5 my-1 px-2">
                <Link href="" className="underline hover:text-rose-600 inline-block">
                    Microsoft
                </Link>
                <span> - </span>
                <p>Publicado hoy</p>
            </div>
            <p className="px-2">
                Se busca programador backend con experiencia en Spring Boot para trabajar en Microsoft en el desarrollo de aplicaciones web. del lado servidor. tambien se requiere experiencia en el manejo de bases de datos relacionales y no relacionales.
            </p>

        </div>
    )
}
