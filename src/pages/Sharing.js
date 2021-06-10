import React from 'react';
import Header from "../components/header";
import send from '../static/send.png';

const Sharing = () => {
    return (
        <body>
            <Header />
            <div className="forms">
                <h1 className="sharingTitel">Sharing is caring!</h1>
                    <form>
                        <input type="text" placeholder="Sending to: (Email address)"></input>
                        <input type="text" placeholder="Some words.."></input>
                        {/* Change to select */}
                        <input type="text" placeholder="My pictures"></input> 
                        <button className="form-button" type="submit" onClick=""><img src={send} className="send" alt="logo"/></button>
                    </form>
            </div>
        </body>
    )
}

export default Sharing;