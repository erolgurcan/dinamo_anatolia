import React from "react";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login/Login";
import LandingPage from "./component/LandingPage/LandingPage";
import UserDashBoard from "./component/UserDashBoard/UserDashBoard";

const InterFaceNav = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LandingPage />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/dashboard/*"} element={<UserDashBoard />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default InterFaceNav;
