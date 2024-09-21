"use client"

import auth from "@/firebase/firebase.auth"
import { onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/navigation"
import { createContext, useEffect, useState } from "react"

type UserType = {
    name: string,
    rollNumber: string,
    email: string
}

type AuthContextType = {
    handleSendUser: (user: UserType) => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export default function AuthContextProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserType | null>(null)
    const router = useRouter()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                if(user.emailVerified) {
                    router.push('/home')
                } else {
                    router.push('/verify')
                }
            } else {
                router.push('/')
            }
        })
    }, [])

    const handleSendUser = (user: UserType) => {
        setUser(user)
    }

    return (
        <AuthContext.Provider value={{ handleSendUser }}>
            {children}
        </AuthContext.Provider>
    )
}