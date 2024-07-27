"use client"

import { useState } from "react";
import { UserType } from "../UserType/page";
type PropType = {
    Authentication: (state: boolean) => void;
    setUser: (user: UserType) => void
}


const users = [
    {
        email: "anus@gmail.com",
        password: "123456",
        userName: "Anus",
        hobbies: ["swimming", "gardening"],
        post: [
            {
                content:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe velit cum aspernatur numquam asperiores sunt vero eligendi ut ducimus rerum aperiam officiis necessitatibus consequuntur cupiditate, unde voluptates dolore eaque quo!",
                likes: 10,
            },
            {
                content:
                    "ipsum Lorem  dolor sit amet consectetur adipisicing elit. Saepe velit cum aspernatur numquam asperiores sunt vero eligendi ut ducimus rerum aperiam officiis necessitatibus consequuntur cupiditate, unde voluptates dolore eaque quo!",
                likes: 15,
            },
        ],
    },
    {
        email: "Owais@gmail.com",
        password: "123456",
        userName: "Owais",
        hobbies: ["gym", "video games"],
        post: [
            {
                content:
                    "special Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe velit cum aspernatur numquam asperiores sunt vero eligendi ut ducimus rerum aperiam officiis necessitatibus consequuntur cupiditate, unde voluptates dolore eaque quo!",
                likes: 100,
            },
            {
                content:
                    "the quick ipsum Lorem  dolor sit amet consectetur adipisicing elit. Saepe velit cum aspernatur numquam asperiores sunt vero eligendi ut ducimus rerum aperiam officiis necessitatibus consequuntur cupiditate, unde voluptates dolore eaque quo!",
                likes: 1500,
            },
        ],
    },
];


export default function Login({ Authentication, setUser }: PropType) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const userAuth = () => {
        let [userFound] = users.filter(
            (user) => user.email === email && user.password === password
        );

        if (userFound) {
            Authentication(true)
            setUser(userFound)
        }
        else {
            console.log("Invlaied");

        }
    }
    return (
        <>
            <div className="container my-5">
                    <div className="mb-3">
                        <label
                        htmlFor="exampleInputEmail1"
                        className="form-label">
                        Email address
                        </label>
                        <input
                        placeholder="Enter Your Email"
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                        htmlFor="exampleInputPassword1" 
                        className="form-label">
                        Password
                        </label>
                        <input
                        placeholder="Enter Your Password"
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                        value={password}
                         />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={userAuth}>Submit</button>
            </div>
        </>
    )
}