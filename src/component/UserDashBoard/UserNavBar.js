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
          <a className="nav-link" href="/dashboard/user#">
            <FontAwesomeIcon icon={faGaugeHigh} />
            {/* <i className="fas fa-fw fa-tachometer-alt"></i> */}
            <span> Dashboard</span>
          </a>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Interface</div>

        <li className="nav-item active">
          <a className="nav-link" href="/dashboard/user#">
            <FontAwesomeIcon icon={faUser} />
            <span>User Page</span>
          </a>
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
          <a className="nav-link " href="#">
            <FontAwesomeIcon icon={faFutbol} />
            <span>Team Page</span>
          </a>
          <div
            id="collapseTwo"
            className={teamShow ? "collapse show" : "collapse"}
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <a className="collapse-item" href="/dashboard/teamCalender">
                Calender
              </a>
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
