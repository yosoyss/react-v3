import '../App.css';
import React from "react";
// import {Routes, Route, useNavigate} from 'react-router-dom';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Topheader from '../Components/Topheader';

function Home() {

    return (
        //  main container of body
        <>
        <Topheader/>
        <Header/>
        <div id="homePageContainer">  
           <div className="homeMainPage">
            <img src="https://media.istockphoto.com/id/1401460590/photo/businessman-working-on-laptop-with-document-management-icon.jpg?b=1&s=170667a&w=0&k=20&c=4H439mT0eE_ltwbhV6MNmDNnkyzIVM-D1DQ3qvbI6eE=" alt=""/>          
         
            <div id="webFeatures">
                
            </div>
          </div>
         </div>
         <Footer/>
    
        </> 
    );
}

export default Home;