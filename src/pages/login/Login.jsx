import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Users from "../../components/Users"
import "./login.css";

const Login = ({setIsLoggedIn, path}) => {
    const navigate= useNavigate();
    const [errorMessages, setErrorMessages] = useState({});
    const errors = {
        email: "Invalid username",
        pass: "Invalid password"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { email, pass } = document.forms[0];

        // Find user login info
        const userData = Users.find((user) => user.email === email.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsLoggedIn(true);
                navigate(path);
            }
        } else {
            // email not found
            setErrorMessages({ name: "email", message: errors.email });
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input className="loginInput" name="email" type="text" placeholder="Enter your email..." />
                {renderErrorMessage("email")}
                <label>Mật khẩu</label>
                <input className="loginInput" name="pass" type="password" placeholder="Enter your password..." />
                {renderErrorMessage("pass")}
                <button className="loginButton" onClick={handleSubmit}>
                    Đăng nhập
                </button>
            </form>
        </div>
    );
}

export default Login