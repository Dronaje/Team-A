import React from 'react';
import Header from "../components/header";
import dronaje from '../static/dronaje.png';


const HomePage = () =>{
    return(
        <body>
            <Header />      
            <div className="photos">

            </div>
            <button className="new-button" onClick="">
                New
                <img src={dronaje} className="small-logo" />
            </button>
        </body>
    )
}

export default HomePage;