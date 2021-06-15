import React, { useEffect, useState } from 'react';
import Header from "../components/header";
import dronaje from '../static/dronaje.png';
import temp from '../static/temp.png';
import USERS_DATA  from '../temp/data';
import ImageDescription from './ImageDescription';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import "../index.css";

const HomePage = () =>{
    const [userData, setUserData] = useState([]);

    const [pictures, setPictures] = useState([]);
    const [videos, setVideos] = useState([]);
    const [filteredPictures, setFilteredPictures] = useState([]);
    const [filteredVideos, setFilteredVideos] = useState([]);
	const [userId, setUserID] = useState(localStorage.getItem('user'));

    const classes = useStyles();

    useEffect(() => {
        fetch(`https://a1v4ubfe9f.execute-api.eu-west-1.amazonaws.com/media/video/thumbnails?userID=${userId}`,{  
            method: 'GET',
                 headers: {
                    "x-api-key" : "vxAjJKbeA81MD0PAMTWMN6Rf5UescNRW6VyvwGkX",
                    "Accept": '/',
                     "Content-Type" : 'application/json'
                }, mode: 'cors'})
          .then((res) => res.json())
          .then((body) => {
            setVideos(body);
            console.log(body);
        }).catch((error)=>{
            window.location.replace('/500');
        });


        fetch(`https://rzlmwxfkse.execute-api.eu-west-1.amazonaws.com/media/image/thumbnails?userID=${userId}`,{  
                     method: 'GET',
                headers: {
                Accept: '/',
                    "x-api-key" : "D88N0sZS9o7VDe3pHyibA24YSiaLxcpF9ZYBmj5H",
                    "Content-Type" : 'application/json'
            }, mode: 'cors'})
        .then((res) => res.json())
        .then((body) => {
        console.log(body);
        // const x = JSON.parse(body.body);
        setPictures(body.body);
        }).catch((error)=>{
          window.location.replace('/500');
        });
      }, []);


    return(
        <div>
        <Header />
         <div className={classes.root}>

      <GridList cellHeight={180} className="photos">
        <GridListTile key="Subheader" cols={2}>
        </GridListTile>
        {pictures.map((picture) => (
          <GridListTile key={picture.key}>
            <img src={picture.url} alt={picture.key} style={{cursor:"pointer"}} 
            onClick={() => {
                localStorage.setItem('type', 'picture');
                localStorage.setItem('picture', picture.key);
                window.location.replace('/description')
            }}/>
            <GridListTileBar
              title={picture.title}
              actionIcon={
                <IconButton aria-label={`info about ${picture.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>  

    <GridList cellHeight={180} className="photos">
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        </GridListTile>
        {videos.map((video) => (
          <GridListTile key={video.ID} className="photo">
            <img src={video.URL} alt={video.id} style={{cursor:"pointer"}} 
            onClick={() => {
                localStorage.setItem('type', 'video');
                localStorage.setItem('video', video.id);
                window.location.replace('/description')
            }}/>
            <GridListTileBar
              title={video.Title}
              actionIcon={
                <IconButton aria-label={`info about ${video.Title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>  
    </div>
    <ButtonGroup disableElevation variant="contained" color="primary" className="new-button">
      <Button onClick={ ()=>{window.location.replace('/videoform')}}>ADD VIDEO</Button>
      <Button onClick={ ()=>{window.location.replace('/imageform')}}>ADD IMAGE</Button>
    </ButtonGroup>
        </div>
    )
}

export default HomePage;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: "#849CF2",
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));