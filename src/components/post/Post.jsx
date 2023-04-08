import "./post.css"

const Post = ({ img, title, content }) => {
    return (
        <div className="post">
            <img
                className="postImg"
                src={img}
                alt=""
            />
            <div className="postInfo">
                <span className="postTitle">
                    {title}
                </span>
            </div>
            <p className="postContent">
                {content}
            </p>
        </div>
    )
}

export default Post
