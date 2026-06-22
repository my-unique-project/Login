import React from 'react'

function Signup() {
    return (
        <>
            <div>
                <p id="txt_signup">Sign up</p>
            </div>

            <div id="input_sec">
                <input placeholder='Email'></input>
                <input placeholder='Password' type='password'></input>
                <input placeholder='Phone' type='tel'></input>
            </div>

            <div id="final_signup_btn">
                <button id="final_signup">Sign Up</button>
            </div>
            <hr></hr>
            <p id="signUpDummyText">Data will be store in databases</p>
        </>

    )
}

export default Signup