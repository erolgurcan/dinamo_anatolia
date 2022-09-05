import React, { useState, useEffect } from "react";
import "./EventsMain.css";
import Navigation from "../Navigation/Navigation";
import EventCard from "./EventCard";

const EventsMain = () => {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(false);

  const getEvent = async () => {
    setLoading(true);
    const result = await fetch("https://dinamo-anatolia.herokuapp.com/events");
    const json = await result.json();
    setEvent(json);
    setLoading(false);
  };

  useEffect(() => {
    getEvent();
  }, []);

  return (
    <div className="text-center">
      <Navigation />{" "}
      {!loading ? (
        <div>
          <div className="container event">
            <div className="row">
              <div className="history-wrapper">
                <div className="title-wrap text-center one-of-two"></div>

                {event?.map((e) => (
                  <EventCard data={e} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div
            className="spinner-grow"
            style={{
              width: "2rem",
              height: "2rem",
              marginTop: "20rem",
              marginLeft: "auto",
            }}
            role="status"
          ></div>
          <h5>Loading...</h5>
        </>
      )}
    </div>
  );
};

export default EventsMain;
