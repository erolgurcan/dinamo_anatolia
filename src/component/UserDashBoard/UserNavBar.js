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
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const UserNavBar = ({ setIsAuth, user, userStatus }) => {
  const [teamShow, setTeamShow] = useState(false);
  const [adminShow, setAdminShow] = useState(false);
  console.log(userStatus);

  const logout = (e) => {
    e.preventDefault();
    setIsAuth(false);
    localStorage.removeItem("token");
  };

  return (
    <>
      <Navbar expand="lg" className="mb-4 bg-secondary" fixed="top">
        <Container>
          <Navbar.Brand>{user}</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    // <>
    //   <div
    //     className="navbar-nav bg-gradient-secondary sidebar sidebar-dark"
    //     id="accordionSidebar"
    //   >
    //     <a className="sidebar-brand d-flex align-items-center justify-content-center">
    // <div className="sidebar-brand-icon rotate-n-15">
    //   <FontAwesomeIcon icon={faSmile} />
    // </div>
    //       <div className="sidebar-brand-text mx-3">{user} </div>
    //     </a>

    // <div className="nav-item active">
    //   <Link className="nav-link" to="/">
    //     <FontAwesomeIcon icon={faHouse} />
    //     {/* <i className="fas fa-fw fa-tachometer-alt"></i> */}
    //     <span> Main Page</span>
    //   </Link>
    // </div>

    //     <div className="nav-item collapse">
    //       <Link className="nav-link" to="/user-router/user-home">
    //         <FontAwesomeIcon icon={faUser} />
    //         {/* <i className="fas fa-fw fa-tachometer-alt"></i> */}
    //         <span> Dashboard</span>
    //       </Link>
    //     </div>

    //     <hr className="sidebar-divider" />

    //     <div
    //       className="nav-item active"
    //       onClick={() => {
    //         {
    //           !teamShow ? setTeamShow(true) : setTeamShow(false);
    //         }
    //         console.log(teamShow);
    //       }}
    //     >
    //       <div className="nav-link ">
    //         <FontAwesomeIcon icon={faFutbol} />
    //         <span>Team Page</span>
    //       </div>
    //       <div
    //         id="collapseTwo"
    //         className={teamShow ? "collapse show" : "collapse"}
    //       >
    //         <div className="bg-white py-2 collapse-inner rounded">
    //           <Link className="collapse-item" to="/user-router/team-calender">
    //             Calender
    //           </Link>
    //           <Link className="collapse-item" to="/user-router/team">
    //             Team
    //           </Link>
    //           <Link className="collapse-item" to="/user-router/players">
    //             Players
    //           </Link>
    //           <Link className="collapse-item" to="/user-router/score_table">
    //             Score Table
    //           </Link>
    //         </div>
    //       </div>
    //     </div>

    //     <hr className="sidebar-divider" />

    //     {userStatus === "admin" && (
    //       <div className="nav-item active" onClick = {  () => {
    //         !adminShow? setAdminShow(true): setAdminShow(false)
    //       }  } >
    //       <div className="nav-link ">
    //         <FontAwesomeIcon icon={faFolderPlus} />
    //         <span>Admin Page</span>
    //       </div>
    //       <div
    //         id="collapseTwo"
    //         className={adminShow ? "collapse show" : "collapse"}
    //       >
    //         <div className="bg-white py-2 collapse-inner rounded">
    //           <Link className="collapse-item" to="/user-router/add-user">
    //             Add User
    //           </Link>
    //           <Link className="collapse-item" to="/user-router/team-calender">
    //             Add Player
    //           </Link>
    //         </div>
    //       </div>

    //       </div>
    //     )}

    //     <Button onClick={(e) => logout(e)}> Log Out </Button>
    //   </div>
    // </>
  );
};

export default UserNavBar;
