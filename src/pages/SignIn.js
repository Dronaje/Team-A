import React from 'react';
import dronaje from '../static/dronageLight.png';

const SignIn = () => {
    return (
        <body className="formBody">
            <div className="formsLogin">
                <img src={dronaje} className="form-logo" />
                <form>
                    <input type="text" placeholder="Full name:" className="inFrom"></input>
                    <input type="text" placeholder="Gender:" className="inFrom"></input>
                    <input type="text" placeholder="Date of Birth:" className="inFrom"></input>
                    <input type="text" placeholder="Email:" className="inFrom"></input>
                    <input type="text" placeholder="Password:" className="inFrom"></input>
                    <input type="text" placeholder="Confirm Password:" className="inFrom"></input>
                    <input type="text" placeholder="Genre:" className="inFrom"></input>
                    <button className="buttonLogin" type="submit" onClick="">Sign In</button>
                </form>
            </div>
        </body>
    )
}

export default SignIn;