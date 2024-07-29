"use client"
import { useState } from "react";
import { UserType } from '../../Context/page'



const users = [
    {
        email: "haider@gmail.com",
        password: "123456",
        userName: "haider ali",
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
        email: "abdullah@gmail.com",
        password: "123456",
        userName: "abdullah",
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

type LoginType = {
    changeAuthStatus: (status: boolean) => void;
    setUser: (user: UserType) => void
}


export default function Login({ changeAuthStatus, setUser }: LoginType) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler = () => {
        let [userFound] = users.filter(
            (user) => email === user.email && password === user.password
        )
        if (userFound) {
            changeAuthStatus(true)
            setUser(userFound)
        }
    }
    return (
        <>
            <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", width: '100%', height: '30em' }}>

                <div
                    style={{ width: "400px" }}>
                    <h1 className="text-center">Login</h1>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button onClick={loginHandler} type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </>
    )
}