import React, {useState, useEffect} from 'react';
import dronaje from '../static/dronageLight.png';

const SignIn = () => {
    const [userName, setUserName] = useState('none');
    const [gender, setGender] = useState('none');
    const [email, setEmail] = useState('none');
    const [password, setPassword] = useState('none');
    const [password2, setPassword2] = useState('none');
    const [birthday, setBirthday] = useState('none');
    const [genre, setGenre] = useState('none');
    const [massageFlag, setMassageFlag] = useState(false);
    const [cognitoFlag, setCognitoFlag] = useState(false);

    // useEffect()

    const validationSignIN = () =>{
        if(email!=='none' && password!=='none' && userName!=='none' && gender!=='none' && password!=='none' && password2!=='none'){
            setMassageFlag(false);
            window.location.replace('/mfa');
        }
        else{
            setMassageFlag(true);
        }
    }



    return (
        <body className="formBody">
            <div className="formsLogin">
                <img src={dronaje} className="form-logo" alt="logo"/>
                {massageFlag && (<h3 style={{color:"red", textAlign:"center"}}>חסרים פרטים</h3>)}
                <form>
                    <input type="text" placeholder="Full name:" className="inFrom" onChange={(text)=>{setUserName(text)}}></input>
                    <input type="text" placeholder="Gender:" className="inFrom" onChange={(text)=>{setGender(text)}}></input>
                    <input type="text" placeholder="Date of Birth:" className="inFrom" onChange={(text)=>{setBirthday(text)}}></input>
                    <input type="email" placeholder="Email:" className="inFrom" onChange={(text)=>{setEmail(text)}}></input>
                    <input type="password" placeholder="Password:" className="inFrom" onChange={(text)=>{setPassword(text)}}></input>
                    <input type="password" placeholder="Confirm Password:" className="inFrom" onChange={(text)=>{setPassword2(text)}}></input>
                    <input type="text" placeholder="Genre:" className="inFrom" onChange={(text)=>{setGenre(text)}}></input>
                    <button className="buttonLogin" type="submit" onClick={validationSignIN} >Sign In</button>
                </form>
            </div>
        </body>
    )
}

export default SignIn;

