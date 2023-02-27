import '../App.css';
import React from "react";
import Topheader from "../Components/Topheader";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import { jsPDF } from "jspdf";

const Texttopdf = () => {
  //get textarea data using react hook
  const data = React.useRef(null);

  //create pdf and then save
  const gernate = async () => {
    //assign textarea data from react to txtdata variable 
    var txtdata = data.current.value;

    //if textarea is empty do this
    if (!txtdata) {
      alert("Write something into box to create pdf.")
    }
    else {
      //create new document
      const doc = new jsPDF({
        orientation: "portrait",
        // unit : "px",
        // format : [300, 400]
      });

      //split text
      var wrap = doc.splitTextToSize(txtdata, 180);
      // var pageHeight = doc.internal.pageSize.height;
      doc.setFontSize("15");
      var yAxis = 10;

      //looping for text wrap and insert/add new page if txt data is greater....
      for (var i = 0; i < wrap.length; i++) {
        //set 
        if (yAxis > 250) {
          yAxis = 15;
          doc.addPage();
        }
        doc.text(wrap[i], 20, yAxis);
        //this will set new line's axis
        yAxis = yAxis + 10;
      }

      //save document
      await doc.save("two-by-four.pdf");
    }
  }

  // render() {
  return (
    //  main container of body
    <>
      <Topheader />
      <Header />
      {/* main page of text pdf generator */}
      <div id="pdfPageContainer">

        {/* text pdf convertor for section page */}
        <div className="pdfPageForm">
          <div>Text pdf Convertor</div>
          <textarea id="txtarea2" ref={data} placeholder="Write your text here..."></textarea>
          <button onClick={gernate}>Generate</button>

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

export default Texttopdf;