import React, { useEffect, useState } from 'react';
import Header from "../components/header";
import dronaje from '../static/dronaje.png';
import temp from '../static/temp.png';
import USERS_DATA  from '../temp/data';
import ImageDescription from './ImageDescription';


const HomePage = (props) =>{
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetch(`https://a1v4ubfe9f.execute-api.eu-west-1.amazonaws.com/v1?username=dudi`)
          .then((res) => res.json())
          .then((body) => {
            setUserData(body);
            console.log(body);
          });
      }, []);

    console.log(USERS_DATA);


    return(
        <body>
        <Header />
            {USERS_DATA? (
                <div className="photos"> 
                    {USERS_DATA.map((data) => (
                        <div >
                            <button style={{
                                backgroundImage: `url(${data.imageUrl})`, 
                                height:130, 
                                width:140,
                                backgroundRepeat: "no-repeat"
                            }} 
                                className="temp"
                                //TODO: need to fix it. move to ImageDescription page
                                // onClick={() => {
                                //     <ImageDescription data={data}/> 
                                // }}
                            />
                            {/* <img src={data.imageUrl} className="temp" /> */}
                            {/* <ImageDescription data={data}/> */}

                            <button className="delete" onclick={() => {}}>X</button>
                        </div>
                    ))}
                </div>
                
            ): (
                <div>
                    No images 
                </div>
            )}      
        </body>
    )
}

export default HomePage;

