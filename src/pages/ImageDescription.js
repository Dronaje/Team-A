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

  


const ImageDescription = () => {
    const [object, setObject] = useState({});
    const [type, setType] = useState(localStorage.getItem('type'));
    const [objectID, setObjectID] = useState('');
    const [expanded, setExpanded] = React.useState(false);
    
    const classes = useStyles();


    useEffect(() => {
        if(type === 'picture'){
            setObjectID(localStorage.getItem('picture'));
                // fetch(`https://rzlmwxfkse.execute-api.eu-west-1.amazonaws.com/media/image?userID=guy&imageID=${objectID}`,{  
                fetch(`https://rzlmwxfkse.execute-api.eu-west-1.amazonaws.com/media/image?userID=guy&imageID=422ee2eb`,{  
                method: 'GET',
                headers: {
                    "x-api-key" : "D88N0sZS9o7VDe3pHyibA24YSiaLxcpF9ZYBmj5H",
                    Accept: '*/*',
                    "Content-Type" : 'application/json'
                }, mode: 'cors'})
                .then((res) => res.json())
                .then((body) => {;
                    const jes = JSON.parse(body.body)
                    setObject(jes);
                    console.log(jes);
            });
        }
        else{
            fetch('https://a1v4ubfe9f.execute-api.eu-west-1.amazonaws.com/media/video?userID=ariellunen@gmail.com&videoID=1623511003181',{  
                method: 'GET',
                 headers: {
                    "x-api-key" : "KhNSr9NzTa100rDFqyWQ77Vd2gDwRiqX4CvwgGyt",
                    "Accept": '*/*',
                     "Content-Type" : 'application/json'
                }, mode: 'cors'})
          .then((res) => res.json())
          .then((body) => {
            console.log(body);
            setObject(body);
        }).catch((error)=>{
            console.log(error);
        });
        }
        }, []);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };




    return (
        <div>
            <Header />
            {type==='picture' && <Card className={classes.root}>
                <CardHeader
                    title={object.title}
                />
                <CardMedia
                    className={classes.media}
                    image={object.url}
                    title={object.title}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"left"}}>
                        <label style={{fontWeight:"bold", fontSize:"18px", marginRight:"4px"}}>Description:</label>{object.description}<br/>
                        <label style={{fontWeight:"bold", fontSize:"18px", marginRight:"4px"}}>Tags:</label>{object.tags}<br/>
                        <label style={{fontWeight:"bold", fontSize:"18px", marginRight:"4px"}}>Location:</label>{object.location}<br/>
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                </CardActions>
            </Card>}

                {type==='video' && <Card className={classes.root}>
                <CardHeader
                    title={object.title}
                />
                <CardMedia
                    autoPlay
                    component="video" src={object.URL} allow="autoPlay"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"left"}}>
                        <label style={{fontWeight:"bold", fontSize:"18px", marginRight:"4px"}}>Description:</label>{object.description}<br/>
                        <label style={{fontWeight:"bold", fontSize:"18px", marginRight:"4px"}}>Tags:</label>{object.Tag}<br/>
                        <label style={{fontWeight:"bold", fontSize:"18px", marginRight:"4px"}}>Location:</label>{object.location}<br/>
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                </CardActions>
            </Card>}
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