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
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

const UserNavBar = ({ setIsAuth, user, userStatus }) => {
  const [teamShow, setTeamShow] = useState(false);
  console.log(userStatus );

  const logout = (e) => {
    e.preventDefault();
    setIsAuth(false);
    localStorage.removeItem("token");
  };

  return (
    <>
      <div
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark"
        id="accordionSidebar"
      >
        <a className="sidebar-brand d-flex align-items-center justify-content-center">
          <div className="sidebar-brand-icon rotate-n-15">
            <FontAwesomeIcon icon={faSmile} />
          </div>
          <div className="sidebar-brand-text mx-3">{user} </div>
        </a>

        <div className="nav-item active">
          <Link className="nav-link" to="/">
            <FontAwesomeIcon icon={faHouse} />
            {/* <i className="fas fa-fw fa-tachometer-alt"></i> */}
            <span> Main Page</span>
          </Link>
        </div>

        <div className="nav-item collapse">
          <Link className="nav-link" to="/user-router/user-home">
            <FontAwesomeIcon icon={faUser} />
            {/* <i className="fas fa-fw fa-tachometer-alt"></i> */}
            <span> Dashboard</span>
          </Link>
        </div>

        <hr className="sidebar-divider" />

        <div
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
              <Link className="collapse-item" to="/user-router/team">
                Team
              </Link>
              <Link className="collapse-item" to="/user-router/players">
                Players
              </Link>
              {/* <Link className="collapse-item" to="/user-router/team_score">
                Score Table
              </Link> */}
            </div>
          </div>
        </div>

        <hr className="sidebar-divider" />

        {userStatus === "admin" && (
          <div className="nav-item active">
            <Link className="nav-link" to="/user-router/admin">
              <FontAwesomeIcon icon={faFolderPlus} />
              <i className="fas fa-fw fa-cog"></i>
              <span>Admin Page</span>
            </Link>
          </div>
        )}

        <Button onClick={(e) => logout(e)}> Log Out </Button>
      </div>
    </>
  );
};

export default UserNavBar;
