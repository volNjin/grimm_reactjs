import "./header.css"
import headerImg from "../Image/headerImg.png"
const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Truyện cổ</span>
                <span className="headerTitleLg">Grimm</span>
            </div>
            <img
                className="headerImg"
                src={headerImg} 
                alt="" 
                />
        </div>

    )
}

export default Header
