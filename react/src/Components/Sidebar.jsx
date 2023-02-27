import '../App.css';
import React from "react";
import { Link } from 'react-router-dom';

function Sidebar() {

    return (
        //  main container of body
        <>
            <div id="sidebar-container">
                <div style={{ fontSize: "22px" }}>Tools:</div>
                <Link className="link" to="/upload"><div>Cloud store</div></Link>
                <Link className="link" to="/texttopdf"><div>Text Pdf generator</div></Link>
                <Link className="link" to="/imgtxt"> <div>Edit image</div></Link>
                <Link className="link" to="/imgtxt"><div>komedi</div></Link>

            </div>
        </>
    );
}

export default Sidebar;