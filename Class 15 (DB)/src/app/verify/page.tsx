"use client"

import { handleVerify } from "@/firebase/firebaseAuth"

export default function Verify() {
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