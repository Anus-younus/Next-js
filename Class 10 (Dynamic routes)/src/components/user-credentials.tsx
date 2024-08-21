"use client"

import { dbUserType } from "@/Types/db-user-type"

export default function UserCreadentials(prop: dbUserType) {
    return (
        <>
            <h1>Welocom: {prop?.name}</h1>
            <h1>Your Roll number: {prop?.rollNumber}</h1>
            <h1>Subject: {prop?.subject}</h1>
        </>
    )
}