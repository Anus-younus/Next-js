"use client"

import auth, { handleLogout } from "@/firebase/firebaseAuth"
import db, { createTodo, fetchTodos } from "@/firebase/firebaseDb"
import { collection, DocumentData, onSnapshot, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"

export default function Main() {
    const [todo, setTodo] = useState("")
    const [allTodos, setAllTodos] = useState<DocumentData[]>([])
    useEffect(() => {
        let collectionRef = collection(db, "todos");
        let currentUserUID = localStorage.getItem('uid')
        let condition = where("uid", "==", currentUserUID);
        let q = query(collectionRef, condition);
        let allTodosClone = [...allTodos]
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    let todo = change.doc.data();
                    todo.id = change.doc.id;
                    allTodosClone.push(todo);
                    setAllTodos([...allTodosClone])
                }
                if (change.type === "modified") {
                }
                if (change.type === "removed") {
                }
            })
        })
        // handleFetch()
        // console.log(allTodos);
        
    }, [])

    // const handleFetch = async () => {
    //     const allTodos = await fetchTodos()
    //     let cloneTodos = [...allTodos]
    //     cloneTodos.push(allTodos)
    //     console.log(cloneTodos);
    //     setAllTodos([...cloneTodos])

    // }

    const handleFetch = () => {
        
    }
    return (
        <>
            <div className="">
                <div className="">
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
            {
                allTodos.length > 0 ?
                    allTodos.map(({ todo, id }) => <h1 key={id}>{todo}</h1>) :
                    <>Hello</>
            }
        </>
    )
}