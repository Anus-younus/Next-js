"use client"

import {UserType} from "@/app/Context/page"
import Posts from "../Posts/page"
import Hobbies from "../Hobbies/page"
import Greet from "../Greet/page"

type UserTimeLineType = {
    userData: (null | UserType)
}

export default function UserTimeLine({userData}:UserTimeLineType){
    return (
        <>
        <Greet userName={userData?.userName}/>
        <Hobbies hobbies={userData?.hobbies}/>
        <Posts posts={userData?.post}/>
        </>
    )
}