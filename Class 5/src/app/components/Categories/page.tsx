"use client"
export default function Categories() {
    const handleClick = (name:string) => {
        console.log(name);
        
    }
    return (
        <>
            <button onClick={()=>{handleClick('cars')}}>cars</button>
            <button onClick={()=>{handleClick('mobiles')}}>mobiles</button>
            <button onClick={()=>{handleClick('fans')}}>fans</button>
            <button onClick={()=>{handleClick('motors')}}>motors</button>
        </>
    )
}