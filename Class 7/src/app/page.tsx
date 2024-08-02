"use client"

import { useContext, useState } from 'react';
import Login from './components/Login';
import './globals.css' 
import Posts from './components/Posts';
import { UserContext } from './context/usersContext';

export default function Home() {
  const [user, setUser] = useState<null | object>(null)
  const obj = useContext(UserContext) 
  return (
    <>
    <h1>Hello</h1>
    {
      obj.isAuthenticate?
      <Posts/>:
      <Login/>
    }

    </>
  );
}
