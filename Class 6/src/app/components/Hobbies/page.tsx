type HobbiesType = {
    hobbies?:string[]
}

export default function Hobbies ({hobbies}:HobbiesType) {
    return (
        <>
        {
            hobbies?.map((hobbie, i) => (
                <ul key={i}>
                    <li>{hobbie}</li>
                </ul>
            ))
        }
        </>
    )
}