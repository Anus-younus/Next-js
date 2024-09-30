"use client"

import auth from "@/firebase/firebaseAuth"
import db from "@/firebase/firebaseDb"
import { Unsubscribe, onAuthStateChanged } from "firebase/auth"
import { DocumentData, collection, onSnapshot, query, where } from "firebase/firestore"
import Link from "next/link"
import { useEffect, useState } from "react"
import '../bootstrap.css'

export default function Home() {
    const [todo, setTodo] = useState("")
    const [expence, setExpence] = useState<DocumentData[]>([])
    useEffect(() => {
        const stateChangedDispatch = onAuthStateChanged(auth, (user) => {
            if (user) {
                handleFetch()
                console.log(expence)
            }
        })
        return () => {
            if (realTimeDispatch) {
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
        let collectionRef = collection(db, "expenses");
        let currentUserUID = auth.currentUser?.uid
        let condition = where("uid", "==", currentUserUID);
        let q = query(collectionRef, condition);
        let allEcpenceClone = [...expence]
        realTimeDispatch = onSnapshot(q, (querySnapshot) => {
            querySnapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    let todo = change.doc.data();
                    todo.id = change.doc.id;
                    allEcpenceClone.push(todo);
                    setExpence([...allEcpenceClone])
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
            <Link href={'/addnew'}>Add new</Link>
            {
                expence.length > 0 ?
                    expence.map((expen) => (
                        <div key={expen.id} className="card" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">{expen.title}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{expen.price}</h6>
                                <p className="card-text">{expen.category}</p>
                                <p>{expen.date.seconds}</p>
                                <a href="#" className="card-link" onClick={() => {}}>Edit</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    )) : <h1>No Expence avaliable</h1>
            }
        </>
    )
}