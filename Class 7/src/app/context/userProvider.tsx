"use client"
import { useState } from "react";
import { UserContext } from "./usersContext";

export default function UserProvider({ children }: Readonly<{ children: React.ReactNode; }>) {
    const [user, setUser] = useState<null | object>(null)
    const [isAuthenticate, setIsAuthenticate] = useState(false)
    return (
        <>
            <UserContext.Provider value={{user, setUser, isAuthenticate, setIsAuthenticate}}>
                {children}
            </UserContext.Provider>
        </>
    )
}