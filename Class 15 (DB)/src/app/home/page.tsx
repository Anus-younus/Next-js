"use client"

import auth, { handleLogout } from "@/firebase/firebaseAuth"
import db, { createTodo, fetchTodos } from "@/firebase/firebaseDb"
import { onAuthStateChanged } from "firebase/auth"
import { collection, DocumentData, onSnapshot, query, Unsubscribe, where } from "firebase/firestore"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Main() {
    const [todo, setTodo] = useState("")
    const [allTodos, setAllTodos] = useState<DocumentData[]>([])
    useEffect(() => {
        const stateChangedDispatch = onAuthStateChanged(auth, (user) => {
            if(user) {
                handleFetch()
            }
        })
        return () => {
            if(realTimeDispatch) {
                realTimeDispatch()
                stateChangedDispatch()
                console.log("Component Unmount")
            }
        }
        // console.log(allTodos);
    }, [])

    let realTimeDispatch: Unsubscribe

    // const handleFetch = async () => {
    //     const allTodos = await fetchTodos()
    //     let cloneTodos = [...allTodos]
    //     cloneTodos.push(allTodos)
    //     console.log(cloneTodos);
    //     setAllTodos([...cloneTodos])

    // }

    const handleFetch = () => {
        let collectionRef = collection(db, "todos");
        let currentUserUID = auth.currentUser?.uid
        let condition = where("uid", "==", currentUserUID);
        let q = query(collectionRef, condition);
        let allTodosClone = [...allTodos]
        realTimeDispatch = onSnapshot(q, (querySnapshot) => {
            querySnapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    let todo = change.doc.data();
                    todo.id = change.doc.id;
                    allTodosClone.push(todo);
                    setAllTodos([...allTodosClone])
                }
                if (change.type === "modified") {
                    console.log("data modified")
                }
                if (change.type === "removed") {
                    console.log("data removed")
                }
            })
        })
    }
    return (
        <>
            <div className="">
                <Link href={'/about'}>About</Link>
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
                    allTodos.map(({ todo, id }) => <div style={{justifyContent: "space-between", display: "flex", width: "90%", border: "1px solid red", margin: "0 5em"}} key={id}><p>{todo}</p> <div style={{display: "fl"}}><button>Edit</button><button>Delete</button></div></div>) :
                    <>Not todos avaliable</>
            }
        </>
    )
}