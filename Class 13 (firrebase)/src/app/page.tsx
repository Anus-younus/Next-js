"use client"

import { signInUser, signUpUser } from "@/firebase/firebaseauth";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <>
      <label htmlFor="email">Enter your Email: </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /> <br />
      <label htmlFor="password">Enter your Password: </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      />
      <br />
      <button onClick={() => { signUpUser(email, password) }}>Sign up</button>
      <button onClick={() => { signInUser(email, password) }}>Login</button>
    </>
  );
}
