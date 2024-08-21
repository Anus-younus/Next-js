"use client"

import UserCreadentials from "@/components/user-credentials"
import { dbUserType } from "@/Types/db-user-type"
import { useEffect, useState } from "react"
import '../../globals.css'

const dbUsers = [
    {
        name: "anus",
        rollNumber: 20231,
        subject: "JavaScript"
    },
    {
        name: "owais",
        rollNumber: 112233,
        subject: "PHP"
    },
    {
        name: "hassan",
        rollNumber: 12332,
        subject: "Java"
    },
    {
        name: "manan",
        rollNumber: 202002,
        subject: "Pythone"
    },
]

type UserNameType = {
    params: { username: string }
}

export default function UserName({ params: { username } }: UserNameType) {
    const [user, setUser] = useState<null | dbUserType>(null)
    const [isLogin, setIsLogin] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        fetchUser()
        console.log(username);
        setTimeout(() => {
            setError("User Not Found")
        })
    }, [])

    const fetchUser = () => {
        const [userFound] = dbUsers.filter(({ name }) => name === username)
        console.log(userFound);
        setUser(userFound)
        setIsLogin(true)
    }
    return (
        <>
            {
                isLogin && user ?
                    <UserCreadentials
                        name={user.name}
                        rollNumber={user.rollNumber}
                        subject={user.subject}
                    /> :
                    <h1>Loding...</h1>
            }
            {!user && isLogin && <h1>{error}</h1>}
        </>
    )
}