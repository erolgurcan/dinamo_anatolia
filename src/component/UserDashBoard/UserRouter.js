import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import UserHome from "./UserHome";
import TeamCalender from "./TeamCalender";
import UserNavBar from "./UserNavBar";

const UserRouter = () => {
  return (
    <>
      <div className="d-flex">
        <div className="w-10">
          <UserNavBar></UserNavBar>
        </div>

        <div className="w-90"></div>

        <Routes>
          <Route path="team-calender" element={<TeamCalender />} />
          <Route path="user-home" element={<UserHome />} />
        </Routes>
      </div>
    </>
  );
};

export default UserRouter;
