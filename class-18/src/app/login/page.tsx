"use client"


import { handleSignIn } from "@/firebase/firebaseAuth"
import Link from "next/link"
import { useState } from "react"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <>
            <div className="container">
                <div className="row">
                    <label htmlFor="email">Enter your name: </label>
                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} /><br />
                    <label htmlFor="password">Enter your password: </label>
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} /><br />
                    <p>If you dont have an account<Link href={'/signup'}>signup</Link></p>
                    <button onClick={() => { handleSignIn(email, password) }}>Login</button>
                </div>
            </div>
        </>
    )
}