import { Link } from "react-router-dom"
import Post from "../post/Post"
import "./posts.css"
import Postslist from "./Postslist"

const Posts = () => {
    return (
        <div className="posts">
            {Postslist.map((post) =>
                <Link style={{textDecoration:'none'}} to={`/posts/${post.title}`}>
                    <Post img={post.img}
                        title={post.title}
                        content={post.content}
                    />
                </Link>
            )}
        </div>
    )
}

export default Posts
