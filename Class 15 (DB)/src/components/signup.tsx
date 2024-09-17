"use client"

import { useAuthContext } from "@/context/authContext"
import { handleSignUp } from "@/firebase/firebaseAuth"
import { useState } from "react"

export default function SignUp() {
    const { isAuthenticated, setIsAuthenticated } = useAuthContext()!
    const [name, setName] = useState('')
    const [rollNumber, setRollNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <>
            <div className="container">
                <div className="row">
                    <label htmlFor="name">Enter your name: </label>
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} /><br />
                    <label htmlFor="name">Enter your roll number: </label>
                    <input type="text" value={rollNumber} onChange={(e) => { setRollNumber(e.target.value) }} /><br />
                    <label htmlFor="email">Enter your email: </label>
                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} /><br />
                    <label htmlFor="password">Enter your password: </label>
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} /><br />
                    <p>If you dont have an account <a style={{color: "blue", cursor: "pointer"}} onClick={ ()=> {
                        setIsAuthenticated(!isAuthenticated)
                    }
                    }>login</a></p>
                    <button onClick={() => { handleSignUp(name, rollNumber, email, password) }}>Create account</button>
                </div>
            </div>
        </>
    )
}