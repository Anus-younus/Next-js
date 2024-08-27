"use client"

import { createContext, useContext, useState } from "react"

const AuthContext = createContext({})

type UserType = {
    name: string,
    email: string,
    rollNumber: number
}

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<null | UserType>(null)

    const onAuthStateChange = (newUser: UserType) => {
        setUser(newUser)
    }
    return (
        <AuthContext.Provider value={{ user, onAuthStateChange }}>
            {children}
        </AuthContext.Provider>
    )
}

export const AuthContextData = () => useContext(AuthContext)