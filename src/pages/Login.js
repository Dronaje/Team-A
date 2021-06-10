import React, {useState, useEffect} from 'react';
import dronaje from '../static/dronageLight.png';

const Login = () => {
    const [email, setEmail] = useState('none');
    const [password, setPassword] = useState('none');
    const [massageFlag, setMassageFlag] = useState(false);
    const [cognitoFlag, setCognitoFlag] = useState(false);

    // useEffect()

    const validationLogin= () =>{
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
                    <button className="buttonLogin" type="submit" onClick={validationLogin}>Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login;