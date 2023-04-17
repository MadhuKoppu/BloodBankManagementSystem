import React from "react";
import bdrop from "../../assets/img/bdrop.png";
import SearchPage from "./SearchPage";

import "../../assets/css/Navbar.css";

const Navbar = () => {
  return (
    <>
      {/* <nav className="nav">
        <a href="/home">
          <img src={bdrop} alt="bdroplogo" />
        </a>
        <a href="/donate">DONATE/REQUEST</a>
        <SearchPage />
      </nav> */}
      <>
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="/homepage">
                <img src={bdrop} alt="bdroplogo" className="bdroplogo" />
                <h2 className="nameHeight">Blood Donation Manage</h2>
              </a>
            </div>
            <ul class="nav navbar-nav">
              <li class="active">
                <a href="/homepage">Home</a>
              </li>
              <li>
                <a href="/donate">Donate</a>
              </li>
              <li>
                <a href="/donate">Request</a>
              </li>
              <li>
                <a href="/home">Blood Stock</a>
              </li>
              <li>
                <SearchPage />
              </li>
                <li>
                <a href="/donate">Login</a>
              </li>
              <li>
                <a href="/AboutUs">About</a>
              </li>
            </ul>
          </div>
        </nav>
      </>
      
    </>
  );
};

export default Navbar;
