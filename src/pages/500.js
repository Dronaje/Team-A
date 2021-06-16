import React from 'react';
import error404 from '../static/500.gif';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const Error500Page = () =>{
    const [userID, setSetUserID] = React.useState(localStorage.getItem('user'));
    const [userLogerdInFlag, setMassageFlag] = React.useState(false);
    React.useEffect(() => {
        (userID !== '')? setMassageFlag(false): setMassageFlag(true);
    }, []);


    return(
        <div style={{backgroundColor:'white' , position: 'absolute', height: '110%', width:'100%'}}>
            <h3 style={{color:"blue", padding:0}}>Sorry , an unexpected failure is occurred</h3>
            <img src={error404} alt="404" />
            <ButtonGroup disableElevation variant="contained" color="primary">
                {userLogerdInFlag&&<Button onClick={ ()=>{window.location.replace('/auth')}}>Sign In to the system</Button>}
                {!userLogerdInFlag&&<Button onClick={ ()=>{window.location.replace('/homepage')}}>Back To Homepage</Button>}
            </ButtonGroup>
        </div>
    )
}

export default Error500Page;