import React from 'react';
import Header from "../components/header";
import dronaje from '../static/dronaje.png';
import temp from '../static/temp.png';

const HomePage = () =>{
    return(
        <body>
            <Header />      
            <div className="photos">
                <h1 className="frameH1">(dinami!)</h1>
                <img src={temp} className="temp" />
                <img src={temp} className="temp" />
                <img src={temp} className="temp" />
                <img src={temp} className="temp" />
                <img src={temp} className="temp" />
                <img src={temp} className="temp" />
                <img src={temp} className="temp" />
            </div>
            <button className="new-button" onClick="">
                New
                <img src={dronaje} className="small-logo" />
            </button>
        </body>
    )
}

export default HomePage;