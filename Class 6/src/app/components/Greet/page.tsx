type GreetData = {
    userName?:string
}

export default function Greet ({userName}:GreetData) {
    return (
        <>
        <h1>Welocome {userName}</h1>
        </>
    )
}