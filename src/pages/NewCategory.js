import React from 'react';
import Header from "../components/header";
import add from '../static/add.png';

const NewCategory = () => {
    return (
        <body>
            <Header />
            <div className="forms">
                <form>
                    {/* Change to select */}
                    <input type="text" placeholder="Choose a photo" className="endPage"></input>
                    <input type="text" placeholder="Category" className="endPage"></input>
                    <input type="text" placeholder="Description.." className="endPage"></input> 
                    <button className="form-button" type="submit" onClick=""><img src={add} className="add" alt="logo"/></button>
                </form>
            </div>
        </body>
    )
}

export default NewCategory;