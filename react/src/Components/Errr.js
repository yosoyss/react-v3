import '../App.css';
import React from "react";
// import {Routes, Route, useNavigate} from 'react-router-dom';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Topheader from '../Components/Topheader';

function ErrorPage() {
    // const [active, setActive] = useState("login")

    return (
        //  main container of body
        <>
        <Topheader/>
        <Header/>
        <div id="errPage">
           <div id="errPageTxt">Error 404</div>  
            <div>Page Not Found!!!</div>            
        </div>
        <Footer/>
        </>
    );
}

export default ErrorPage;