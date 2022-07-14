import React from "react";
import { Card, Button, Badge, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";

const TeamCalender = () => {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(false);

  const getEvent = async () => {
    const response = await fetch(
      "https://dinamo-anatolia.herokuapp.com/get_event"
    );
    const jsonData = await response.json();
    setEvent(jsonData);
    console.log(jsonData);
    setLoading(true);
  };

  useEffect(() => {
    getEvent();
  }, []);

  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column w-100">
        <div id="content"></div>
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"></nav>
        <div className="w-75 mx-auto">
          <h3>Events</h3>
          {!loading ? (
            <div className="d-flex flex-column p-5">
              {" "}
              <Spinner animation="grow" className="m-auto"></Spinner> 
              <h1 className = "m-auto" >Loading</h1>
            </div>
          ) : (
            <>
              {" "}
              {event.map((data) => (
                <Card key={data.event_id}>
                  <Card.Header>
                    {" "}
                    <strong> {"Dinamo Anatolia"} </strong> {"vs "}{" "}
                    <strong> {data.opponent_name} </strong>{" "}
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <div>
                        <div>
                          {" "}
                          <strong> {"Date: "} </strong>{" "}
                          <Badge bg="secondary">
                            {" "}
                            {data.event_date.split("-")[0] +
                              "-" +
                              data.event_date.split("-")[1] +
                              "-" +
                              data.event_date.split("-")[2].split("T")[0]}{" "}
                          </Badge>{" "}
                        </div>
                        <br></br>
                        <div>
                          <strong> {"Macth Score: "} </strong>{" "}
                          {data.event_location[0].toUpperCase() +
                            data.event_location.slice(1)}
                        </div>
                      </div>
                    </Card.Title>
                    <Card.Text>
                      <strong> {"Location: "} </strong>{" "}
                      {data.event_location[0].toUpperCase() +
                        data.event_location.slice(1)}
                    </Card.Text>
                  </Card.Body>
                  <br></br>
                </Card>
              ))}
            </>
          )}
          <br></br>
        </div>
      </div>
    </>
  );
};

export default TeamCalender;
