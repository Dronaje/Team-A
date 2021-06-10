import React, {useState } from 'react';
import dronaje from '../static/dronageLight.png';

const MFA = () => {
    const [mfaCode, setMFACode] = useState('none');
    const [massageFlag, setMassageFlag] = useState(false);
    const [cognitoFlag, setCognitoFlag] = useState(false);

    const validationMFA = () =>{
        window.location.replace('/homepage');
    }


    return (
        <div className="formBody">
            <div className="formsLogin">
                <img src={dronaje} className="form-logo" alt="logo"/>
                <h3>Multi-Factor Authentication</h3>
                {massageFlag && (<h3 style={{color:"red", textAlign:"center"}}>חסרים פרטים</h3>)}
                <form>
                    <input type="text" placeholder="MFA code:" className="inFrom" onChange={(text)=>setMFACode(text)}></input>
                    <button className="buttonLogin" type="submit" onClick={validationMFA}> Submit </button>
                    {/* <button className="NoMFA" type="clear" >Cencel</button> */}
                </form>
            </div>
        </div>
    )
}

export default MFA;

/*

import React, {useState, useEffect} from 'react';
import dronaje from '../static/dronageLight.png';

const Login = () => {
    const [email, setEmail] = useState('none');
    const [password, setPassword] = useState('none');
    const [massageFlag, setMassageFlag] = useState(false);
    const [cognitoFlag, setCognitoFlag] = useState(false);

    // useEffect()

    const validationHandler = () =>{
        if(email!=='none' && password!=='none' ){
            setMassageFlag(false);
            window.location.replace('/homepage');
        }
        else{
            setMassageFlag(true);
        }
    }

    return (
        <div className="formBody">
            <div className="formsLogin">
                <img src={dronaje} className="form-logo" alt="logo"/>
                {massageFlag && (<h3 style={{color:"red", textAlign:"center"}}>חסרים פרטים</h3>)}
                <form>
                    <input type="email" placeholder="Email:" className="inFrom" onChange={(text)=>{setEmail(text)}}></input>
                    <input type="password" placeholder="Password:" className="inFrom" onChange={(text)=>{setPassword(text)}}></input>
                    <button className="buttonLogin" type="submit" onClick={validationHandler}>Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login;*/