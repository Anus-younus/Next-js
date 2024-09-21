"use client"

import { handleVerify } from "@/firebase/firebase.auth"

export default function Verify() {
    return (
        <>
        <h3>Relod the page</h3>
          <button onClick={() => {handleVerify()}}>send again</button>
        </>
    )
}