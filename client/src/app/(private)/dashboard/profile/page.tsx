import { getSession } from "@/helpers/getSession"
import Image from "next/image"

export default async function ProfilePage() {
    const session = await getSession()
    console.log(session)
    return (
        <div>
            <div className="flex gap-8">
                <div className="w-64">
                    <Image
                        src={session?.image || "/profile.jpg"}
                        alt="profile image"
                        width={100}
                        height={100}
                        className="w-40 h-40 object-cover flex rounded-md"
                    />
                    <div className="mt-5">
                        <p className="text-2xl font-semibold">Actitudes</p>
                        <ul
                            className="text-lg list-disc list-inside"
                        >
                            <li className="text-lg">Trabajo en equipo</li>
                            <li className="text-lg">Comunicación</li>
                            <li className="text-lg">Proactividad</li>
                            <li className="text-lg">Adaptabilidad</li>
                        </ul>
                    </div>

                    <div className="mt-5">
                        <p className="text-2xl font-semibold">Habilidades</p>
                        <ul
                            className="text-lg list-disc list-inside"
                        >
                            <li className="text-lg">JavaScript</li>
                            <li className="text-lg">React</li>
                            <li className="text-lg">NodeJS</li>
                            <li className="text-lg">MongoDB</li>
                        </ul>
                    </div>

                    <div className="mt-5">
                        <p className="text-2xl font-semibold">Idiomas</p>
                        <ul
                            className="text-lg list-disc list-inside"
                        >
                            <li className="text-lg">Español</li>
                            <li className="text-lg">Ingles</li>
                        </ul>
                    </div>

                    <div className="mt-5">
                        <p className="text-2xl font-semibold">Educación</p>
                        <ul
                            className="text-lg list-disc list-inside"
                        >
                            <li className="text-lg">Ingenieria de sistemas</li>
                            <li className="text-lg">Universidad Nacional Mayor de San Marcos</li>
                        </ul>
                    </div>

                </div>
                <div className="flex-1">
                    
                    <p className="text-xl font-semibold">{session?.name} </p>
                    <p className="text-lg ">Programador Full Stack</p>
                    <p className="text-lg ">{session?.email}</p>
                    <p className="text-lg ">Lima Peru</p>
                    <div className="mt-5">
                        <p className="text-2xl font-semibold ">Sobre mi</p>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione aliquid enim tenetur dicta illum omnis facere, vitae veniam minus assumenda quisquam odit ab, facilis doloribus a dolore aliquam odio delectus possimus! Ex quae voluptatem libero sint ducimus veniam laudantium quos.
                        </p>
                    </div>


                    <div>
                        <p className="text-2xl font-semibold my-5">Experiencia</p>
                        <div className="border-gray-400 border-b-2 my-5" />
                        <div>
                            <p className="text-lg font-semibold">Programador Full Stack</p>
                            <p className="text-lg">Empresa de desarrollo de software</p>
                            <p className="text-lg">2020 - 2021</p>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione aliquid enim tenetur dicta illum omnis facere, vitae veniam minus assumenda quisquam odit ab, facilis doloribus a dolore aliquam odio delectus possimus! Ex quae voluptatem libero sint ducimus veniam laudantium quos.
                            </p>
                        </div>
                        <div className="border-gray-400 border-b-2 my-5" />
                        <div>
                            <p className="text-lg font-semibold">Programador Full Stack</p>
                            <p className="text-lg">Empresa de desarrollo de software</p>
                            <p className="text-lg">2020 - 2021</p>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione aliquid enim tenetur dicta illum omnis facere, vitae veniam minus assumenda quisquam odit ab, facilis doloribus a dolore aliquam odio delectus possimus! Ex quae voluptatem libero sint ducimus veniam laudantium quos.
                            </p>
                        </div>
                        <div className="border-gray-400 border-b-2 my-5" />
                        <div>
                            <p className="text-lg font-semibold">Programador Full Stack</p>
                            <p className="text-lg">Empresa de desarrollo de software</p>
                            <p className="text-lg">2020 - 2021</p>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione aliquid enim tenetur dicta illum omnis facere, vitae veniam minus assumenda quisquam odit ab, facilis doloribus a dolore aliquam odio delectus possimus! Ex quae voluptatem libero sint ducimus veniam laudantium quos.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
