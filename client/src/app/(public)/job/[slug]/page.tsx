import { TriangleAlert, Heart, Share2, Box, Timer, UserRound, Medal, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import TextareaMessage from '@/components/my/global/texttarea/TextTareaMessage'
import { getSession } from '@/helpers/getSession'
import { getOneJob } from '@/actions/get-one-job'
import { formatDate } from '@/helpers/formatDate'
import FavoriteJob from '@/components/my/jobs/favoriteJob/FavoriteJob'
import { cookies } from "next/headers"
import { getFavoriteJobs } from '@/actions/get-favorite-jobs'

interface Props {
    params: {
        slug: string
    }
}



export default async function JobPage({ params }: Props) {

    const { slug } = params
    const session = await getSession()
    const cookieStore = cookies()
    const cookieToken = cookieStore.get('tokenUserBoomslag')?.value ?? 'no-token'
    const job = await getOneJob(slug)

    const favoriteJobs = await getFavoriteJobs(session?.id, cookieToken)

    const isFavorite = favoriteJobs?.some((j: any) => j.jobId === job?.id)

    return (
        <main className='mt-5'>
            <div className='elemento p-6 shadow-xl rounded-lg'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-rose-600 text-3xl font-black uppercase'>
                            {job?.jobTitle}
                        </h1>
                        <p className='text-xl underline hover:text-rose-600 cursor-pointer'>Microsoft</p>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <TriangleAlert className='cursor-pointer' size={24} />
                        <Share2 className='cursor-pointer' size={24} />

                        {
                            isFavorite ? (
                                <div>
                                    <h1>Ya es favorito</h1>
                                </div>
                            ) : (
                                <FavoriteJob
                                    jobId={job?.id!}
                                    cookieToken={cookieToken}
                                />
                            )
                        }

                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 mt-9 gap-8'>
                <div className='elemento rounded-lg p-6 shadow-xl col-span-3 '>
                    <div className='flex items-center justify-between'>
                        <p className='text-rose-600 text-2xl font-bold mb-4'>Descripción</p>
                        <div className='flex gap-4'>
                            <p className='text-lg font-boold'>
                                {formatDate(job?.createdAt!)}
                            </p>
                            <p className='text-lg font-boold'>
                                {job?.jobLocation} Lima
                            </p>
                        </div>
                    </div>
                    <div>
                        <p>
                            {job?.jobDescription}
                        </p>



                        <div className='mt-5'>
                            <p className='text-rose-600 text-2xl font-bold'>Requisitos</p>
                            <ul>
                                <li>Experiencia en Spring Boot</li>
                                <li>Experiencia en bases de datos relacionales y no relacionales</li>
                                <li>Experiencia en el desarrollo de aplicaciones web</li>
                            </ul>
                        </div>
                        <div className='mt-5'>
                            <p className='text-rose-600 text-2xl font-bold'>Beneficios</p>
                            <ul>
                                <li>Seguro de salud</li>
                                <li>Seguro de vida</li>
                                <li>Horario flexible</li>
                            </ul>
                        </div>

                        <div
                            className='flex flex-1 border-b border-rose-600 mt-5 pt-5 gap-5'
                        />
                        <div className='flex mt-5 gap-8'>
                            <div>
                                <div className='flex gap-2 mb-5'>
                                    <Building2 size={24} />
                                    <p>{job?.jobModality} </p>
                                </div>
                                <div className='flex gap-2 mb-5'>
                                    <Box size={24} />
                                    <p>Programador</p>
                                </div>
                                <div className='flex gap-2 mb-5'>
                                    <Timer size={24} />
                                    <p>{job?.jobWorkLoad} </p>
                                </div>
                            </div>
                            <div>
                                <div className='flex gap-2 mb-5'>
                                    <UserRound size={24} />
                                    <p>5 Vacantes Disponibles</p>
                                </div>
                                <div className='flex gap-2 mb-5'>
                                    <Medal size={24} />
                                    <p>Senior</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='elemento rounded-lg shadow-xl col-span-1 p-6'>
                    <p className='text-xl font-bold mb-5'>
                        Enviar un mensaje a la empresa
                    </p>
                    <TextareaMessage />
                    <Button className='w-full font-bold text-xl mt-5'>
                        Postular
                    </Button>
                    <p className='text-xs mt-4'>
                        Cuando postulas a un trabajo, la empresa recibe tu información personal y tu currículum. Puedes actualizar tu configuración de privacidad desde tu cuenta en cualquier momento.
                    </p>
                </div>
            </div>
        </main>
    )
}
