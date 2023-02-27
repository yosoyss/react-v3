import '../App.css';
import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import Logout from "../Components/Logout";
import Axios from 'axios';

function Topheader() {
    const [logName, setLogName] = React.useState("");

    // set variable for toggle login/logout button 
    const [button, setButton] = React.useState(false);
    Axios.defaults.withCredentials = true;

    const logoutBtn = <Logout />;

    useEffect(() => {

        Axios.get("http://localhost:3001/login").then((response) => {
            try {
                // check if user is logged in
                if (response.data.loggedIn === true) {

                    // get login username
                    setLogName(response.data.user[0].name)
                    setButton(true)
                } else {
                    setButton(false)
                }
            } catch (err) {
                console.log(err)
            }
        })
    }, [])

    return (
        //  main container of body
        <div id="top-header">
            <div className="topHeaderElements">
                <div className="welcomeTxt"><Link style={{ textDecoration: "none", color: "white" }} to="/profile">{logName ? `Welcome ${logName}` : " "}</Link> </div>

                {/* toggle button accoding to user 's login/logout */}
                {button ? logoutBtn : <Link style={{ textDecoration: "none", color: "white" }} to="/login">Login</Link>}
            </div>
        </div>

    );
}

export default Topheader;