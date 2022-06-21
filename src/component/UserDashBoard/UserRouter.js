import react, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import UserHome from "./UserHome";
import UserNavBar from "./UserNavBar";
import TeamCalender from "./TeamCalender";
const UserRouter = () => {
  return (
    <Fragment className="d-flex">
      <div className="d-flex">
        <UserNavBar></UserNavBar>
        <Routes>
          <Route path={"/user"} element={<UserHome />} />
          <Route path={"/teamCalender"} element={<TeamCalender />} />
        </Routes>
      </div>
    </Fragment>
  );
};

export default UserRouter;
