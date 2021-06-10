import React from 'react';
import Header from "../components/header";
import dronaje from '../static/dronaje.png';
import temp from '../static/temp.png';

const CategoriesOptions = () =>{
    return(
        <body>
            <Header />      
            <div className="photos">
                <h1 className="frameH1">(dinami!)</h1>
                <img src={temp} className="temp" alt="img"/>
                <img src={temp} className="temp" alt="img2"/>
                <img src={temp} className="temp" alt="img3"/>
                <img src={temp} className="temp" alt="img4"/>
                <img src={temp} className="temp" alt="img5"/>
                <img src={temp} className="temp" alt="img6"/>
                <img src={temp} className="temp" alt="img7"/>
            </div>
            <button className="new-button" onClick="">
                New
                <img src={dronaje} className="small-logo" alt="logo"/>
            </button>
        </body>
    )
}

export default CategoriesOptions;