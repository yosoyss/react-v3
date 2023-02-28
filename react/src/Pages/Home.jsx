import '../App.css';
import React from "react";
// import {Routes, Route, useNavigate} from 'react-router-dom';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Topheader from '../Components/Topheader';
import home from "../Images/home.jpg";
function Home() {

    return (
        //  main container of body
        <>
        <Topheader/>
        <Header/>
        <div id="homePageContainer">  
           <div className="homeMainPage">
            <img src={home} alt="" />         
            <div id="webFeatures">
                
            </div>
          </div>
         </div>
         <Footer/>
    
        </> 
    );
}

export default Home;
