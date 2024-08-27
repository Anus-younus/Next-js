"use client"

import { AuthContextData } from "@/context/authcontext"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const { user, onAuthStateChange }: any = AuthContextData()

    const AuthApiCall = (email: string, password: string) => {
        return {
            email,
            name: email.split('@')[0],
            rollNumber: Math.floor(Math.random() * 99999)
        }
    }

    const login = (e: any) => {
        e.preventDefault()
        let user = AuthApiCall(email, password)
        onAuthStateChange(user)
        router.push('/home')
    }
    return (
        <>
            <form onSubmit={login}>
                <input
                    type="text"
                    placeholder="Enter your email adreess"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <br />  <br />  <br />
                <input
                    type="text"
                    placeholder="Enter your email password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <br />  <br />  <br />
                <button>Login</button>
            </form>
        </>
    )
}