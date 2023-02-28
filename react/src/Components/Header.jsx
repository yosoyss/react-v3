import '../App.css';
import React from "react";
import {Link} from 'react-router-dom';

function Header() {

    return (
        //  main container of body
        <div id="header">
            <div className="logo">Trio</div>
            <div className="header-menu">
                <div><Link className="link" to ="/home">Home</Link></div>
                <div><Link className="link" to ="/tools">Tools</Link></div>
                <div><Link className="link" to ="/aboutus">About</Link></div>
                <div><Link className="link" to ="/contact">Contact us</Link></div>
            </div>
        </div>

    );
}

export default Header;
