import React from 'react';
import dronaje from '../static/dronageLight.png';

const Login = () => {
    return (
        <body className="formBody">
            <div className="formsLogin">
                <img src={dronaje} className="form-logo" />
                <form>
                    <input type="text" placeholder="Email:" className="inFrom"></input>
                    <input type="text" placeholder="Password:" className="inFrom"></input>
                    <button className="buttonLogin" type="submit" onClick="">Log In</button>
                </form>
            </div>
        </body>
    )
}

export default Login;