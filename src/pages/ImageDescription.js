import React, {useState, useEffect} from 'react';
import Header from "../components/header";
import buy from '../static/buy.png';
import temp from '../static/temp.png';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import {
    EmailShareButton,
    WhatsappShareButton
} from "react-share";



import {
    EmailIcon,
    WhatsappIcon
} from "react-share";


const USERNAME ="";
const emailSubject ="Media shered from dronaje.com";
const emailBody = "The dronaje.com user"+ USERNAME+ " \nhas shared with you this link to media file : \n\n "





const ImageDescription = () => {
    const [object, setObject] = useState({});
    const [type, setType] = useState(localStorage.getItem('type'));
    const [objectID, setObjectID] = useState('');
    const [expanded, setExpanded] = React.useState(false);
	const [pictureId, setPictureId] = useState(localStorage.getItem('picture'));
	const [videoId, setVideoId] = useState(localStorage.getItem('video'));
	const [userId, setUserId] = useState(localStorage.getItem('userId'));
    const [imageData, setImageData] = useState();
    const [videoData, setVideoData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [shortURL, setShortURL] = useState('');
    const [longURL, setlongURL] = useState('');
    const [sherButtonStyle, setSherButtonStyle] = useState({display:"none"});
    const [sherMainButtonStyle,setSherMainButtonStyle] = useState({display:"inline",backgroundColor:"aliceblue"});


    const classes = useStyles();

    useEffect(() => {
        if(type === 'picture'){
            setObjectID(localStorage.getItem('picture'));
                fetch(`https://rzlmwxfkse.execute-api.eu-west-1.amazonaws.com/media/image?userID=${userId}&imageID=${pictureId}`,{  
                method: 'GET',
                headers: {
                    "x-api-key" : "D88N0sZS9o7VDe3pHyibA24YSiaLxcpF9ZYBmj5H",
                    Accept: '*/*',
                    "Content-Type" : 'application/json'
                }, mode: 'cors'})
                .then((res) => res.json())
                .then((body) => {
                    setImageData(body.body);
                    setlongURL(body.body.url);
                    setIsLoading(true);
            });
        }
        else{
            fetch(`https://a1v4ubfe9f.execute-api.eu-west-1.amazonaws.com/media/video?userID=${userId}&videoID=${videoId}`,{  
                method: 'GET',
                 headers: {
                    "x-api-key" : "KhNSr9NzTa100rDFqyWQ77Vd2gDwRiqX4CvwgGyt",
                    "Accept": '*/*',
                     "Content-Type" : 'application/json'
                }, mode: 'cors'})
                .then((res) => res.json())
                .then((body) => {
                    setVideoData(body)
                    console.log(body.body.url);
                    setlongURL(body.body.url);
                    setIsLoading(true);
                }).catch((error)=>{
                console.log(error);
            });
        }
        }, []);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    if(!isLoading){
        return(
            <div>
                Loading...
            </div>
        )
    }



    function createShortUrl() {
        const requestOptions = {
            method: 'POST',
            headers:
            {
              "x-api-key": "TUIlOHUyE281a3xaws73i1flTFDVFnaBaMnAkWWb",
              Accept: '*/*'
            },
            mode: 'cors',
            body: JSON.stringify({long_url:longURL})
          }

      fetch("https://url.dronaje.com/create", requestOptions)
        .then(response => { return response.json() }).then(data => {console.log(data.short_url);setShortURL(data.short_url) }).catch(error => console.log('error============:', error));
          setSherButtonStyle({display:"inline"});
          setSherMainButtonStyle({display:"none"});
    };





    return (
        <div>
            <Header />
            {type === 'picture' && isLoading && <Card className={classes.root}>
                <CardHeader
                    title={imageData.title}
                />
                <CardMedia
                    className={classes.media}
                    image={imageData.url}
                    title={imageData.title}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"left"}}>
                        <label style={{fontWeight:"bold", fontSize:"18px", marginRight:"4px"}}>Description:</label>{imageData.description}<br/>
                        <label style={{fontWeight:"bold", fontSize:"18px", marginRight:"4px"}}>Tags:</label>{imageData.tags}<br/>
                        <label style={{fontWeight:"bold", fontSize:"18px", marginRight:"4px"}}>Location:</label>{imageData.location}<br/>
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                </CardActions>
            </Card>}

            {type==='video' && isLoading && <Card className={classes.root}>
                <CardHeader title={videoData?.title}/>
                <CardMedia
                    autoPlay
                    component="video" src={videoData?.URL} allow="autoPlay"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"left"}}>
                        <label style={{fontWeight:"bold", fontSize:"18px", marginRight:"4px"}}>Description:</label>{videoData.description}<br/>
                        <label style={{fontWeight:"bold", fontSize:"18px", marginRight:"4px"}}>Tags:</label>{videoData.Tag}<br/>
                        <label style={{fontWeight:"bold", fontSize:"18px", marginRight:"4px"}}>Location:</label>{videoData.location}<br/>
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                </CardActions>
            </Card>}

            <button onClick={createShortUrl} style={sherMainButtonStyle}>
            <h1>Share </h1>
               </button>
            <EmailShareButton className="shareButon" style={sherButtonStyle} subject = {emailSubject} body={emailBody}   url={shortURL} > <EmailIcon></EmailIcon></EmailShareButton>
 
          
            <WhatsappShareButton className="shareButon" style={sherButtonStyle}url={shortURL}><WhatsappIcon></WhatsappIcon> </WhatsappShareButton>
        
             <button className="buy-button">
                <img src={buy} className="buy" alt="img2"/>
            </button>
        </div>
    )
}

export default ImageDescription;


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    margin: '0 auto',
    marginBottom: 30,
    marginTop: 50

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));