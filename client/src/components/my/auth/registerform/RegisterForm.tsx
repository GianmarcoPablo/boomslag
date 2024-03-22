"use client"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const formSchema = z.object({
    name: z.string().min(3, {
        message: "Username must be at least 3 characters long.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters long.",
    }),
})

export default function RegisterForm() {

    const [message, setMessage] = useState<string>("")

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        }
    })

    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const data = await fetch("http://localhost:4000/api/v1/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            })
            const response = await data.json()
            console.log(response)
        } catch (error) {
            console.log(error)
            setMessage("Error al crear la cuenta")
        }   
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 shadow-xl p-5 mt-52">

                <h3 className="text-3xl font-bold text-center">
                    Crea una cuenta
                </h3>

                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => {
                        return <FormItem>
                            <FormLabel>Tu Usuario</FormLabel>
                            <FormControl>
                                <Input placeholder="Jhon Smith" type="text" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    }}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => {
                        return <FormItem>
                            <FormLabel>Tú Email</FormLabel>
                            <FormControl>
                                <Input placeholder="correo@correo.com" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    }}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => {
                        return <FormItem>
                            <FormLabel>Tu Contraseña</FormLabel>
                            <FormControl>
                                <Input placeholder="*********" type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    }}
                />


                <Link className="flex underline" href="/auth/login">
                    Ya tienes cuenta? Ingresa
                </Link>

                <Button variant={"secondary"} className="w-full " type="submit">
                    Crea tu cuenta en Boomslag
                </Button>
            </form>
        </Form>
    )
}
