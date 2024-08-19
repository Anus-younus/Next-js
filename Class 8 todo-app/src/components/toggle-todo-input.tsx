"use client"

import { useState } from "react"

type ToggleInputType = {
    handleSave: (todo: string) => void,
    newTodo: string
}

export default function ToggleInput({ handleSave, newTodo }: ToggleInputType) {
    const [todo, setTodo] = useState(newTodo)
    return (
        <>
            <input
                value={todo}
                onChange={(e) => { setTodo(e.target.value) }}
                type="text"
            />
            <button
                onClick={() => {
                    handleSave(todo)
                    setTodo("")
                }}
            >Save todo</button>
        </>
    )
}