type LikessType = {
    likes?:number
}


export default function Likes ({likes}:LikessType) {
    return (
        <>
        <button className="btn btn-success">{likes}</button>
        </>
    )
}