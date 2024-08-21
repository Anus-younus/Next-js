"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

const isAuthenticate = false

export default function Page() {
    const router = useRouter()
    useEffect(() => {
        if(!isAuthenticate) {
            router.push('/login')
        }
    }, [])
    return (
        <>
           <h1>Hello world</h1>
        </>
    )
}