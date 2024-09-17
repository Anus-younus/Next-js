"use client"
import auth from '@/firebase/firebaseAuth'
import { AuthContextType } from '@/Types/AuthContextType'
import { onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { createContext, useContext, useState } from 'react'


const AuthContext = createContext<AuthContextType | null>(null)

export default function AuthContextProvider({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const router = useRouter()

    onAuthStateChanged(auth, (user) => {
        if(!user) {
            router.push('/')
        } else {
            if(user.emailVerified) {
                router.push('/home')
            } else {
                router.push('/verify')
            }
        }
    })
    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)