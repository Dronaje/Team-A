import React from "react";
import TextField from "@material-ui/core/TextField";
import { styled } from "@material-ui/core/styles";
import { useInput } from "./../utils/forms";
import { Auth } from "aws-amplify";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link, useHistory } from "react-router-dom";
import dronaje from "../static/dronageLight.png";

const Field = styled(TextField)({
  margin: "10px 0",
});

const DLink = styled(Link)({
  margin: "15px 0",
  textAlign: "right",
});

const MFA = () => {
  const [loading, setLoading] = React.useState(false);
  const [errorMSG, setErrorMSG] = React.useState("חסרים פרטים");
  const [massageFlag, setMassageFlag] = React.useState(false);
  const [code, setCode] = React.useState("none");

  const history = useHistory();

  const handleCode = (event) => {
    const {
      target: { name, value },
    } = event;
    setCode(() => value);
  };

  const validationSubmit = (e) => {
    e.preventDefault();
    if (code === "none") {
      setErrorMSG("חסרים פרטים");
      setMassageFlag(true);
    } else {
      handleSubmit();
    }
  };

  const mfaType = {
    SMS: false, // if SMS enabled in your user pool
    TOTP: true, // if TOTP enabled in your user pool
    Optional: true, // if MFA is set to optional in your user pool
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const email = localStorage.getItem("email");

      const user= localStorage.getItem("user");

      await Auth.confirmSignUp(email, code);
      console.log(user);
      // await Auth.confirmSignIn(
      //   user, // Return object from Auth.signIn()
      //   code, // Confirmation code
      //   'SOFTWARE_TOKEN_MFA' // MFA Type e.g. SMS_MFA, SOFTWARE_TOKEN_MFA
      // );
      history.push("/homepage");
    } catch (error) {
      setErrorMSG("קוד לא נכון");
      setMassageFlag(true);
    }
    setLoading(false);
  };

  return (
    <div className="formBody">
      <div className="formsLogin">
        <img src={dronaje} className="form-logo" alt="logo" />
        <h1 style={{ fontSize: "22px", fontWeight: 800 }}>
          Verify Your Account
        </h1>
        {massageFlag && (
          <h3 style={{ color: "red", textAlign: "center" }}>{errorMSG}</h3>
        )}
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          onSubmit={handleSubmit}
        >
          <Field label="Verification Code" onChange={handleCode} />
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            disabled={loading}
          >
            {loading && (
              <CircularProgress size={20} style={{ marginRight: 20 }} />
            )}
            Verify your account
          </Button>
          <DLink to="/signin">Make an account &rarr;</DLink>
        </form>
      </div>
    </div>
  );
};

export default MFA;
