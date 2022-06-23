import React from "react";
import { Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const TeamCalender = () => {
  const [event, setEvent] = useState([]);

  const getEvent = async () => {
    const response = await fetch(
      "https://dinamo-anatolia.herokuapp.com/get_event"
    );
    const jsonData = await response.json();
    setEvent(jsonData);
    console.log(jsonData);
  };

  useEffect(() => {
    getEvent();
  }, []);

  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column w-100">
        <div id="content"></div>
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <li class="nav-item dropdown no-arrow">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                    Erol Gurcan
                  </span>
                </a>

                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown"
                >
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                    Settings
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                    Activity Log
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                  </a>
                </div>
              </li>
            </li>
          </ul>
        </nav>
        <div className="w-75 mx-auto">
          <h3>Upcoming Events</h3>
          <br></br>

          {event.map((data) => (
            <Card key = {data.event_id} >
              <Card.Header> {"Dinamo Anatolia vs." + data.opponent } </Card.Header>
              <Card.Body>
                <Card.Title> {"Date: " + data.event_date} </Card.Title>
                <Card.Text>
                      { "Location:" + data.event_address  + "Match Score: " + "Dinamo Anatola"  + data.team_score  + " " + data.opponent + " " + data.opponent_score}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamCalender;
