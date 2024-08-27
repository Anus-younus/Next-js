"use client"

import { AuthContextData } from "@/context/authcontext"
import { useRouter } from "next/navigation"

export default function HomePage() {
    const { user }: any = AuthContextData()
    const router = useRouter()
    if (!user) {
        router.push('/')
    }
    return (
        <>
            <h1>Welcome {user?.name}</h1>
            <h1>Your email is {user?.email}</h1>
            <h1>Your Roll number is {user?.rollNumber}</h1>
        </>
    )
}