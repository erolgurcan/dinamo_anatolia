import React from "react";
import { Fragment } from "react";
import UserHome from "./UserHome";
import UserNavBar from "./UserNavBar";

const UserDashBoard = () => {
  return (
    <div className="d-flex">
      <div className="w-10">
        <UserNavBar></UserNavBar>
      </div>

    </div>
  );
};

export default UserDashBoard;
