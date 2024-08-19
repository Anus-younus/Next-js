"use client"

import { useState } from "react"

type TodoInputType = {
    handleAdd: (todo: string) => void;
}

export default function TodoInput({ handleAdd }: TodoInputType) {
    const [todo, setTodo] = useState('')
    return (
        <>
            <input
                value={todo}
                onChange={(e) => { setTodo(e.target.value) }}
                type="text"
            />
            <button
                onClick={() => {
                    handleAdd(todo)
                    setTodo("")
                }}
            >Add Todo</button>
        </>
    )
}