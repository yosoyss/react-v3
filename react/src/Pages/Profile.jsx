import '../App.css';
import React from "react";
import { useNavigate } from 'react-router-dom';
import Topheader from "../Components/Topheader";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import Axios from 'axios';
import profile from "../Images/profile.jpg";

function Profile() {
    //store username 
    const [logName, setLogName] = React.useState("");

    //set alery messgae from backend response
    const [alert, setAlert] = React.useState("");
    const [data, setData] = React.useState([]);

    //set index for mysql data's rows 
    var index = 1;
    const navigate = useNavigate();

    Axios.defaults.withCredentials = true;

    React.useEffect(() => {

        //fetch login data
        Axios.get("http://localhost:3001/login").then((response) => {
            try {

                // check if user is logged in
                if (response.data.loggedIn === true) {

                    // get login username
                    setLogName(response.data.user[0].name)
                } else {
                    navigate("/login");
                }
            } catch (err) {
                console.log(err)
            }
        })

        //fetch files
        Axios.get("http://localhost:3001/fetch", { credentials: "include" }).then((response) => {
            try {
                // check if user data is exist in database
                if (response.data.isDataExist === true) {
                    setData(response.data.result)
                }
                else {
                    setAlert(response.data.message)
                }
            } catch (err) {
                console.log(err)
            }
        })
    }, [navigate])

    return (
        //  main container of body 
        <>
            <Topheader />
            <Header />
            {/* main webpage of profile div */}
            <div id="profilePageContainer">
                {/* contact us section page where all the data located*/}
                <div className="profilePage">

                    <div className="profileTitle">Profile</div>
                    {/* section of user img and profile info */}
                    <div className="profileInfo">

                        {/* user img demo */}
                        <img src={profile} alt="" />
                        <div className="userinfo">
                            <div>{logName}</div>
                        </div>
                    </div>

                    {/* print all the user data from mysql */}
                    {data ?
                        data.map((val) =>
                            <div id="dataCont" key={val}>
                                <span key={val}>{index++}</span>
                                <span style={{ display: "flex", justifyContent: "flex-start", textAlign: "left" }} key={val}>{val.file_name}</span>
                                <span></span>
                                <a key={val} id="download" target="_blank" rel="noopener noreferrer" href={val.data} style={{ color: "white" }} >Preview</a>
                            </div>
                        ) : " "
                    }

                    {/* alert message from backend file like you havent upload file yet*/}
                    <span style={{ marginTop: "130px", marginBottom: "50px", fontSize: "20px" }}>{alert ? alert : " "}</span>

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

export default Profile;