import React from "react";
import { Link } from "react-router-dom";
import "../LandingPage/LandingPage.css"


const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container px-5">
          <a className="navbar-brand" href="#page-top">
          <img
                className="img-fluid mb-4 flag"
                src={require("../../images/flag.png")}
                alt="..."
              />
          </a>
          <button
            className="navbar-toggler"
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">

              </li>
              <li className="nav-item">
              <Link className="nav-link" to = "/login">Log in</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
