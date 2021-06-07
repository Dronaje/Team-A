import React from 'react';
import Header from "../components/header";
import dronaje from '../static/dronaje.png';
import temp from '../static/temp.png';

const HomePage = () =>{
    return(
        <body>
            <Header />      
            <div className="photos"> 
                {/* לטעון תמונות בצורה דינמית - דוד */}
                <div >
                    <img src={temp} className="temp" />
                    <button className="delete" onclick="">X</button>
                </div>
                <div>
                    <img src={temp} className="temp" />
                    <button className="delete">X</button>
                </div>
                <div>
                    <img src={temp} className="temp" />
                    <button className="delete">X</button>
                </div>
                <div>
                    <img src={temp} className="temp" />
                    <button className="delete">X</button>
                </div>
                <div>
                    <img src={temp} className="temp" />
                    <button className="delete">X</button>
                </div>
                <div>
                    <img src={temp} className="temp" />
                    <button className="delete">X</button>
                </div>
                <div>
                    <img src={temp} className="temp" />
                    <button className="delete">X</button>
                </div>
            </div>
            <button className="new-button" onClick="">
                New
                <img src={dronaje} className="small-logo" />
            </button>
        </body>
    )
}

export default HomePage;