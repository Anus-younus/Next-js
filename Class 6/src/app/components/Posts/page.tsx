import Content from "../Content/page"
import Likes from "../Likes/page"

type PostType = {
    content?:string,
    likes?:number
}

type PostsType = {
    posts?:PostType[]
}

export default function Posts ({posts}:PostsType) {
    return (
        <>
        <div className="row mx-3">
        {
            posts?.map((post, i) => (
                    <div key={i}  className="col col-3 border border-dark p-4 mx-3">
                    <Content content={post.content}/>
                    <Likes likes={post.likes}/>
                </div>
            ))
        }
        </div>
        </>
    )
}