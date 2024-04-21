'use client'
import React, { useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Link from 'next/link'
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/components/ui/use-toast"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
const page = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])
    const { toast } = useToast();
    const formSchema = z.object({
        username: z.string().min(6, { message: 'Username must be at least 6 characters' }),
        email: z.string().email(),
        password: z.string().min(5),
        confirmPassword: z.string().min(5),
        phoneNumber: z.string().min(6),
    })
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            workEmail: "",
            password: "",
            confirmPassword: "",
            phoneNumber: ""
        }
    });
    function onSubmit() {
        console.log('ONSUBMIT FUNCTION CALLED');
    }
    return (
        <div className="h-[100vh]" data-aos="fade-up">
            <div className="flex  items-center justify-center h-[100%]">
                <div className="w-[25%]">
                    <h1 className="text-5xl font-bold text-center mb-5">assessify.</h1>
                    <p className='text-center mb-4 text-sm'>Login to Assessify account today and use a world of talent assessment possibilities!</p>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Username" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Password" type="password" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                          
                            <div className="flex justify-end mt-5">
                            <Link href="/sign-in" className="text-center font-semibold ">Forgot Password?</Link>

                        </div>
                            <Button className="mt-5 text-1xl w-[100%] mx-auto" type="submit" onClick={() => {
                                toast({
                                    description: "Wait you are being signed up",
                                })
                            }}>Login</Button>
                        </form>
                        
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default page
