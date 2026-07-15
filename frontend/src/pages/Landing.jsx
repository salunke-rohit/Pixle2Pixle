import React  from "react";
import "../App.css";
import { Link } from "react-router-dom";
export default function LandingPage() {
  return (
    <div className="landingPagecontainer">
      <nav>
          <div className="navHeder"><h2>Pixle2Pixle</h2></div>
          <div className="navList">
            <p>join as Guest  </p>
            <p>Register</p>
            <div role="button">
              <p>Login</p>
            </div>
          </div>
      </nav>
      <div className="landingMainContainer">
         <div className="div1"><h1><span style={{ color: "#FF9839" }}>Connect</span> 
          with your loved once's</h1> 
         <p>Connecting People, Pixel by Pixel.</p>
         <div role="button">
          <Link to={"/home"}>Get Started</Link>
         </div>
         </div>
         <div className="div2"><img src="/mobile.png" alt="mobile" /></div>
      </div>
    </div>
  );
}