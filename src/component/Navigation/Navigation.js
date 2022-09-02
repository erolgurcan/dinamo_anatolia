import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { useState } from "react";
const Navigation = () => {
  const [user, setUser] = useState(false);

  const fetchUser = async () => {

    if (localStorage.token) {
      console.log("token sent")
      try {
        const result = await fetch("https://dinamo-anatolia.herokuapp.com/" + "auth/get-user", {
          method: "POST",
          headers: {
            token: localStorage.token,
          },
        });

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
      <nav className="navBar">
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
      </nav>
    </>
  );
};

export default Navigation;
