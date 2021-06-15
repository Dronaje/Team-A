import logo from '../static/dronajeLogo.png';

function Auth(){
    return(
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <button className="auth-button" onClick={ ()=>{ window.location.replace('/signin')}}>
                Sign Up 
            </button>
            <button className="auth-button" onClick={ ()=>{window.location.replace('/login')} }>
                Log In
            </button>
        </div>
    );
}

export default Auth;