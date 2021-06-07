import React from 'react';
import dronaje from '../static/dronageLight.png';

const MFA = () => {
    return (
        <body className="formBody">
            <div className="formsLogin">
                <img src={dronaje} className="form-logo" />
                <h3>Multi-Factor Authentication</h3>
                <form>
                    <input type="text" placeholder="MFA code:" className="inFrom"></input>
                    <button className="buttonLogin" type="submit" onClick="">Submit</button>
                </form>
                <a className="NoMFA">Cencel</a>
            </div>
        </body>
    )
}

export default MFA;