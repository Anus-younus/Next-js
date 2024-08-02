"use client"

import { createContext } from 'react'

type UserType = {
    setUser: (status: null | object) => void
}

interface User {
    [x:string]:any
}

export const UserContext = createContext({} as User)