"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const isAuthenticate = false

export default function About() {
    const router = useRouter()
    useEffect(() => {
        if(isAuthenticate) {
            console.log("Welcome to about page");
        }
        else {
            router.push('/')
        }
    }, [])
    return (
        <>
           <h1>This is About page</h1>
        </>
    )
}