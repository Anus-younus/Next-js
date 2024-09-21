"use client"

import { handleUpdatePassword } from "@/firebase/firebase.auth"
import { useState } from "react"

export default function ForgetPassword() {
    const [newPassword, setNewPassword] = useState('')
    return (
        <>
          <input type="text" value={newPassword} onChange={(e) => {setNewPassword(e.target.value)}}/>
          <button onClick={() => {handleUpdatePassword(newPassword)}}>Update password</button>
        </>
    )
}