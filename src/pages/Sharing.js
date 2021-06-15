import React, {useState, useEffect} from 'react';
import Header from "../components/header";
import send from '../static/send.png';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';




const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const Sharing = () => {
    const [email, setObject] = useState({});
    const [type, setType] = useState(localStorage.getItem('type'));
    const [objectID, setObjectID] = useState('');
    const [age, setAge] = useState('');
    const [buttonType, setButtonType] = useState('video');
    const [pictures, setPictures] = useState([]);
    const [videos, setVideos] = useState([]);

    const classes = useStyles();

     useEffect(async () => {
          await fetch('https://a1v4ubfe9f.execute-api.eu-west-1.amazonaws.com/media/video/thumbnails?userID=daniel.model94@gmail.com',{  
            method: 'GET',
                 headers: {
                    "x-api-key" : "vxAjJKbeA81MD0PAMTWMN6Rf5UescNRW6VyvwGkX",
                    "Accept": '*/*',
                     "Content-Type" : 'application/json'
                }, mode: 'cors'})
          .then((res) => res.json())
          .then((body) => {
            setVideos(body);
            console.log(body);
        }).catch((error)=>{
            console.log(error);
        });


        await fetch('https://rzlmwxfkse.execute-api.eu-west-1.amazonaws.com/media/image/thumbnails?userID=daniel.model94@gmail.com',{  
                method: 'GET',
                headers: {
                Accept: '*/*',
                    "x-api-key" : "D88N0sZS9o7VDe3pHyibA24YSiaLxcpF9ZYBmj5H",
                    "Content-Type" : 'application/json'
            }, mode: 'cors'})
        .then((res) => res.json())
        .then((body) => {
        console.log(body);
        setPictures(body.body);
        });

     },[]);


    const handleChange = (event) => {
        setButtonType(event.target.value);
    };

    const send = () =>{
        if(buttonType==='video'){
            fetch('https://a1v4ubfe9f.execute-api.eu-west-1.amazonaws.com/media/video/share?userID=ariellunen@gmail.com&videoID=1623511003181',{  
            method: 'GET',
                 headers: {
                    "x-api-key" : "KhNSr9NzTa100rDFqyWQ77Vd2gDwRiqX4CvwgGyt",
                    "Accept": '*/*',
                    "Content-Type" : 'application/json'
                }, mode: 'cors'})
            .then((res) => res.json())
            .then((body) => {
                console.log(body);
            }).catch((error)=>{
                console.log(error);
            });
        }
        else{
            fetch('https://rzlmwxfkse.execute-api.eu-west-1.amazonaws.com/media/image/share?userID=guy&imageID=066a5bb9',
             {  method: 'GET',
                headers: {
                    "x-api-key" : "D88N0sZS9o7VDe3pHyibA24YSiaLxcpF9ZYBmj5H",
                    Accept: '*/*',
                    "Content-Type" : 'application/json'
            }, mode: 'cors'})
            .then((res) => res.json())
            .then((body) => {
            console.log(body);
            });
        }
    }
    

    return (
        <body>
            <Header />
            <div className="forms">
                <h1 className="sharingTitel">Sharing is caring!</h1>
                    <form>
                        <input type="email" placeholder="Sending to: (Email address)"></input>.
                        <FormControl component="fieldset">
                            <RadioGroup aria-label="gender" name="gender1" value={buttonType} onChange={handleChange}>
                                <FormControlLabel value="video" control={<Radio />} label="video" />
                                <FormControlLabel value="image" control={<Radio />} label="image" />
                            </RadioGroup>
                        </FormControl>


                        {buttonType==='video'&&<FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">Video</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={age}
                                    onChange={handleChange}
                                    label="video"
                                >
                                    {videos.map((e, key) => {
                                        return <MenuItem key={key} value={e.title}>{e.title}</MenuItem>;
                                    })}
                                </Select>
                            </FormControl>}


                            {buttonType==='image'&&<FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">Image</InputLabel>
                                <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={age}
                                onChange={handleChange}
                                label="image"
                                >
                                {/* {pictures.map((e, key) => {
                                        return <MenuItem key={key} value={e.Title}>{e.Title}</MenuItem>;
                                    })} */}
                                {/* <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem> */}
                                </Select>
                            </FormControl>}

                        <button className="form-button" type="submit" onClick=""><img src={send} className="send" alt="logo"/></button>
                    </form>
            </div>
        </body>
    )
}

export default Sharing;