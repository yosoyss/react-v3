import '../App.css';
import React from "react";
import { Link } from 'react-router-dom';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Topheader from '../Components/Topheader';
import Sidebar from "../Components/Sidebar";

function Tools() {

    return (
        //  main container of body
        <>
            <Topheader />
            <Header />
            <div id="toolsMainPage">
                <div className="tools-container">
                    <p className="headertxt">Tools</p>
                    <div id="tools">
                        <Link className="link" to="/upload"><div>Cloud store</div></Link>
                        <Link className="link" to="/texttopdf"><div>Text Pdf generator</div></Link>
                        <Link className="link" to="/imgtxt"> <div>Edit image</div></Link>
                        <Link className="link" to="/imgtxt"><div>komedi</div></Link>
                    </div>
                </div>
                <Sidebar />
            </div>
            <Footer />

        </>
    );
}

export default Tools;