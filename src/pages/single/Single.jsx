import "./single.css"
import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/singlePost/SinglePost"

const Single = ({post}) => {
    return (
        <div className="single">
            <SinglePost title={post.title} content={post.content}/>
            <Sidebar title={post.title} img={post.img}/>
        </div>
    )
}

export default Single
