import { useNavigate } from "react-router"
import "./logout.css"

const Logout = ({setIsLoggedIn}) => {
    const navigate = useNavigate()
    const handleClick=(event)=>{
        setIsLoggedIn(false)
        navigate("/")
    }
    return (
        <div>
            <button className="topbarLogoutButton" onClick={handleClick}>Đăng xuất</button>
        </div>
    )
}

export default Logout
