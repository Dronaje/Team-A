import React, { useState } from 'react';
import Header from "../components/header";
import dronaje from '../static/dronaje.png';
import temp from '../static/temp.png';
import USERS_DATA from '../temp/data';
import ImageDescription from './ImageDescription';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Input from '@material-ui/core/Input';

const VideoForm = () => {
    const [userID, setUserID] = useState(localStorage.getItem('user'));
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [tag, setTag] = useState('');
    const [description, setDescription] = useState('');
    const [massageFlag, setMassageFlag] = React.useState(false);
    const classes = useStyles();



    const videoFormHandler = async (e) => {
        let errors = {};
        let formIsValid = true;


        const body = {
            userID: userID,
            title: title,
            location: location,
            description: description,
            date: date,
            tag: tag,
            file: e.target.file.files[0]
        }
        const url = 'https://a1v4ubfe9f.execute-api.eu-west-1.amazonaws.com/media/video'

        console.log(body);
        if (body.title === '') {formIsValid = false;}
        if (body.location === '') {formIsValid = false;}
        if (body.date === '') {formIsValid = false;}
        if (body.tag === '') {formIsValid = false;}
        if (body.description === '') {formIsValid = false;}
        if (body.file === undefined) {formIsValid = false;}

        if (!formIsValid) { alert("Form has errors.") }
        else {
            try {
                fetch(url,
                    {
                        method: 'POST',
                        headers: {
                            Accept: '*/*',
                        },
                        isBase64Encoded: 'True',
                        mode: 'cors',
                        body: JSON.stringify(body),

                    })
                    .then(res => res.json())
                    .then((res) => {
                        console.log("RESPONSEEE", res);
                        fetch(res.Url, {
                            headers: {
                                "Content-Type": body.file.type
                            },
                            method: 'PUT',
                            mode: 'cors',
                            body: body.file
                        }
                        )
                            .then((res) => window.location.replace('/homepage'))
                            .catch((err) => console.log(err))
                    })
            }
            catch (error) {
                console.log(error);
            }
            e.preventDefault();
        }
    }

    const handleLocation = (event) => {
        const { target: { name, value } } = event;
        setLocation(() => (value))
    }

    const handleTitle = (event) => {
        const { target: { name, value } } = event;
        setTitle(() => (value))
    }

    const handleDate = (event) => {
        const { target: { name, value } } = event;
        setDate(() => (value))
    }

    const handleTag = (event) => {
        const { target: { name, value } } = event;
        setTag(() => (value))
    }

    const handleDescription = (event) => {
        const { target: { name, value } } = event;
        setDescription(() => (value))
    }

    return (
        <div>
            <Header />
            <div className="formBody">
                <div className="formsLogin">
                    <img src={dronaje} className="form-logo" alt="logo" />
                    {massageFlag && (<h3 style={{ color: "red", textAlign: "center" }}>Details are missing</h3>)}
                    <form style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                        onSubmit={videoFormHandler}
                    >
                        <h1 style={{ fontSize: "22px", fontWeight: 800 }}>Video Form</h1>
                        <TextField name="title" label="Title" onChange={handleTitle} />
                        <TextField name="location" label="Location" onChange={handleLocation} />
                        <TextField name="date" type="date" label="Date" onChange={handleDate} />
                        <TextField name="tag" label="#Tag" onChange={handleTag} />
                        <TextField name="description" label="Description" onChange={handleDescription} />
                        <Input name="file" type="file" hidden />
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

export default VideoForm;

