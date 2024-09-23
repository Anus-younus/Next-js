"use client"

import auth, { handleLogout } from "@/firebase/firebaseAuth"
import db, { createTodo } from "@/firebase/firebaseDb"
import { useState } from "react"

export default function Main() {
    const [todo, setTodo] = useState('')
    return (
        <>
            <div className="container">
                <div className="row">
                    <p>Welcome {auth.currentUser?.email}</p>
                    <button onClick={handleLogout}>logout</button>
                    <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
                    <button onClick={() => {
                        createTodo(todo)
                        setTodo("")
                    }
                    }>add todo</button>
                </div>
            </div>
        </>
    )
}