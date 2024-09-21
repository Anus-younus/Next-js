"use client"

import { handleSignOut } from "@/firebase/firebase.auth"
import { fetchTodos, handleAddTodo } from "@/firebase/firebase.firestore"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
    const [todo, setTodo] = useState('')
    useEffect(() => {
        fetchTodos()
    }, [])
    return (
        <>
            <input type="text" value={todo} onChange={(e) => { setTodo(e.target.value) }} />
            <button onClick={() => { handleAddTodo(todo) }}>add</button>
            <Link href={'/forgetpassword'}>update password</Link>
            <button onClick={() => { handleSignOut() }}>Logout</button>
        </>
    )
}