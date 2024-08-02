"use client"
import { useContext, useState } from "react"
import { users } from '../module.json'
import { UserContext } from "../context/usersContext"



export default function Login() {

    const obj = useContext(UserContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSumbit = () => {
        const [userFound] = users.filter((user) => user.email === email && user.password === password)
        
        if(userFound){
            obj.setUser(userFound)
            obj.setIsAuthenticate(true)
            alert("Login Successful")
        }
        else{
            alert("Invalied email or password")
        }
    }
    return (
        <>
            <div className="container">
                <input
                    style={{ width: "411px" }}
                    type="email"
                    className="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                <br />
                <br />
                <input
                    style={{ width: "411px" }}
                    type="password"
                    className="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                <br />
                <br />
                <button onClick={handleSumbit} className="btn btn-primary">Sumbit</button>
            </div>
        </>
    )
}