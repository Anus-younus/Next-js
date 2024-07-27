type HobiesProp ={
    hobbies?:string[]
}
export default function Hobbies({ hobbies }: HobiesProp) {
    return (
        <>
            <h1>Hobies</h1>
            <ul>
                {
                    hobbies?.map((hobbie, i)=>(
                        <li key={i}>{hobbie}</li>
                    ))
                }
            </ul>
        </>
    )
}