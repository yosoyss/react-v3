import '../App.css';
import React from "react";
// import {useNavigate} from 'react-router-dom';
import Topheader from "../Components/Topheader";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
// import Axios from 'axios';

function AboutUS() {

    // const navigate = useNavigate();

    // useEffect(() => {

    //     Axios.get("http://localhost:3001/login").then((response) => {
    //         try {
    //             if (response.data.loggedIn === true) {
    //                 console.log("ok")
    //             } else {
    //                 navigate("/login");
    //                 // alert("You have to logged in first!");
    //             }
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     })
    // }, [navigate])

    return (
        //  main container of body
        <>
            <Topheader />
            <Header />
            {/* main webpage of profile div */}
            <div id="AboutPageContainer">
                {/* contact us section page where all the data located*/}
                <div className="aboutPage">
                    <div className="AboutTitle">About Us</div>

                    {/* about us  */}
                    <div className="aboutPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lacinia sapien. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue, nisl et placerat dictum, augue risus efficitur ligula, non lobortis libero lectus sed ante. Nullam eros eros, fringilla sed viverra ac, laoreet at mi. Aliquam ac justo non orci elementum congue laoreet sit amet eros. Ut egestas massa nisi, in tincidunt felis porta vel. Maecenas vulputate tempor volutpat. Sed sed eleifend elit. Donec et volutpat turpis. Integer sollicitudin, elit ac sagittis aliquet, arcu erat interdum elit, non scelerisque purus elit sit amet dui.

Vestibulum tellus erat, hendrerit nec consequat et, varius vulputate enim. Sed iaculis, ex at tincidunt pretium, turpis neque pulvinar tortor, sit amet venenatis ex nibh vitae justo. Phasellus lacus sem, placerat at feugiat ac, tempor nec erat. Nullam non euismod mauris. Nullam efficitur nec lectus non tristique. Cras ac pharetra ligula, ut vulputate massa. Cras vitae purus ut nisl scelerisque mollis quis in velit. Praesent ut eros eu sem auctor efficitur in eu mauris. Aenean suscipit dignissim vestibulum. Donec a rutrum lacus, sed vestibulum eros. Suspendisse a libero et neque euismod tincidunt. Sed finibus a libero id ullamcorper. Sed in faucibus magna, a volutpat est. Curabitur sodales sapien</div>
                    <div className="AboutFooter">
                        <div style={{ fontSize: "24px", textAlign: "right" }}>Foxxxxx</div>
                        <div style={{ fontSize: "15px", textAlign: "right" }}>Student</div>
                    </div>
                </div>
                {/* div for sidebar */}
                <div>
                    <Sidebar />
                </div>
            </div>
            <Footer />
        </>

    );
}

export default AboutUS;