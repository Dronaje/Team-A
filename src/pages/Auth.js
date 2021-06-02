import logo from '../static/dronajeLogo.png';

function Auth(){
    return(
        <div className="App-header">
            <img src={logo} className="App-logo" />
            <button className="auth-button">
                Sign In 
            </button>
            <button className="auth-button" onClick="">
                Log In
            </button>
        </div>
    );
}

export default Auth;