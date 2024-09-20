"use client"

import Login from "@/components/login"
import SignUp from "@/components/signup"
import { useAuthContext } from "@/context/authContext"

export default function Home() {
  const { isAuthenticated } = useAuthContext()!
  return (
    <>
      {
        isAuthenticated ?
          <SignUp /> :
          <Login />
      }
    </>
  )
}