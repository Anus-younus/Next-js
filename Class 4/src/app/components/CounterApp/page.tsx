"use client"
import { useState } from "react"

type ConterAppProps = {
    counter: number
}

export default function App({ counter }: ConterAppProps) {
    const [count, setCount] = useState(counter)
    const [value, setValue] = useState("")
    return (
        <>
            <input
                type="text"
                placeholder="Enter a count"
                onChange={
                    (e)=>{
                        setValue(e.target.value)
                    }
                }
                value={value}
            />
            <br />
            <h1>Count {count} </h1>
            <br />
            <button onClick={
                (e) => {
                    if(parseInt(value) < 0){
                        setCount(parseInt(value) + count) 
                    }
                    else if(parseInt(value) > 0){
                        setCount(parseInt(value) - count)
                    }
                    setCount(parseInt(value) + 1)
                }
            }>Add</button><br />
            <button
            onClick={
                (e)=>{
            <h1>Count {count} </h1>
                    setCount(count - 1)
                }                
            }>Minus</button>
        </>
    )
}