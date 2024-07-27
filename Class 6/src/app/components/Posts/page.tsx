import { PostType } from "../UserType/page"

type PostProp = {
    post?: PostType[]
}


export default function Posts({ post }: PostProp) {
    return (
        <>
    <div className="row">
                {                
                    post?.map((post) =>
                    (
                            <div className="card col-3 my-3 mx-3">
                                <h5 className="card-header">Post</h5>
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">{post.content}</p>
                                    <a href="#" className="btn btn-primary">{post.likes}</a>
                                </div>
                            </div>
                    ))
                }
        </div>
        </>
    )
}