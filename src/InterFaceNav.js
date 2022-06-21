import React from "react";
import { Fragment } from "react";
import { BrowserRouter, Routers, Route } from "react-router-dom";

const InterFaceNav = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routers>
          <Route path={""} element={<LandingPage />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/dashboard/*"} element={<UserDashBoard />} />
        </Routers>
      </BrowserRouter>
    </Fragment>
  );
};

export default InterFaceNav;
