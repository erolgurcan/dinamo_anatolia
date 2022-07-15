import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { TotalGoal, ConceededGoal } from "./TeamData/TeamInfo";

const data = [{name: 'Page A', uv: 400}, {name: 'Page A', uv: 400} ];


const Team = () => {

  const [score, setScore] = useState([]);
  const [loading, setLoading] = useState(false);

  const getEvent = async () => {
    const response = await fetch(
      "https://dinamo-anatolia.herokuapp.com/score_table"
    );
    const jsonData = await response.json();
    setScore(jsonData);
    console.log(jsonData);
    setLoading(true);
  };

  useEffect(() => {
    getEvent();
  }, []);



  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column w-100">
        <div class="container-fluid pt-4 mt-4 ">
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
          </div>
          <div class="row">
            {" "}
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        Total Goals
                      </div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        <TotalGoal data = {score} ></TotalGoal>
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                        Conceeded Goal
                      </div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        <ConceededGoal data = {score} ></ConceededGoal>
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                        Total Played
                      </div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        { score.length  }
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-comments fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                        Standing 
                      </div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        $215,000
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-8 col-lg-7">
                <div class="card shadow mb-4">
                  <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary">
                      Scores By Match
                    </h6>
                  </div>

                  <div class="card-body">
                    <div class="chart-area">
                    <BarChart width={600} height={300} data={data}>
                        <XAxis dataKey="name" stroke="#8884d8" />
                        <YAxis />
                        <Tooltip
                          wrapperStyle={{ width: 100, backgroundColor: "#ccc" }}
                        />
                        <Legend
                          width={100}
                          wrapperStyle={{
                            top: 40,
                            right: 20,
                            backgroundColor: "#f5f5f5",
                            border: "1px solid #d5d5d5",
                            borderRadius: 3,
                            lineHeight: "40px",
                          }}
                        />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <Bar dataKey="uv" fill="#8884d8" barSize={30} />
                      </BarChart>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-5">
                <div class="card shadow mb-4">
                  <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary">
                      Total Contribution
                    </h6>
                  </div>
                  <div class="card-body">
                    <div class="chart-area">

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
