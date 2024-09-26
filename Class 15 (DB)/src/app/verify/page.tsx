"use client"

import auth, { handleVerify } from "@/firebase/firebaseAuth"
import db from "@/firebase/firebaseDb"
import { onAuthStateChanged } from 'firebase/auth'
import { collection, onSnapshot, query } from "firebase/firestore"
import { useRouter } from "next/navigation"

export default function Verify() {
    const router = useRouter()
    onAuthStateChanged(auth, (user) => {
        const q = query(collection(db, "users"))
        onSnapshot(q, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    console.log("New city: ", change.doc.data());
                }
                if (change.type === "modified") {
                    if(change.doc.data().isVerify) {
                        router.push('/home')
                    }
                }
                if (change.type === "removed") {
                    console.log("Removed city: ", change.doc.data());
                }
            })
        })
    })
    return (
        <>
           <div className="container">
                <div className="row">
                    <p style={{textAlign: "center"}}>Verify your email reload the page</p>
                    <button onClick={handleVerify}>sendAgain</button>
                </div>
            </div>
        </>
    )
}