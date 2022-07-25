import React, { useState, useEffect } from "react";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import UserHome from "./UserHome";
import TeamCalender from "./TeamCalender";
import UserNavBar from "./UserNavBar";
import Team from "./Team";
import TeamPlayers from "./TeamPlayers";
import TeamScoreTable from "./TeamScoreTable";

const UserRouter =  ()  => {
  const [isAuth, setIsAuth] = useState(true);

  const checkAuthenticated = async () => {
    try {
      const res = await fetch(
        "https://dinamo-anatolia.herokuapp.com/auth/is-auth",
        {
          method: "POST",
          headers: {
            token: localStorage.token,
          },
        }
      );
      const parseResult = await res.json();
      parseResult ? setIsAuth(true) : setIsAuth(false);
      console.log(parseResult);

    } catch (error) {
      console.log(error.message);
    }
  };

useEffect(() => {
  checkAuthenticated();
}, [] )  



  return (
    <>
    { isAuth? <><div className="d-flex">
        <div className="w-10">
          <UserNavBar  setIsAuth = {setIsAuth} ></UserNavBar>
        </div>

        <div className="w-100">
          {" "}
          <Routes>
            <Route path="team-calender" element={<TeamCalender />} />
            <Route path="user-home" element={<UserHome />} />
            <Route path="team" element={<Team />} />
            <Route path="players" element={<TeamPlayers />} />
            <Route path="team_score" element={<TeamScoreTable />} />
          </Routes>
        </div>
      </div></>: ( <Navigate to="/" /> ) }
      
    </>
  );
};

export default UserRouter;
