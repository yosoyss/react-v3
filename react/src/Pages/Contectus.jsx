import '../App.css';
import React from "react";
// import {Routes, Route, useNavigate} from 'react-router-dom';
import Topheader from "../Components/Topheader";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
// import Axios from 'axios';

function Contact() {
    // //set name
    // const [name, setName] = React.useState('');
    // //set email
    // const [email, setEmail] = React.useState('');
    // //set subject
    // const [subject, setSubject] = React.useState('');
    // //set feedback/whatever
    // const [feedBack, setFeedBack] = React.useState('');

    // //function 
    // const submit = (e) => {
    //     Axios.post("http://localhost/3001/feedback", {
    //         name : name,
    //         email : email,
    //         subject : subject,
    //         feedback : feedBack 
    //     }).then(response => {
    //         alert("Feedback sent!");
    //     })
    // }

    return (
        //  main container of body
        <>
        <Topheader/>
        <Header/>
        {/* main webpage of contact us div */}
        <div id="contactUsPageContainer">
           {/* contact us section page where all the input tages, button located*/}
          <div className="cusPageForm">
            <div className="contactUsTitle">Contact Us</div>
           
            <div className="contactUsInputForm">
                <input type = "name" name="name" placeholder="Name" />    
                <input type = "text" name="text" placeholder="Subjet" />    
                <input type = "email" name="email" placeholder="Email" /> 
                <textarea id="txtarea" placeholder="Write your message..." ></textarea>  
                <button >Submit</button>
            </div> 
            </div>          
            {/* div for sidebar */}
             <div>
                 <Sidebar/>
             </div>
         </div>
         <Footer/> 
        </>
 
    );
}

export default Contact;