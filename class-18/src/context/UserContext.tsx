"use client"

import { createContext, useContext, useState } from 'react'
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { onAuthStateChanged } from 'firebase/auth'
import auth from "@/firebase/firebaseAuth"

type UserContextType = {
    user: null
}

const UserContext = createContext<UserContextType | null>(null)

export default function UserContextProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if(user) {
            router.push('/home')
        } else{
          router.push('/login')
        }
    })
  })
    const [user, setUser] = useState(null)
    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)