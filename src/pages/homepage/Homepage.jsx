import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import "./homepage.css"

const Homepage = () => {
    return (
        <>
            <Header />
            <div className="home">
                <Posts/>
            </div>
        </>
    )
}

export default Homepage
