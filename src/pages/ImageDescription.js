import React from 'react';
import Header from "../components/header";
import buy from '../static/buy.png';
import temp from '../static/temp.png';

const HomePage = () =>{
    return(
        <body>
            <Header />      
            <div className="photos">
                <img src={temp} className="temp1" />
                <span className="description">cbjdvbdkvnbsdjvnc</span>
            </div>
            <button className="buy-button" onClick="">
                <img src={buy} className="buy" />
            </button>
        </body>
    )
}

export default HomePage;