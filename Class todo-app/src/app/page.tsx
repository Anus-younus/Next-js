"use client";

import TodoEdit from "@/components/todoBox";
import TodoInput from "@/components/NewTodoInput";
import TodoList from "@/components/AllTodos";
import { useEffect, useState } from "react";

export default function Home() {
    const [todos, setTodos] = useState<string[]>([]);

    const [editIndex, setEditIndex] = useState(-1);

    const addNewTodo = (newTodo: string) => {
        console.log("New Todo:", newTodo);
        setTodos([...todos, newTodo]);
    }

    const deleteTodo = (todoIndex: number) => {
        let todosClone = [...todos];
        todosClone.splice(todoIndex, 1);
        setTodos([...todosClone]);
    }

    const saveEditedTodo = (updatedTodo: string) => {
        console.log(updatedTodo);
        let todosClone = [...todos];
        todosClone.splice(editIndex, 1, updatedTodo);
        setTodos([...todosClone]);
        setEditIndex(-1);
    }


    useEffect(() => {
        console.log("Todos List: ", todos);
    }, [todos])

    return (
        <>

            {
                editIndex === -1 ?
                    <TodoInput
                        addNewTodo={addNewTodo}
                    /> :
                    <TodoEdit
                        editedTodo={todos[editIndex]}
                        saveEditedTodo={saveEditedTodo}
                    />

            }

            <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
                setEditIndex={setEditIndex}
            />
        </>
    )
}