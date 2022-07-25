import "./App.css";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import LandingPage from "./component/LandingPage/LandingPage";
import Navigation from "./component/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <LandingPage />
    </>
  );
}

export default App;
