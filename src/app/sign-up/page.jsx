'use client'
import React, {useEffect} from 'react'
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
const page = () => {
    useEffect(() => {
        AOS.init({
             duration: 800,
             once: false,
           })
     }, [])
    const { toast } = useToast();
    return (
        <div className="h-[100vh]" data-aos="fade-up">
            <div className="flex  items-center justify-center h-[100%]">
                <div className="w-[25%]">
                    <h1 className="text-5xl font-bold text-center mb-5">assessify.</h1>
                    <p className='text-center mb-4 text-sm'>Create an Assessify account today and unlock a world of talent assessment possibilities!</p>
                    <div className="flex flex-col gap-4">
                        <Input type="text" placeholder="Username" />
                        <Input type="email" placeholder="Email" />
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
                            <Input type="text" placeholder="Enter phone number with country code" />
                        </div>


                        <Input type="password" placeholder="Password" />
                        <Input type="password" placeholder="Confirm Password" />

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
                        <Link href="/sign-in" className="text-center font-semibold">Already have an account?</Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
