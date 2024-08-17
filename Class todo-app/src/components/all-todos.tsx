"use client"

type TodoBoxType = {
    todos: string[],
    handleDelete: (index: number) => void;
    handleEdit: (index: number) => void;
}

export default function TodoBox({ todos, handleDelete, handleEdit }: TodoBoxType) {
    return (
        <>
            {
                todos.map((todo, index) => (
                    <div key={todo + index}>
                        <p>{todo}</p>
                        <button onClick={(e) => { handleEdit(index) }}>Edit</button>
                        <button onClick={(e) => {handleDelete(index)}}>Deleted</button>
                    </div>
                ))
            }
        </>
    )
}