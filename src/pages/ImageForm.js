import React, { useState } from 'react';
import Header from "../components/header";
import dronaje from '../static/dronaje.png';
import temp from '../static/temp.png';
import USERS_DATA  from '../temp/data';
import ImageDescription from './ImageDescription';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Input from '@material-ui/core/Input';
const fs = require('fs');

const ImageForm = () =>{
    const [userID, setUserID] = useState(localStorage.getItem('user'));
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [tag, setTag] = useState('');
    const [description, setDescription] = useState('');
    const [massageFlag, setMassageFlag] = React.useState(false);
    const classes = useStyles();


    const videoFormHandler = async (e) => {
        const file = e.target.file.files[0];
        console.log(e.target.file.files[0]);

        const reader = new FileReader();
        reader.onloadend = async () => {
            const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
            console.log(base64String);
            
            let info ={
                title: title,
                location: location,
                description: description,
                tags: tag
            };


            const body = {
            userID,
            imageInfo:info,
            object: base64String
        }

        console.log(body)
         let formIsValid = true;
            console.log(body.imageInfo.title)

            if (body.imageInfo.title === '') { formIsValid = false; }
            if (body.imageInfo.location === '') { formIsValid = false; }
            if (body.imageInfo.tags === '') { formIsValid = false; }
            if (body.imageInfo.description === '') { formIsValid = false; }
            if (reader.readyState === 0) { formIsValid = false; }
            console.log(body)

        const url = 'https://rzlmwxfkse.execute-api.eu-west-1.amazonaws.com/media/image'
         if (!formIsValid) {
                console.log("ffff")
                alert("Form has errors.")
            }
            else{

        try{
             fetch(url,
            {
                 method: 'POST',
                 headers: {
                "x-api-key" : "D88N0sZS9o7VDe3pHyibA24YSiaLxcpF9ZYBmj5H",
                "Content-Type": "application/json",
                "Accept": 'application/json',
             },
                 mode: 'cors',
                 body: JSON.stringify(body),
             })
            .then(res => res.json()).then(res => {
                console.log(res);
                // window.location.replace('/homepage');
            });  
        } catch(error){
            console.log(error);
        }
        }
    };
        reader.readAsDataURL(file);
  e.preventDefault();
}

    const handleLocation = (event) => {
        const { target: { name, value } } = event;
        setLocation(() => ( value ))
    }   

    const handleTitle = (event) => {
        const { target: { name, value } } = event;
        setTitle(() => ( value ))
    }  

    const handleTag = (event) => {
        const { target: { name, value } } = event;
        setTag(() => ( value ))
    }  

    const handleDescription = (event) => {
        const { target: { name, value } } = event;
        setDescription(() => ( value ))
    }  

    return(
        <div>
            <Header />
            <div className="formBody">
                <div className="formsLogin">
                    <img src={dronaje} className="form-logo" alt="logo"/>
                    {massageFlag && (<h3 style={{color:"red", textAlign:"center"}}>חסרים פרטים</h3>)}
                    <form style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                    onSubmit={videoFormHandler}
                    >
                        <h1 style={{ fontSize: "22px", fontWeight: 800 }}>Image Form</h1>
                        <TextField name="title" label="Title" onChange={handleTitle}/>
                        <TextField name="location" label="Location" onChange={handleLocation}/>
                        <TextField name="tag" label="#Tag" onChange={handleTag}/>
                        <TextField name="description" label="Description" onChange={handleDescription}/>
                        <Input name="file"  type="file"  hidden />
                        <Button variant="contained" color="primary" size="large" type="submit"> SUBMIT </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default ImageForm;

