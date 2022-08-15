import React from "react";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/esm/Spinner";

import { Card } from "react-bootstrap";

const TeamScoreTable = () => {
  const [score, setScore] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPlayer = async () => {
    const response = await fetch(
      "https://team-anatolia.herokuapp.com/score_table"
    );
    const jsonData = await response.json();
    setScore(jsonData);
    console.log(jsonData);
    setLoading(true);
  };

  useEffect(() => {
    getPlayer();
  }, []);


  return (
    <>
      {" "}
      {!loading ? (
        <div className="d-flex flex-column p-5">
          {" "}
          <Spinner animation="grow" className="m-auto"></Spinner>
          <h1 className="m-auto">Loading</h1>
        </div>
      ) : (
        <div className="p-4">
          {score.map((s) => (
            <div>
              {" "}
              <Card className="text-center w-75 m-auto">
                <Card.Header>
                  {" "}
                  <strong>Dinamo Anatolia </strong> vs.{" "}
                  <strong>{" " + s.opponent_name}</strong>{" "}

                  <h6> { new Date(s.event_date).toDateString()  } </h6> 
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <h1>
                      {" "}
                      {s.team_score} {" - "} {s.opponent_score}{" "}
                    </h1>{" "}
                  </Card.Title>
                  <Card.Text>
                    <h2>
                      {" "}
                      {s.team_score > s.opponent_score ? (
                        <>Win</>
                      ) : (
                          <> { s.team_score < s.opponent_score ? "Lost" : "Draw" }  </>
                      )}{" "}
                    </h2>

                    {s.scored_by&& <h4> {"Scored by   "  +  s.scored_by } </h4> }
                    
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  {
                    <p>
                      {" "}
                      {
                           Math.round(Math.abs(new Date( s.event_date ) - new Date())/86400000) + " Days ago"
                      }{" "}
                    </p>
                
                  }

                </Card.Footer>
              </Card>
              <br></br>
            </div>
          ))} 
        </div>
      )}
    </>
  );
};

export default TeamScoreTable;
