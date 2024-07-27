"use client"

import { useState } from "react";
import Login from "./components/Login/page";
import UserAuth from "./components/UserAuth/page";
import { UserType } from "./components/UserType/page";
import './globals.css'

export default function Page() {
  const [isAuthenticate, setIsAuthenticate] = useState(false)
  const [user, setUser] = useState<UserType | null>(null)
  return (
    <>
      {
        isAuthenticate ?
          <UserAuth userData={user} />
          : <Login Authentication={setIsAuthenticate} setUser={setUser} />
      }

    </>
  )
}