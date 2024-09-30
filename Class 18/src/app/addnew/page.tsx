"use client"


import { handleSignUp } from "@/firebase/firebaseAuth"
import { createExpence } from "@/firebase/firebaseDb"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function AddNew() {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')
    const [note, setNote] = useState('')
    useEffect(() => {

    }, [])

    const handleSumit = () => {
        console.log(title, amount, category)
    }
    return (
        <>
        <Link href={'/home'}>Back</Link>
            <div className="container">
                <div className="row">
                    <label htmlFor="name">Enter your name: </label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} /><br />
                    <label htmlFor="email">Enter your expence amout: </label>
                    <input type="number" value={amount} onChange={(e) => { setAmount(e.target.value) }} /><br />
                    <label htmlFor="password">Enter your expence category: </label>
                    <select value={category} onChange={(e) => { setCategory(e.target.value) }}>
                        <option>Food</option>
                        <option>Transport</option>
                        <option>Bills</option>
                        <option>Education</option>
                        <option>Invesment</option>
                        <option>Luxuires</option>
                    </select>
                    <label htmlFor="">Enter a note</label>
                    <textarea value={note} onChange={(e) => {setNote(e.target.value)}} cols="10" rows="4"></textarea>
                    <button onClick={() => { createExpence(title, amount, category, note) }}>create</button>
                </div>
            </div>
        </>
    )
}