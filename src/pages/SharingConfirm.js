import React from 'react';
import Header from "../components/header";
import dronaje from '../static/dronaje.png';

const HomePage = () =>{
    return(
        <body>
            <Header />      
            <div className="photos">
                <img src={dronaje} className="big-logo" />
                <h1>Great! :)</h1>
                <h3>now (dinami!) will enjoy of your photo!</h3>
            </div>
        </body>
    )
}

export default HomePage;