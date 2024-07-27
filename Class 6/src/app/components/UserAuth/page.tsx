"use client"

import Hobbies from "../Hobbies/page"
import Posts from "../Posts/page"
import { UserType } from "../UserType/page"

type UserProps = {
    userData: (null | UserType)
}

export default function UserAuth({userData}:UserProps){
    return (
        <>
        <h1>Hi</h1>
        <h2>{userData?.userName}</h2>
        <Hobbies hobbies={userData?.hobbies} />
        <Posts post={userData?.post}/>
        </>
    )
}