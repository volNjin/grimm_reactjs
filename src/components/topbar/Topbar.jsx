import React from 'react'
import './topbar.css';
import { Link } from 'react-router-dom';
import Logout from '../logout/Logout';

const Topbar = ({isLoggedIn, setIsLoggedIn}) => {
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <Link style={{textDecoration:'none'}} to="/">
                        <li className="topListItem">Trang chủ</li>
                    </Link>
                    <Link style={{textDecoration:'none'}} to="/write">
                        <li className="topListItem">Kể chuyện</li>
                    </Link>
                    <li className="topListItem">Liên hệ</li>
                </ul>
            </div>
            <div className="topLeft">
                {isLoggedIn ? <Logout setIsLoggedIn={setIsLoggedIn}/>
                    : <div>
                        <Link to="/login"><button className="topbarLoginButton">Đăng nhập</button></Link>
                        <Link to="/register"><button className="topbarRegisterButton">Đăng ký</button></Link>
                    </div>}
            </div>
        </div>
    )
}

export default Topbar
