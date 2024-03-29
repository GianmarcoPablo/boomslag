"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { UserFetchResponse } from "@/interfaces/user.interface"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { signIn, useSession } from "next-auth/react"


const formSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters long.",
    }),
})



export default function ProfileForm() {

    const [message, setMessage] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
        setLoading(true)
        try {
            const response = await signIn("credentials", {
                email: values.email,
                password: values.password
            })
            console.log(response)
        } catch (error) {
            console.log(error)
            setMessage("Error al crear la cuenta")
        } finally {
            setLoading(false)
        }
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 shadow-xl p-5 mt-44">

                <h3 className="text-3xl font-bold text-center">
                    Ingrese su cuenta
                </h3>

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

                <Link className="flex underline" href="/auth/new-account">
                    No tienes cuenta? Registrate
                </Link>

                <Button
                    variant={"secondary"}
                    className={`${loading ? "bg-transparent" : ""} w-full`}
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Cargando..." : "Ingresa a Boomslag"}
                </Button>
            </form>
        </Form>
    )
}
