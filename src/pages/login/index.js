import React from 'react';
import {FaRegUser} from 'react-icons/fa';
import { useHistory } from "react-router-dom";



const Login = () => {
    let history = useHistory();

    function login(){
        localStorage.setItem('auth', '1');
        history.push('/');
    }

    function validate(params) {
        params.preventDefault();
            var inputEmail = document.getElementById('inputEmail').value;
            var inputPassword = document.getElementById('inputPassword').value;
            if(inputEmail === "admin") {
              if(inputPassword === "password"){
                document.getElementById("loginError").innerHTML = "";
                login();
              }else{
                document.getElementById("loginError").innerHTML = "The password that you've entered is incorrect.";
              }
            }else {
              document.getElementById("loginError").innerHTML = "The username that you've entered doesn't match any account.";
            }
            return false;
    }
    
    return (
        <div className="login">
            <div className="login-form-wrapper">
                <div className="login-form">
                    <h1>VCloud</h1>
                    <h3>Welcome back!</h3>
                    <p>Happy to see you again!</p>
                    <form onSubmit={(e) => validate(e)}>
                    <div className="input-group">
                            <label>Username</label>
                            <div className="input">
                                <span><FaRegUser color="#4d83ff" size="14" /></span>
                                <input type="text" placeholder="Username" id="inputEmail" />
                            </div>
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <div className="input">
                                <span><FaRegUser color="#4d83ff" size="14" /></span>
                                <input type="password" placeholder="Password" id="inputPassword" />
                            </div>
                        </div>
                        <div className="error" id="loginError"></div>
                        <button type="submit" className="login-btn">LOGIN</button>
                    </form>
                </div>
            </div>
            <div className="login-bg"></div>
        </div>
    )
}

export default Login;