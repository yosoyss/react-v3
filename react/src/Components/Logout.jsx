import '../App.css';
import React from "react";
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function Logout() {

  const navigate = useNavigate();

  const logot = async () => {
    try {
      Axios.get("http://localhost:3001/logout").then(res => {
        alert(res.data.message);
      })
      navigate("/login");

    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    //  main container of body
    <div style={{ cursor: "pointer" }} onClick={logot}>Logout</div>

  );
}

export default Logout;