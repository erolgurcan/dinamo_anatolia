import React, { useState, useEffect } from "react";
import "./EventsMain.css";
import Navigation from "../Navigation/Navigation";
import EventCard from "./EventCard";

const EventsMain = () => {
  const [event, setEvent] = useState([]);

  const getEvent = async () => {
    const result = await fetch("https://dinamo-anatolia.herokuapp.com/events");
    const json = await result.json();

    setEvent(json);
  };

  useEffect(() => {
    getEvent();
  }, []);

  return (
    <>
      <Navigation />
      <div>
        <div className="container event">
          <div className="row">
            <div className="history-wrapper">
              <div className="title-wrap text-center one-of-two"></div>

              {event?.map((e) => (
                <EventCard  data = {e} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsMain;
