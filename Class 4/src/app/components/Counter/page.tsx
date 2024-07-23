"use client"

import { useState } from "react"

type CountProp = {
    count: number,
    text: string
}

export default function Counter({ count, text }: CountProp) {
    const [initCount, setInitCount] = useState(count)
    const [userName, setUserName] = useState(text)

    const plusNumber = () => {
        setInitCount(initCount + 1)
    }

    const minusNumber = () => {
        if (initCount === 0) return
        setInitCount(initCount - 1)
    }
    return (
        <>
            <input 
            type="text" 
            onChange={(e) => {
                if(e.target.value.length < 3){
                    setUserName("")
                }
                else{
                    setUserName(e.target.value)
                }
            }}
             />
            <h1>{userName} {initCount}</h1>
            <button onClick={plusNumber}>Plus</button>
            <button onClick={minusNumber}>Minus</button>
        </>
    )
}