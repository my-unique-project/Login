import React from 'react'
import Signup from './Signup';
import { useState } from 'react';

function Login() {

    const [islogin, setfunction] = useState(true);

    const actice_color = {
        backgroundColor: "black",
        color: "white"
    }

    const inactive_color = {
        backgroundColor: "#FFF",
        color: "black"
    }

    const signup = () => {
        setfunction(false);
    }

    const login = () => {
        setfunction(true);
    }

    return (
        <>

            <div id="main">

                <div id="login">

                    <div id="login_sec">
                        <button id="login_btn" onClick={login} style={islogin ? actice_color : inactive_color}>Log In</button>
                    </div>

                    <div id="signup_sec">
                        <button id="signup_btn" onClick={signup} style={!islogin ? actice_color : inactive_color}>Sign Up</button>
                    </div>
                </div>

                {
                    islogin ? (
                        <div id="toggle login_signup_page">
                            <p id="txt_login">Login</p>

                            <div id="input_sec">
                                <input placeholder='Username'></input>
                                <input placeholder='Password' type='password'></input>
                            </div>

                            <p id="txt_forget">Forget Password?</p>

                            <div id="final_login_btn">
                                <button id="final_login">Log In</button>
                            </div>
                            <hr></hr>

                            <p id='tips'>Not a member? <span id="tips_hover" onClick={signup}>Sign up now</span></p>
                        </div>
                    ) :
                        (
                            <Signup />
                        )
                }

            </div >

        </>

    )
}

export default Login;