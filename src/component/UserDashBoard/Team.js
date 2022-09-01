import { useState, useEffect } from "react";
import TeamBarChart from "./Chart/TeamBarChart";
import { TotalGoal, ConceededGoal, Standing } from "./TeamData/TeamInfo";
import TeamTable from "./TeamTable/TeamTable";
import TeamScoreTable from "./TeamTable/TeamScoreTable";
import TeamSchedule from "./TeamTable/TeamSchedule";
import Form from "react-bootstrap/Form";

const Team = () => {
  const [score, setScore] = useState([]);
  const [standing, setStanding] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(false);
  const [leauge, setLeague] = useState([]);

  const onChangeHandler = (e) => {
    const league = document.getElementById("league").value;
    getStanding();
    getScoredTable();
  };

  const getLeague = async () => {
    const response = await fetch(
      "https://dinamo-anatolia.herokuapp.com/" + "teamInfo/leagues",
      {
        method: "GET",
        headers: {
          token: localStorage.token,
        },
      }
    );

    const jsonData = await response.json();
    setLeague(jsonData);
  };

  const getStanding = async () => {
    const response = await fetch(
      "https://dinamo-anatolia.herokuapp.com/" + "teamInfo/standing",
      {
        method: "POST",
        headers: {
          token: localStorage.token,
          league: document.getElementById("league").value
            ? document.getElementById("league").value
            : "Vancouver Metro Soccer League",
        },
      }
    );
    const jsonData = await response.json();
    setStanding(jsonData);
    setLoading(true);
    console.log(jsonData);
  };

  const getScoredTable = async () => {
    const response = await fetch(
      "https://dinamo-anatolia.herokuapp.com/" + "teamInfo/scored_table",
      {
        method: "POST",
        headers: {
          token: localStorage.token,
          league: document.getElementById("league").value
            ? document.getElementById("league").value
            : "Vancouver Metro Soccer League",
        },
      }
    );
    const jsonData = await response.json();
    setScore(jsonData);
    setLoading(true);
    console.log(jsonData);
  };

  const getSchedule = async () => {
    setLoading(true);
    const response = await fetch(
      "https://dinamo-anatolia.herokuapp.com/" + "teamInfo/get_event", {
        method:"GET",
        headers: {
          token: localStorage.token,
        }
      }
    );
    const jsonData = await response.json();
    setSchedule(jsonData);
    setLoading(false);
  };

  useEffect(() => {
    getScoredTable();
    getStanding();
    getSchedule();
    getLeague();
  }, []);

  return (
    <>
      <div
        id="content-wrapper"
        className="d-flex flex-column w-100 team-background"
      >
        <div className="container-fluid pt-4 mt-4 ">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-2 text-gray-800">Team Dashboard</h1>
          </div>

          <div className="row mx-1">
            <div className="card border-left-primary shadow h-100 py-2 mb-4 d-flex flex-lg-row flex-sm-column ">
              <div className="col-lg-6 col-sm-12">
                <div className="text-s font-weight-bold text-primary p-2">
                  League
                </div>
                <Form.Select id="league" onChange={onChangeHandler}>
                  {leauge?.map((l) => (
                    <option
                      key={l.league_name}
                      value={l.league_name}
                      id={l.league_name}
                      selected={
                        l.league_name === "Vancouver Metro Soccer League"
                          ? true
                          : false
                      }
                    >
                      {" "}
                      {l.league_name}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="text-s font-weight-bold text-primary p-2">
                  Season
                </div>
                <Form.Select>
                  <option selected>2022</option>
                  <option>2023</option>
                </Form.Select>
              </div>
            </div>
          </div>

          <div className="row">
            {" "}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-primary text-uppercase mb-1 text-center m-auto">
                        Total Goals
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800 text-center">
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
              <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-primary text-uppercase mb-1 text-center m-auto">
                        Conceeded Goal
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800 text-center">
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
              <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-primary text-uppercase mb-1 text-center m-auto">
                        Total Played
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800 text-center">
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
              <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-primary text-uppercase mb-1 text-center m-auto">
                        Standing
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800 text-center">
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
            <div className="col-xl-6 col-sm-12">
              <div className="card shadow mb-4 ">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Leage Standing
                  </h6>
                </div>
                <div
                  className="card-body overflow-auto"
                  style={{ minHeight: "500px" }}
                >
                  <div className="chart-area">
                    <TeamTable standing={standing}> </TeamTable>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-sm-12">
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Score Table
                  </h6>
                </div>

                <div
                  className="card-body h-100 overflow-auto"
                  style={{ minHeight: "500px" }}
                >
                  <div className="chart-area">
                    <TeamScoreTable score={score}> </TeamScoreTable>
                  </div>
                </div>
              </div>
            </div>
            {/* Schedule */}
            <div className="col-xl-6 col-sm-12">
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Schedule
                  </h6>
                </div>
                <div
                  className="card-body h-100 overflow-auto"
                  style={{ minHeight: "500px" }}
                >

                    <div className="chart-area">
                      <TeamSchedule schedule={schedule}></TeamSchedule>
                    </div>

                </div>
              </div>
            </div>
            <div className="col-xl-6 col-sm-12">
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">Chart</h6>
                </div>
                <div
                  className="card-body h-100 overflow-auto"
                  style={{ minHeight: "500px" }}
                >
                  <div className="chart-area">
                    <TeamBarChart score={score}></TeamBarChart>
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
