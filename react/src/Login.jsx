import './App.css';
import React from "react";
import { useNavigate } from 'react-router-dom';
// import Register from "./Register";
// import Home from "./Pages/Home";
import Axios from 'axios';

function Login() {
  //set variables of username and userpassword using react hook
  const [name, setName] = React.useState("");
  const [pass, setPass] = React.useState("");

  //alert msg
  const [msg, setMsg] = React.useState("");

  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;

  const username = (e) => {
    setName(e.target.value);
  }

  const password = (e) => {
    setPass(e.target.value);
  }

  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login", {
      name: name,
      pass: pass
    }).then(res => {
      if (res.data.message) {
        setMsg(res.data.message)
      } else {
        navigate("/");
      }

    })

  }

  return (
    //  main container of body
    <div id="container">
      {/* second container for  */}
      <div id="form-container">
        <p>Login</p>
        {/* <form> */}
        {/* div for input box */}
        <div className="input-box">
          <input type="text" name="name" onChange={username} placeholder="Username" />
          {/* <input type="email" name="email" placeholder="Email" /> */}
          <input type="password" name="password" onChange={password} placeholder="Password" />
          <div style={{ marginTop: "7px", color: "red" }}>{msg ? msg : "‎ "}</div>
        </div>

        {/* style for button section */}
        <div id="form-button">
          <div onClick={() => { navigate("/register") }}>Create Account</div>
          <button onClick={login}>Login</button>
        </div>
        {/* </form> */}
      </div>
    </div>

  );

}

export default Login;
