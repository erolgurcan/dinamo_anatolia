import React, { useState, useEffect } from "react";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import UserHome from "./UserHome";
import TeamCalender from "./TeamCalender";
import UserNavBar from "./UserNavBar";
import Team from "./Team";
import TeamPlayers from "./TeamPlayers";
import Admin from "./Admin";
import AddUser from "./AddUser";
import UserInfo from "./UserInfo";



const UserRouter = () => {

  const url =
    process.env.MODE === "production"
      ? "https://dinamo-anatolia.herokuapp.com/"
      : "http://localhost:5000/";

  const [isAuth, setIsAuth] = useState(true);
  const [user, setUser] = useState([]);
  const [userStatus, setUserStatus] = useState("user");

  const checkAuthenticated = async () => {

    if (!localStorage.getItem("token")){
      console.log("token not exist")
      setIsAuth(false);
      return 
      
    }
    try {
      const res = await fetch(
        url + "auth/is-auth",
        {
          method: "POST",
          headers: {
            token: localStorage.token,
          },
        }
      );
      const parseResult = await res.json();
      parseResult ? setIsAuth(true) : setIsAuth(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUser = async () => {
    try {
      const user = await fetch(
        url + "auth/get-user",
        {
          method: "POST",
          headers: {
            token: localStorage.token,
          },
        }
      );

      const userParse = await user.json();
      setUser(userParse.user_name);
      setUserStatus(userParse.status);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
    getUser();
  }, []);

  return (
    <>
      {isAuth ? (
        <>
          <div className="row">
            <div className="col-lg-12">
              <UserNavBar
                setIsAuth={setIsAuth}
                userStatus={userStatus}
                user={user}
              ></UserNavBar>
            </div>

            <div className="col-lg-12 ">
              {" "}
              <Routes>
                <Route path="team-calender" element={<TeamCalender />} />
                <Route path="user-home" element={<UserHome />} />
                <Route path="team" element={<Team />} />
                <Route path="players" element={<TeamPlayers />} />
                <Route path="user-profile" element={<UserInfo />} />
                {userStatus === "admin" && (
                  <Route path="admin" element={<Admin />} />
                )}
                {userStatus === "admin" && (
                  <Route path="add-user" element={<AddUser />} />
                )}
              </Routes>
            </div>
          </div>
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default UserRouter;
