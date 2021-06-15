import React from "react";
import TextField from "@material-ui/core/TextField";
import { styled } from "@material-ui/core/styles";
import { useInput } from "./../utils/forms";
import { Auth } from "aws-amplify";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link, useHistory } from "react-router-dom";
import dronaje from '../static/dronageLight.png';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const Field = styled(TextField)({
  margin: "10px 0",
});

const DLink = styled(Link)({
  margin: "15px 0",
  textAlign: "right",
});

const Signup: React.FC = () => {
  const [loading, setLoading] = React.useState(false);

  const [name, setName] = React.useState("none");
  const [email, setEmail] = React.useState("none");
  const [phone, setPhone] = React.useState("none");
  const [password, setPassword] = React.useState("none");
  const [confirmPassword, setConfirmPassword] = React.useState("none");
  const [birthdate, setBirthdate] = React.useState("none");
  const [value, setValue] = React.useState('female');
  const [errorMSG, setErrorMSG] = React.useState("חסרים פרטים");
  const [massageFlag, setMassageFlag] = React.useState(false);

  const history = useHistory();


  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
 const handleEmail = (event) => {
    const { target: { name, value } } = event;
    setEmail(() => ( value ))
  } 

  const handlePhone = (event) => {
    const { target: { name, value } } = event;
    setPhone(() => ( value ))
  }

  const handleName = (event) => {
    const { target: { name, value } } = event;
    setName(() => ( value ))
  }

  const handlePassword = (event) => {
    const { target: { name, value } } = event;
    setPassword(() => ( value ))
  } 

  const handleConfirmPassword = (event) => {
    const { target: { name, value } } = event;
    setConfirmPassword(() => ( value ))
  } 

  const handleBirthdate = (event) => {
    const { target: { name, value } } = event;
    setBirthdate(() => ( value ))
  } 

    const validationSubmit = (e: React.SyntheticEvent<Element, Event>)=>{
      e.preventDefault();
    if(email==="none" || password==="none" || name==="none" || phone==="none" || confirmPassword==="none" || birthdate==="none"){
      setErrorMSG("חסרים פרטים");
      setMassageFlag(true);
    }
    else if(password !== confirmPassword){
      setErrorMSG("סיסמאות לא נכונות");
      setMassageFlag(true);
    }
    else if(phone[0] !== '+'){
      setErrorMSG("+מספר טלפון צריך להיות 972");
      setMassageFlag(true);
    }
    else{
      handleSignUp();
    }
  }

  const handleSignUp = async () => {
    localStorage.setItem('user', email);
    setLoading(true);
    try {
      await Auth.signUp({
        username: email,
        password: confirmPassword,
        attributes: {
          name,
          email,
          gender: value,
          birthdate: birthdate,
          phone_number: phone
        },
      });
      localStorage.setItem('email', email);
      history.push("/mfa");
    } catch (error) {
      setErrorMSG("פרטים לא נכונים");
      setMassageFlag(true)
    }
    setLoading(false);
  };

  return (
    <div className="formBody">
        <div className="formsLogin">
            <img src={dronaje} className="form-logo" alt="logo"/>
            <h1 style={{ fontSize: "22px", fontWeight: 800 }}> Sign Up Form</h1>
            {massageFlag && (<h3 style={{color:"red", textAlign:"center"}}>{errorMSG}</h3>)}
            <form
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
            onSubmit={validationSubmit}
            >
            <Field label="Name" onChange={handleName} className="inFrom"/>
            <Field label="Email" onChange={handleEmail} type="email" className="inFrom"/>
            <Field label="+972507897551" onChange={handlePhone} type="tel" className="inFrom"/>
            {/* <Field label="gender" {...bindGender} type="text" className="inFrom"/> */}
            <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
            <Field label="birthdate" onChange={handleBirthdate} type="date" className="inFrom"/>
            <Field label="Password" type="password" onChange={handlePassword} className="inFrom"/>
            <Field label="Confirm Password" type="password" onChange={handleConfirmPassword} className="inFrom"/>
            <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                disabled={loading}
                
            >
                {loading && <CircularProgress size={20} style={{ marginRight: 20 }} />}
                Sign Up
            </Button>
            <DLink to="/login">go to login &rarr;</DLink>
            </form>
        </div>
    </div>
  );
};

export default Signup;