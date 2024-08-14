

type TodoListType = {
    todos: string[];
    deleteTodo: (todoIndex: number) => void;
    setEditIndex: (todoIndex: number) => void;
}

export default function TodoList({
    todos,
    deleteTodo,
    setEditIndex
}: TodoListType) {
    return (
        <>
            {
                todos.map((todo, index) => (
                    <div key={todo + index}>
                        <b>{todo}</b>
                        <button
                            onClick={() => {
                                setEditIndex(index)
                            }}

                        >Edit</button>
                        <button onClick={() => {
                            deleteTodo(index)
                        }}>Delete</button>
                    </div>
                ))
            }
        </>
    )
}