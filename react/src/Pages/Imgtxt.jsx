import '../App.css';
import React from "react";
// import {Routes, Route, useNavigate} from 'react-router-dom';
import Topheader from "../Components/Topheader";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import { useEffect } from 'react';

const TextWithimg = () => {

    //first cvs of html to draw img
    const cvs = React.useRef(null);
    const ctx = React.useRef(null);

    //second cvs of html to draw text over image
    const cvs1 = React.useRef(null);
    const ctx1 = React.useRef(null);

    //set textarea variable as a data
    const [message, setMessage] = React.useState("");

    //set input type file variable
    const [image, setImage] = React.useState("");

    var [xAxis, setXAxis] = React.useState(20);
    var [yAxis, setYAxis] = React.useState(20);

    var [fontSize, setFontSize] = React.useState(20);

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
            //merge both canvas data 
            ctx.current.drawImage(cvs1.current, 0, 0);

            //download canvas data as image file
            var download = document.getElementById("download");

            // convert canvas to image
            var d = cvs.current.toDataURL("image/jpg").replace("image/png", "image/octet-stream");

            // set attribute in a tag and insert data
            download.setAttribute("href", d);

            //after download the image.. clear canavs
            ctx.current.clearRect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height)
            ctx1.current.clearRect(0, 0, ctx1.current.canvas.width, ctx1.current.canvas.height);
        }
    }

    //this function will load the image on first canavs layer
    const preview = (event) => {
        //check if file is selected
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        } else {  //set image null if image is not selected from input 
            setImage(null);
        }

    }
    const xVal = (e) => {
        setXAxis(e.target.value)
        // alert(xAxis)
    }

    const yVal = (e) => {
        setYAxis(e.target.value)
    }

    const fSize = (e) => {
        setFontSize(e.target.value)
    }
    //draw text on second canvas
    const drawText = (e) => {
        setMessage(e.target.value);
        text = e.target.value;
        //split text into array
        var textsplit = text.split(" ");
        var line = '';

        //clear react
        ctx1.current.clearRect(0, 0, ctx1.current.canvas.width, ctx1.current.canvas.height);
        ctx1.current.font = `${fontSize}px Arial`;

        //set limit for text if text is greater than canvas's width
        var maxWidth = cvs1.current.width - 10;

        //set new line 's yAxis
        var lineHeight = 24;

        // x / y axis of text postion
        var x = 10;
        var y = 20;
        //this loop will wrap the text in new line
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

    //clear the react
    const clear = () => {
        ctx1.current.clearRect(0, 0, ctx1.current.canvas.width, ctx1.current.canvas.height);
        document.getElementById("txtarea2").value = "";

    }

    useEffect(() => {
        if (cvs.current) {
            ctx.current = cvs.current.getContext('2d');
        }

        if (cvs1.current) {

            //live text positon change code here
            ctx1.current = cvs1.current.getContext('2d');
            ctx1.current.font = `${fontSize}px Arial`;

            ctx1.current.clearRect(0, 0, ctx1.current.canvas.width, ctx1.current.canvas.height);
            
            ctx1.current.fillText(message, xAxis, yAxis);
        }

        var img = new Image();
        var src = image;

        img.onload = () => {
            ctx.current.crossOrigin = "Anonymous";
            ctx.current.drawImage(img, 0, 0, cvs.current.width, cvs.current.height);
        }
        img.src = src;

    }, [image, message, xAxis, yAxis, fontSize]);

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

                        {/* canvas tags */}
                        <div id="cvs">
                            {/* canvas for image */}
                            <canvas ref={cvs} width="200" height="200"></canvas>
                            {/* canvas for overwrite text */}
                            <canvas ref={cvs1} width="250" height="200"></canvas>
                        </div>

                        {/* text area for draw text */}
                        <textarea id="txtarea2" maxLength="30" name="message" value={message} onChange={drawText} placeholder="Write your text here..."></textarea>

                    </div>
                    {/* X and Y coordinate Section */}
                    <div className="inputsction">
                        <span>X : </span>
                        <input type="number"  placeholder="X" value={xAxis} onChange={xVal} />
                        <span>Y : </span>
                        <input type="number" placeholder="y" value={yAxis} onChange={yVal} />
                        <span>Font Size : </span>
                        <input type="number" placeholder="font-size" value={fontSize} onChange={fSize} />
                    </div> 
                    {/* button section  */}
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
