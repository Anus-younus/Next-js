"use client"

import { createUserWithCreadentials, signInUserWithCreadentials } from "@/firebase/firebase.auth";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = async () => {
      createUserWithCreadentials(email, password)
  }

  const handleSignIn = async () => {
     signInUserWithCreadentials(email, password)
  }
  return (
    <>
    <label htmlFor="email">Enter your email: </label>
      <input 
      type="text"
      id="email"
      value={email}
      onChange={(e) => { setEmail(e.target.value) }}
       /> <br />
    <label htmlFor="password">Enter your password: </label>
      <input 
      type="text"
      id="password"
      value={password}
      onChange={(e) => { setPassword(e.target.value) }}
       /> <br />
       <button onClick={handleSignUp}>Sign up</button>
       <button onClick={handleSignIn}>Sign in</button>
    </>
  );
}
