import React from 'react'
import { TriangleAlert, Heart, Share2, Box, Timer, UserRound, Medal, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import TextareaMessage from '@/components/my/global/texttarea/TextTareaMessage'

interface Props {
    params: {
        slug: string
    }
}



export default function JobPage({ params }: Props) {
    return (
        <main className='mt-5'>
            <div className='elemento p-6 shadow-xl rounded-xl'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-rose-600 text-3xl font-black'>Desarrollador Backend Spring Boot</h1>
                        <p className='text-xl underline hover:text-rose-600 cursor-pointer'>Microsoft</p>
                    </div>
                    <div className='flex gap-5'>
                        <TriangleAlert className='cursor-pointer hover:text-rose-600' size={24} />
                        <Share2 className='cursor-pointer hover:text-rose-600' size={24} />
                        <Heart className='cursor-pointer hover:text-rose-600' size={24} />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 mt-9 gap-8'>
                <div className='elemento rounded-xl p-6 shadow-xl col-span-3 '>
                    <div className='flex items-center justify-between'>
                        <p className='text-rose-600 text-2xl font-bold mb-4'>Descripción</p>
                        <div className='flex gap-4'>
                            <p className='text-lg font-boold'>Publicado hoy</p>
                            <p className='text-lg font-boold'>Lima, Peru</p>
                        </div>
                    </div>
                    <div>
                        <p>
                            Se busca programador backend con experiencia en Spring Boot para trabajar en Microsoft en el desarrollo de aplicaciones web. del lado servidor. tambien se requiere experiencia en el manejo de bases de datos relacionales y no relacionales. Se busca programador backend con experiencia en Spring Boot para trabajar en Microsoft en el desarrollo de aplicaciones web. del lado servidor. tambien se requiere experiencia en el manejo de bases de datos relacionales y no relacionales. Se busca programador backend con experiencia en Spring Boot para trabajar en Microsoft en el desarrollo de aplicaciones web. del lado servidor. tambien se requiere experiencia en el manejo de bases de datos relacionales y no relacionales.
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
                                    <p>Precencial</p>
                                </div>
                                <div className='flex gap-2 mb-5'>
                                    <Box size={24} />
                                    <p>Programador</p>
                                </div>
                                <div className='flex gap-2 mb-5'>
                                    <Timer size={24} />
                                    <p>Full-time</p>
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
                <div className='elemento rounded-xl shadow-xl col-span-1 p-6'>
                    <p className='text-xl font-bold mb-5'>
                        Enviar un mensaje a la empresa
                    </p>
                    <TextareaMessage />
                    <Button className='w-full font-bold text-xl mt-5'>
                        Postular
                    </Button>
                    <p className='text-xs'>
                        Cuando postulas a un trabajo, la empresa recibe tu información personal y tu currículum. Puedes actualizar tu configuración de privacidad desde tu cuenta en cualquier momento.
                    </p>
                </div>
            </div>
        </main>
    )
}
