"use client";









import { useState } from "react";

type TodoEditType = {
    editedTodo: string;
    saveEditedTodo: (updatedTodo: string) => void;
}

export default function TodoEdit({
    editedTodo,
    saveEditedTodo
}: TodoEditType) {

    const [editTodo, setEditTodo] = useState(editedTodo);

    return (
        <>
            <label htmlFor="new-todo">Todo:</label>
            <input
                type="text"
                id="new-todo"
                value={editTodo}
                onChange={(e) => { setEditTodo(e.target.value) }}
            />
            <button
                onClick={() => {
                    saveEditedTodo(editTodo);
                }}
            >Save Todo</button>
        </>
    )
}