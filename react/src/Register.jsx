import './App.css';
import Axios from 'axios';
import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [uname, setUname] = React.useState("");
  const [upass, setUpass] = React.useState("");
  const [uemail, setUemail] = React.useState("");
  const [alertMsg, setAlertMsg] = React.useState("");

  const navigate = useNavigate();

  const registerAcc = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/register", {
      name: uname,
      email: uemail,
      pass: upass
    }).then(res => {
      if (res.data.registered === true) {
        setAlertMsg(res.data.message)
      } else {
        navigate("/login");
      }
    })
  }

  return (
    //  main container of body
    <div id="reg-container">
      {/* second container for  */}
      <div id="reg-form-container">
        <form>
          <p>Register</p>
          {/* div for input box */}
          <div class="reg-input-box">
            <input type="text" name="name" onChange={(e) => { setUname(e.target.value) }} placeholder="Username" />
            <input type="email" name="email" onChange={(e) => { setUemail(e.target.value) }} placeholder="Email" />
            <input type="password" name="password" onChange={(e) => { setUpass(e.target.value) }} placeholder="Password" />
            <div style={{ marginTop: "7px", color: "red" }}>{alertMsg ? alertMsg : "‎ "}</div>
          </div>

          {/* style for button section */}
          <div id="reg-form-button">
            <div></div>
            <button onClick={registerAcc}>Create</button>
          </div>
        </form>
      </div>
    </div>

  );
}

export default Register;
