import '../App.css';
import React from "react";
// import {Routes, Route, useNavigate} from 'react-router-dom';

function Footer() {
    // const [active, setActive] = useState("login")
    let d = new Date();

    return (
        //  main container of body
        <div id="footer">
            <div></div>
            <div className="copyrightSection">Copyright &copy; {d.getFullYear()}  All Rights Reserved</div>
        </div>

    );
}

export default Footer;