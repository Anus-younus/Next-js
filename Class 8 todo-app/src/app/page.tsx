"use client"

import TodoBox from "@/components/all-todos"
import ErrorComp from "@/components/error-component"
import TodoInput from "@/components/todo-input"
import ToggleInput from "@/components/toggle-todo-input"
import { useState } from "react"

export default function Home() {
  const [todos, setTodos] = useState(["apple", "book", "cat", "dog"])
  const [edit, setEdit] = useState(-1)
  const [newTodo, setNewTodo] = useState('')
  const [error, setError] = useState(false)

  const handleAdd = (todo: string) => {
    let todosClone = [...todos, todo]
    setTodos([...todosClone])
  }

  const handleDelete = (index: number) => {
    let todosClone = [...todos]
    todosClone.splice(index, 1)
    setTodos([...todosClone])
  }

  const handleSave = (todo: string) => {
    let cloneTodos = [...todos]
    cloneTodos.splice(edit, 1, todo)
    setNewTodo(todo)
    setTodos(cloneTodos)
    setEdit(-1)

  }


  const handleEdit = (index: number) => {
    if (edit !== -1) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 1000)
      return
    }
    setNewTodo(todos[index])
    setEdit(index)

  }
  return (
    <>
      {
        edit === -1 ?
          <TodoInput
            handleAdd={handleAdd}
          /> :
          <ToggleInput
            handleSave={handleSave}
            newTodo={newTodo}
          />
      }
      {
        error === true ?
          <ErrorComp />
          : ""
      }
      <TodoBox
        todos={todos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </>
  )
}