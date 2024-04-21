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
        email: z.string().min(10),
        password: z.string().min(5),
        confirmPassword: z.string().min(5),
        phoneNumber: z.string().min(6),
    })
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
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
                    <p className='text-center mb-4 text-sm'>Create an Assessify account today and unlock a world of talent assessment possibilities!</p>
                   
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
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Email" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex justify-between">
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Male</SelectItem>
                                    <SelectItem value="dark">Female</SelectItem>
                                    <SelectItem value="system">Other</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Pakistan</SelectItem>
                                    <SelectItem value="dark">United Kingdom</SelectItem>
                                    <SelectItem value="system">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
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
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Confirm Password" type="password" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex gap-3">
                                <Select>
                                    <SelectTrigger className="w-[100px]">
                                        <SelectValue placeholder="+92" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">+91</SelectItem>
                                        <SelectItem value="dark">+92</SelectItem>
                                        <SelectItem value="system">+93</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem className="w-[100%]">
                                        <FormControl>
                                            <Input placeholder="Phone number without country code" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <Label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Accept terms and conditions
                                </Label>
                            </div>
                            <Button className="mt-5 text-1xl w-[75%] mx-auto" type="submit" onClick={() => {
                                toast({
                                    description: "Wait you are being signed up",
                                })
                            }}>Sign Up</Button>
                        </form>
                        <Link href="/sign-in" className="text-center font-semibold">Already have an account?</Link>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default page
