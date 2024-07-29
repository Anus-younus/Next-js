"use client"
import { useEffect, useState } from 'react'
import Header from './components/Header/page'
import Login from './components/Login/page'
import UserTimeLine from './components/UserTimeLine/page'
import './globals.css'
import { UserType } from './Context/page'

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<UserType | null>(null)

  // useEffect(() => {
  //   const data: any = window.localStorage.getItem('My_User_Auth')
  //   if (!data === null) {
  //     return setIsAuthenticated(JSON.parse(data))
  //   }
  //   console.log(data);

  // }, [])

  // useEffect(() => {
  //   window.localStorage.setItem('My_User_Auth', JSON.stringify(isAuthenticated))
  // }, [isAuthenticated])
  return (
    <>
      <Header />
      {
        isAuthenticated ?
          <UserTimeLine userData={user} />
          : <Login changeAuthStatus={setIsAuthenticated} setUser={setUser} />
      }
    </>
  )
}
