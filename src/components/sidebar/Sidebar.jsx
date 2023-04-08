// import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar({title, img}) {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">{title}</span>
                <img
                    src={img}
                    alt=""
                />
            </div>
        </div>
    );
}