"use client"

import { useContext } from "react"
import { UserContext } from "../context/usersContext"

export default function Posts() {
    const obj = useContext(UserContext)
    console.log("Post"+[...obj.user]);
    
    
    return (
        <>
            {
                obj.user.posts.map((post:any)=>{
                    <div>
                        <h1>{post.title}</h1>
                        <p>{post.description}</p>
                    </div>
                })                    
            }
        </>
    )
}