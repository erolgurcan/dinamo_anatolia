import { useState, useEffect } from "react";
import TeamBarChart from "./Chart/TeamBarChart";
import { TotalGoal, ConceededGoal, Standing } from "./TeamData/TeamInfo";
import TeamTable from "./TeamTable/TeamTable";
import TeamScoreTable from "./TeamTable/TeamScoreTable";
import TeamSchedule from "./TeamTable/TeamSchedule";

const Team = () => {
  const [score, setScore] = useState([]);
  const [standing, setStanding] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(false);

  const getScore = async () => {
    const response = await fetch(
      "https://dinamo-anatolia.herokuapp.com/score_table"
    );
    const jsonData = await response.json();
    setScore(jsonData);
    console.log(jsonData);
    setLoading(true);
  };

  const getStanding = async () => {
    const response = await fetch(
      "https://dinamo-anatolia.herokuapp.com/standing_table"
    );
    const jsonData = await response.json();
    setStanding(jsonData);
    console.log(jsonData);
    setLoading(true);
    console.log(standing);
  };

  const getSchedule = async () => {
    const response = await fetch(
      "https://dinamo-anatolia.herokuapp.com/get_event"
    );
    const jsonData = await response.json();
    setSchedule(jsonData);
    console.log(jsonData);
    console.log(standing);
  };

  useEffect(() => {
    getScore();
    getStanding();
    getSchedule();
  }, []);

  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column w-100">
        <div className="container-fluid pt-4 mt-4 ">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          </div>
          <div className="row">
            {" "}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        Total Goals
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        <TotalGoal data={score}></TotalGoal>
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                        Conceeded Goal
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        <ConceededGoal data={score}></ConceededGoal>
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                        Total Played
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        {score.length}
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-comments fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                        Standing
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        <Standing data={standing}></Standing>
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="card shadow mb-4">
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Scores By Match
                    </h6>
                  </div>

                  <div className="card-body">
                    <div className="chart-area">
                      <TeamBarChart score={score}></TeamBarChart>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="card shadow mb-4">
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Leage Standing
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="chart-area">
                      <TeamTable standing={standing}> </TeamTable>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6">
                <div
                  className="card shadow mb-4"
                  style={{ height: 600 + "px" }}
                >
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Score Table
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="chart-area">
                      <TeamScoreTable score={score}> </TeamScoreTable>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-8 ">
                <div
                  className="card shadow mb-4"
                  style={{ height: 600 + "px" }}
                >
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Schedule
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="chart-area">
                      <TeamSchedule schedule={schedule}></TeamSchedule>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
