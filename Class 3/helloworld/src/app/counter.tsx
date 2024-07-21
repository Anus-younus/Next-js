"use client"
import { useState } from "react"

type CounterProp = {
    text: string,
    count: number
}

export default function Counter({ text, count }: CounterProp) {

    const [initCount, setInitCount] = useState(count)
    const [username, setUserName] = useState(text)
    return (
        <>
            <h1>{username} {initCount}</h1>
            <input type="text"
                value={username}
                onChange={(e) => { setUserName(e.target.value) }} />
            <p>{username}</p>
            <h3>{initCount}</h3>
            <button onClick={() => { setInitCount(initCount + 1) }}>Add</button>
            <button onClick={() => { if (initCount === 0) { return } setInitCount(initCount - 1) }}>Sub</button>
        </>
    )
}