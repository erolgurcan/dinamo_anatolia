import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import context from "react-bootstrap/esm/AccordionContext";

const CalenderSchedueleCard = ( {data} ) => {
  const date = new Date(data.event_date2.replace("Z", "")+"-07:00" );
  const time = date.toTimeString().split(" ")[0];
  const match = data.home? "Dinamo Anatolia vs " + data.opponent_name: data.opponent_name + " vs Dinamo Anatolia"

  return (
    <>
      <div className="mb-2" >
        <div className="card w-75 m-auto ">
          <div className="card-body">
            <h5 className="card-title text-center"> {date.toDateString()} </h5>
            <h4 className="card-title text-center">
              {" "}
              <strong>{ time}  </strong>{" "}
            </h4>
            <hr></hr>
            <h3 className="card-title text-center mt-2">
              {" "}
              <strong className="mt-2"> {match} </strong>{" "}
            </h3>
            <h4 c>
              {" "}
              <FontAwesomeIcon icon={faMapPin} /> {data.event_location}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default CalenderSchedueleCard;
