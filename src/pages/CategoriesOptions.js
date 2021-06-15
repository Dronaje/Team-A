import React, { useEffect, useState } from 'react';
import Header from "../components/header";
import dronaje from '../static/dronaje.png';
import temp from '../static/temp.png';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';


const CategoriesOptions = () => {
    const [userData, setUserData] = useState([]);
    const [search, setSearch] = useState();
    const [filterImageData, setImageFilterData] = useState();
    const [filterVideoData, setVideoFilterData] = useState();
    const [userId, setUserID] = useState(localStorage.getItem('user'));
    const [imageData, setImageData] = useState();
    const [videoData, setVideoData] = useState();

    const classes = useStyles();

    useEffect(() => {
        fetch(`https://a1v4ubfe9f.execute-api.eu-west-1.amazonaws.com/media/video/thumbnails?userID=${userId}`, {
            method: 'GET',
            headers: {
                "x-api-key": "dzmYMhUWWF4m9hZcAvol7aW1LRATlTkL4NnJdh3i",
                Accept: '*/*',
                "Content-Type": 'application/json'
            }, mode: 'cors'
        })
            .then((res) => res.json())
            .then((body) => {
                setVideoData(body);
            });

        fetch(`https://rzlmwxfkse.execute-api.eu-west-1.amazonaws.com/media/image/thumbnails?userID=${userId}`, {
            method: 'GET',
            headers: {
                Accept: '*/*',
                "x-api-key": "D88N0sZS9o7VDe3pHyibA24YSiaLxcpF9ZYBmj5H",
                "Content-Type": 'application/json'
            }, mode: 'cors'
        })
            .then((res) => res.json())
            .then((body) => {
                setImageData(body.body);
            });

    }, []);

    console.log("Data", userData);
    console.log("video data", videoData);
    console.log("image data", imageData);

    console.log("search", search);

    const handelSearch = (event) => {
        setSearch(event);
        searchTags(event);
    }

    const searchTags = async (text) => {
        setVideoFilterData(videoData.filter(data => (data.Tag?.toLowerCase()).includes(text?.toLowerCase())));
        setImageFilterData(imageData.filter(data => (data.tags?.toLowerCase()).includes(text?.toLowerCase())));
        console.log("filter function", videoData.filter(data => (data.Tag?.toLowerCase()).includes(search?.toLowerCase())));
    }

    // console.log("filter", filterData);


    return (
        <div>
            <Header />
            <div className={classes.root, "forms"}>
                <input className="frameH1"
                    type="search"
                    placeholder="Search..."
                    onChange={(e) => handelSearch(e.target.value)}
                />
                <GridList cellHeight={180} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    </GridListTile>
                    {(search?.length === 0 || search?.length === undefined) && videoData?.map((video) => (
                        <GridListTile key={video.ID}>
                            <img src={video.URL} alt={video.id} style={{ cursor: "pointer" }} />
                            <GridListTileBar
                                title={video.Tag}
                                actionIcon={
                                    <IconButton aria-label={`info about ${video.Title}`} className={classes.icon} >
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                    {(search?.length === 0 || search?.length === undefined) && imageData?.map((image) => (
                        <GridListTile key={image.ID}>
                            <img src={image.url} alt={image.id} style={{ cursor: "pointer" }} />
                            <GridListTileBar
                                title={image.tags}
                                actionIcon={
                                    <IconButton aria-label={`info about ${image.tags}`} className={classes.icon} >
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                    {search?.length > 0 && filterVideoData.map((video) => (
                        <GridListTile key={video.ID}>
                            <img src={video.URL} alt={video.id} style={{ cursor: "pointer" }} />
                            <GridListTileBar
                                title={video.Tag}
                                actionIcon={
                                    <IconButton aria-label={`info about ${video.Tag}`} className={classes.icon} >
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                    {search?.length > 0 && filterImageData.map((image) => (
                        <GridListTile key={image.ID}>
                            <img src={image.url} alt={image.id} style={{ cursor: "pointer" }} />
                            <GridListTileBar
                                title={image.tags}
                                actionIcon={
                                    <IconButton aria-label={`info about ${image.tags}`} className={classes.icon} >
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                    {(search?.length !== 0 && search?.length !== undefined) && filterVideoData.length === 0 && filterImageData.length === 0 && <div>No results found</div>}
                </GridList>
            </div>
        </div>
    )
}

export default CategoriesOptions;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));