import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import UserHome from "./UserHome";
import TeamCalender from "./TeamCalender";
import UserNavBar from "./UserNavBar";
import Team from "./Team";
import TeamPlayers from "./TeamPlayers";
import TeamScoreTable from "./TeamScoreTable";

const UserRouter = () => {
  return (
    <>
      <div className="d-flex">
        <div className="w-10">
          <UserNavBar></UserNavBar>
        </div>

        <div className="w-100">
          {" "}
          <Routes>
            <Route path="team-calender" element={<TeamCalender />} />
            <Route path="user-home" element={<UserHome />} />
            <Route path="team" element={<Team />} />
            <Route path="players" element={< TeamPlayers/>} />
            <Route path="team_score" element={< TeamScoreTable/>} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default UserRouter;
