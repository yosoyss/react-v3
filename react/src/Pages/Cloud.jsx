import '../App.css';
import React, { useEffect } from "react";
// import {Routes, Route, useNavigate} from 'react-router-dom';
import Topheader from "../Components/Topheader";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import Axios from 'axios';

function Cloud() {
    //set var for button , disbale if user is logged in
    const [disable, setDisable] = React.useState(true);

    //set variable for backend response data
    const [alertMsg, setAlertMsg] = React.useState("");

    // set file or file name
    const [file, setFile] = React.useState(null);
    const [fileName, setFileName] = React.useState(null);

    //this function will send request to upload the file
    const submit = (e) => {

        //create form data to upload
        const formData = new FormData();
        formData.append("file", file);
        formData.append("filename", fileName);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        //api for upload file in server
        Axios.post("http://localhost:3001/upload", formData, config).then((response) => {
            // console.log("ok")

            // check if file exist
            if (response.data.fileExist === true) {
                setAlertMsg(response.data.message)
            }
            else{
                setAlertMsg(response.data.message)
            }
        })
    }

    //this function will get files from input
    const preview = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    }

    useEffect(() => {

        Axios.get("http://localhost:3001/login").then((response) => {
            try {
                if (response.data.loggedIn === true) {
                    setDisable(false);
                } else {
                    setDisable(true);
                    setAlertMsg("You have to logged in first to upload any file!")
                }
            } catch (err) {
                console.log(err)
            }
        })

    }, [])

    return (
        //  main container of body
        <>
            <Topheader />
            <Header />
            {/* main webpage of cloud div */}
            <div id="uploadDataContainer">
                {/* cloud section page where all the data located*/}
                <div className="uploadDataPage">

                    {/* header of the page */}
                    <div className="uploadDataTitle">Upload Files</div>

                    {/* form button section */}
                    <div className="uploadBtnSection">
                        {/* <form enctype="multipart/form-data"> */}
                            <label className="label">
                                <input type="file" name="file" className="input" id="upload" onChange={preview} />
                                  Select File
                            </label>
                            <button type="submit" id="upload" onClick={submit} disabled={disable}>Upload</button>
                        {/* </form> */}
                    </div>

                    {/* print msg from backend file */}
                    {alertMsg ? alertMsg : ""}
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

export default Cloud;