"use client"


import { handleSignUp } from "@/firebase/firebaseAuth"
import Link from "next/link"
import { useState } from "react"

export default function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <>
            <div className="container">
                <div className="row">
                    <label htmlFor="name">Enter your name: </label>
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} /><br />
                    <label htmlFor="email">Enter your email: </label>
                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} /><br />
                    <label htmlFor="password">Enter your password: </label>
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} /><br />
                    <p>If you dont have an account<Link href={'/login'}>login</Link></p>
                    <button onClick={() => { handleSignUp(name, email, password) }}>Create account</button>
                </div>
            </div>
        </>
    )
}