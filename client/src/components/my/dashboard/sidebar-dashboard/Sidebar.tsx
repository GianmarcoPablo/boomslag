import Link from 'next/link'
import { Home, User, Building2, CircuitBoard, NotebookText, Heart, BookUser } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Sidebar() {
    return (
        <Card className='h-screen'>

            <aside className='p-6'>
                <div>
                    <h1 className='text-2xl mx-2 font-bold'>DashBoard</h1>
                    <p className='px-2'>Welcome back</p>
                    <div className='flex items-center gap-3'>
                        <Avatar className='my-3 mx-2'>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p className='text-center'>Shadcn</p>
                    </div>
                </div>
                <hr className='mb-4' />
                <div>
                    <div className='hover:bg-rose-600 hover:text-white  py-4 px-2 rounded-lg mb-1'>
                        <Link
                            href="/dashboard"
                            className='flex items-center space-x-2 text-lg font-semibold gap-3'
                        >
                            <Home size={24} />
                            Dashboard
                        </Link>
                    </div>
                    <div className='hover:bg-rose-600 hover:text-white  py-4 px-2 rounded-lg mb-1'>
                        <Link
                            href="/dashboard/profile"
                            className='flex items-center space-x-2 text-lg font-semibold gap-3'
                        >
                            <User size={24} />
                            Pefil
                        </Link>
                    </div>
                    <div className='hover:bg-rose-600 hover:text-white  py-4 px-2 rounded-lg mb-1'>
                        <Link
                            href="/dashboard/jobs"
                            className='flex items-center space-x-2 text-lg font-semibold gap-3'
                        >
                            <CircuitBoard size={24} />
                            Trabajos
                        </Link>
                    </div>
                    <div className='hover:bg-rose-600 hover:text-white  py-4 px-2 rounded-lg mb-1'>
                        <Link
                            href="/dashboard/companies"
                            className='flex items-center space-x-2 text-lg font-semibold gap-3'
                        >
                            <Building2 size={24} />
                            Compañias
                        </Link>
                    </div>
                    <div className='hover:bg-rose-600 hover:text-white  py-4 px-2 rounded-lg mb-1'>
                        <Link
                            href="/dashboard/postulation"
                            className='flex items-center space-x-2 text-lg font-semibold gap-3'
                        >
                            <BookUser size={24} />
                            Postulaciones
                        </Link>
                    </div>
                    <div className='hover:bg-rose-600 hover:text-white  py-4 px-2 rounded-lg mb-1'>
                        <Link
                            href="/dashboard/favorites"
                            className='flex items-center space-x-2 text-lg font-semibold gap-3'
                        >
                            <Heart size={24} />
                            Favoritos
                        </Link>
                    </div>
                    <div className='hover:bg-rose-600  hover:text-white py-4 px-2 rounded-lg mb-1'>
                        <Link
                            href="/dashboard/cv"
                            className='flex items-center space-x-2 text-lg font-semibold gap-3'
                        >
                            <NotebookText size={24} />
                            Curriculum
                        </Link>
                    </div>

                    <p className='mt-5 text-sm text-gray-500'>v2.0.0.3 | © 2022 Pantazi Soft</p>
                </div>
            </aside>
        </Card>
    )
}
