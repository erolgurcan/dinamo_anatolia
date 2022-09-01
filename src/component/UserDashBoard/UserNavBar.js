import React from "react";
import { useState } from "react";
import "./UserDashBoard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderPlus,
  faFutbol,
  faGaugeHigh,
  faHouse,
  faLongArrowAltUp,
  faSmile,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./UserNavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const UserNavBar = ({ setIsAuth, user, userStatus }) => {
  const [teamShow, setTeamShow] = useState(false);
  const [adminShow, setAdminShow] = useState(false);


  const logout = (e) => {
    e.preventDefault();
    setIsAuth(false);
    localStorage.removeItem("token");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <a className="navbar-brand text-light px-2" href="#">
          {" "}
          <FontAwesomeIcon icon={faSmile} /> {user}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav col-10">
            <Link className="nav-link text-light " to="/">
              <FontAwesomeIcon icon={faHouse} />
              {/* <i classNameNameName="fas fa-fw fa-tachometer-alt"></i> */}
              <span> Main Page</span>
            </Link>

            <li class="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faFutbol} /> Team Options
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/user-router/team">
                  Team Dashboard
                </Link>

                <div class="dropdown-divider"></div>
                <Link className="dropdown-item" to="/user-router/team-calender">
                  Events
                </Link>
              </div>
            </li>

            <li class="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faUser} /> User Options
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/user-router/user-home">
                    User Dashboard
                </Link>

                <div class="dropdown-divider"></div>
                <Link className="dropdown-item" to="/user-router/user-profile">
                  User Profile
                </Link>
              </div>
            </li>
            {userStatus === "admin" && (
              <li class="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faFolderPlus} /> Admin Page
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    User Requests
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    {" "}
                    Edit User
                  </a>
                  <div class="dropdown-divider"></div>
                </div>
              </li>
            )}
          </div>

          <div className="navbar-nav col-2">
            <Link className="nav-link text-light text-right" to="/" onClick = { () => {localStorage.removeItem("token")  } } >
              <FontAwesomeIcon icon={faHouse} />
              {/* <i classNameNameName="fas fa-fw fa-tachometer-alt"></i> */}
              <span> Logout</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default UserNavBar;
