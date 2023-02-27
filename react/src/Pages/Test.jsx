import '../App.css';
import React from "react";
// import {Routes, Route, useNavigate} from 'react-router-dom';
import Topheader from "../Components/Topheader";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import { useEffect } from 'react';

const TextWithimg = () => {

    //first cvs of html
    const cvs = React.useRef(null);
    const ctx = React.useRef(null);

    //second cvs of html
    const cvs1 = React.useRef(null);
    const ctx1 = React.useRef(null);

    //set textarea variable
    const [message, setMessage] = React.useState(null);

    //set input type file variable
    const [image, setImage] = React.useState("");

    var text;

    const gernate = () => {
        //check if text is null 
        if (message === null) {
            alert("Please write something");
        }
        // else if(!src){
        //     alert("Please insert image.");
        // }
        else {
            ctx.current.drawImage(cvs1.current, 0, 0);

            var download = document.getElementById("download");
            var d = cvs.current.toDataURL("image/jpg").replace("image/png", "image/octet-stream");
            download.setAttribute("href", d);

            ctx.current.clearRect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height)
            ctx1.current.clearRect(0, 0, ctx1.current.canvas.width, ctx1.current.canvas.height);
        }
    }

    const preview = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        } else {
            setImage(null);
        }

    }

    const drawText = (e) => {
        setMessage(e.target.value);
        text = e.target.value;
        var textsplit = text.split(" ");
        var line = '';
        ctx1.current.clearRect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height);
        ctx1.current.font = "20px Arial";

        var maxWidth = cvs.current.width - 5;
        var lineHeight = 24;
        var x = 10;
        var y = 30;

        for (var i = 0; i < textsplit.length; i++) {
            var newtxt = line + textsplit[i] + ' ';
            var metrics = ctx1.current.measureText(newtxt);
            var testWidth = metrics.width;
            if (testWidth > maxWidth && i > 0) {
                ctx1.current.fillText(line, x, y);
                line = textsplit[i] + ' ';
                y += lineHeight;
            }
            else {
                line = newtxt;
            }
        }
        ctx1.current.fillText(line, x, y);

    }

    const clear = () => {
        ctx1.current.clearRect(0, 0, ctx1.current.canvas.width, ctx1.current.canvas.height);
        document.getElementById("txtarea2").value = "";

    }

    useEffect(() => {
        if (cvs.current) {
            ctx.current = cvs.current.getContext('2d');
        }

        if (cvs1.current) {
            ctx1.current = cvs1.current.getContext('2d');
        }

        var img = new Image();
        var src = image;

        img.onload = () => {
            ctx.current.crossOrigin = "Anonymous";
            ctx.current.drawImage(img, 0, 0, cvs.current.width, cvs.current.height);
        }
        img.src = src;

    }, [image]);

    //render() {
    return (
        //  main container of body
        <>
            <Topheader />
            <Header />
            {/* main webpage of imgtext container*/}
            <div id="imgtxtPageContainer">

                {/* contact us page where all the inputs */}
                <div className="imgtxtPageForm">
                    <div className="imgtxtTitle">Image with text</div>

                    <div className="contforinp">
                        <div id="cvs">
                            {/* canvas for image */}
                            <canvas ref={cvs} width="200" height="200"></canvas>
                            {/* canvas for overwrite text */}
                            <canvas ref={cvs1} width="250" height="200"></canvas>
                        </div>
                        <textarea id="txtarea2" maxlength="100" name="message" value={message} onChange={drawText} placeholder="Write your text here..."></textarea>

                    </div>

                    <div className="buttonsction">
                        <label className="label">
                            <input type="file" accept="image/*" className="input" id="upload" onChange={preview} />
                                  Select Image
                            </label>

                        <button onClick={clear}>Reset</button>
                        {/* <button onClick={this.drawText}>Convert</button> */}

                        <a id="download" href="/#" onClick={gernate} download="demo.png">Download</a>

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
    // }
}

export default TextWithimg;