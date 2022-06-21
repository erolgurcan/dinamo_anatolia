import React from "react";
import { useState } from "react";
import "./UserDashBoard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderPlus,
  faFutbol,
  faGaugeHigh,
  faSmile,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const UserNavBar = () => {
  const [teamShow, setTeamShow] = useState(false);

  return (
    <>

      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/dashboard"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <FontAwesomeIcon icon={faSmile} />
          </div>
          <div className="sidebar-brand-text mx-3">User Board</div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <Link className="nav-link" to="/user-router/home">
            <FontAwesomeIcon icon={faGaugeHigh} />
            {/* <i className="fas fa-fw fa-tachometer-alt"></i> */}
            <span> Dashboard</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Interface</div>

        <li className="nav-item active">
          <Link className="nav-link" to="/user-router/home">
            <FontAwesomeIcon icon={faUser} />
            {/* <i className="fas fa-fw fa-tachometer-alt"></i> */}
            <span> Dashboard</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />

        <li
          className="nav-item active"
          onClick={() => {
            {
              !teamShow ? setTeamShow(true) : setTeamShow(false);
            }
            console.log(teamShow);
          }}
        >
          <div className="nav-link ">
            <FontAwesomeIcon icon={faFutbol} />
            <span>Team Page</span>
          </div>
          <div
            id="collapseTwo"
            className={teamShow ? "collapse show" : "collapse"}
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link className="collapse-item" to="/user-router/team-calender">
                Calender
              </Link>
              <a className="collapse-item" href="cards.html">
                Team
              </a>
            </div>
          </div>
        </li>

        <hr className="sidebar-divider" />

        <li className="nav-item active">
          <a className="nav-link " href="#">
            <FontAwesomeIcon icon={faFolderPlus} />
            <i className="fas fa-fw fa-cog"></i>
            <span>Admin Page</span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default UserNavBar;
