import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faHouse,
  faRightFromBracket,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [user, setUser] = useState(false);

  const fetchUser = async () => {
    if (localStorage.token) {
      console.log("token sent");
      try {
        const result = await fetch(
          "https://dinamo-anatolia.herokuapp.com/" + "auth/get-user",
          {
            method: "POST",
            headers: {
              token: localStorage.token,
            },
          }
        );

        const userName = await result.json();
        setUser(userName.user_name);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{
          backgroundColor: "rgb(0, 0, 0, 0.5)",
          position: "fixed",
          zIndex: "100",
          width: "100%",
          color: "whitesmoke",
        }}
      >
        <a className="navbar-brand text-light px-2" href="#">
          {" "}
          {user}
        </a>
        <button
          className="navbar-toggler text-secondary bg-primary"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
          <div className="navbar-nav col-10"  >
            <Link className="nav-link text-light " to="/">
              <FontAwesomeIcon icon={faHouse} />
              {/* <i classNameNameName="fas fa-fw fa-tachometer-alt"></i> */}
              <span> Main Page</span>
            </Link>


            <Link className="nav-link text-light " to="/events">
              <FontAwesomeIcon icon={faCalendar} />
              {/* <i classNameNameName="fas fa-fw fa-tachometer-alt"></i> */}
              <span> Events </span>
            </Link>

            <Link className="nav-link text-light " to="/login">
              <FontAwesomeIcon icon={faRightFromBracket} />
              {/* <i classNameNameName="fas fa-fw fa-tachometer-alt"></i> */}
              <span> Login</span>
            </Link>

            <Link className="nav-link text-light " to="/register">
              <FontAwesomeIcon icon={faUserPlus} />
              {/* <i classNameNameName="fas fa-fw fa-tachometer-alt"></i> */}
              <span> Join Us</span>
            </Link>


            <Link className="nav-link text-light " to="/board-member">
              <FontAwesomeIcon icon={faUsers} />
              {/* <i classNameNameName="fas fa-fw fa-tachometer-alt"></i> */}
              <span> Board Members</span>
            </Link>

          </div>
        </div>
      </nav>

      {/* <nav className="navBar">
        <div className="navBar-subFrame">
          <div className="navBar-subFrame-leftDiv">
            <Link className="" to="/">
              <img
                className="nav-img"
                src={require("../../images/home.png")}
                alt="..."
              />
            </Link>
          </div>
          <div className="navBar-subFrame-rightDiv">
            <div>
              <Link className="navBar-Item" to="/login">
                <img
                  className="nav-img"
                  src={require("../../images/calendar.png")}
                  alt="events"
                />
                Events
              </Link>
              <Link className="navBar-Item" to="/login">
                <img
                  className="nav-img"
                  src={require("../../images/user.png")}
                  alt="events"
                />{" "}
                {user ? user : "Login"}
              </Link>
              <Link className="navBar-Item" to="/register">
                <img
                  className="nav-img"
                  src={require("../../images/verify.png")}
                  alt="events"
                />
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default Navigation;
