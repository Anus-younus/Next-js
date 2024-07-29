type ContentType = {
    content?:string
}


export default function Content ({content}:ContentType) {
    return (
        <>
        <p>{content}</p>
        </>
    )
}