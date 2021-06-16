import React from "react";
import TextField from "@material-ui/core/TextField";
import { styled } from "@material-ui/core/styles";
import { useInput } from "./../utils/forms";
import { Auth } from "aws-amplify";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link, useHistory } from "react-router-dom";
import dronaje from '../static/dronageLight.png';

const Field = styled(TextField)({
  margin: "10px 0",
});

const DLink = styled(Link)({
  margin: "15px 0",
  textAlign: "right",
});

const Login = () => {
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();
  const [email, setEmail] = React.useState("none");
  const [password, setPassword] = React.useState("none");
  const [massageFlag, setMassageFlag] = React.useState(false);
  const [errorMSG, setErrorMSG] = React.useState("חסרים פרטים");
  const [code, setCode] = React.useState("none");



  

    const handleEmail = (event) => {
        const { target: { name, value } } = event;
        setEmail(() => ( value ))
    } 

     const handlePassword = (event) => {
        const { target: { name, value } } = event;
        setPassword(() => ( value ))
    } 


  const validationSubmit = (e)=>{
      e.preventDefault();
    if(email==="none" || password==="none"){
      setErrorMSG("Details are missing");
      setMassageFlag(true);
    }
    else{
      handleSubmit();
    }
  }

  async function resendConfirmationCode() {
    try {
        await Auth.resendSignUp(email);
    } catch (err) {
    }
}



  const handleSubmit = async () => {
    localStorage.setItem('user', email);
    setLoading(true);
    try {
      const user = await Auth.signIn(email, password);
      localStorage.setItem('getUser', user);
      history.push("/homepage");
    } catch (error) {
      setErrorMSG("Invalid input");
      setMassageFlag(true)
    }
    setLoading(false);
  };


  

  return (
      <div className="formBody">
        <div className="formsLogin">
            <img src={dronaje} className="form-logo" alt="logo"/>
            <h1 style={{ fontSize: "22px", fontWeight: 800 }}> Sign in to an existing account</h1>
            {massageFlag && (<h3 style={{color:"red", textAlign:"center"}}>{errorMSG}</h3>)}
            <form
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
            onSubmit={validationSubmit}
            >
            <Field label="Email" type="email"  onChange={handleEmail}/>
            <Field label="Password" type="password"  onChange={handlePassword} />
            <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                disabled={loading}
            >
                {loading && <CircularProgress size={20} style={{ marginRight: 20 }} />}
                Login 
            </Button>
            <DLink to="/signin">make a new account &rarr;</DLink>
            </form>
    </div>
    </div>
  );
};

export default Login;
