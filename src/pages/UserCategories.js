import React from 'react';
import Header from "../components/header";
import dronaje from '../static/dronaje.png';

const UserCategories = () =>{
    return(
        <body>
            <Header />      
            <div className="photos">
                <h1>My Categories</h1>
                <button className="Categor-button" onClick="">Around the world</button>
                <button className="Categor-button" onClick="">Nature</button>
                <button className="Categor-button" onClick="">Views</button>
            </div>
            <button className="new-button" onClick="">
                New
                <img src={dronaje} className="small-logo" alt="logo"/>
            </button>
        </body>
    )
}

export default UserCategories;