import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const EventCard = ({ data }) => {
  const date = new Date(data.event_date2);
  const time = date.toTimeString().split(" ")[0];
  const match = data.home
    ? "Dinamo Anatolia vs " + data.opponent_name
    : data.opponent_name + " vs Dinamo Anatolia";

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.1262412823603!2d-123.09602088402104!3d49.27400507933033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548671661d7def79%3A0x3b43c275741c772d!2sTrillium%20Turf!5e0!3m2!1sen!2sca!4v1662234777399!5m2!1sen!2sca"
            width="600"
            height="450"
            style= {{border: "0"}}
            allowfullscreen=""
            loading="eager"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="timeline-box one-of-two" onClick={handleShow}>
        <div className="card w-75 m-auto ">
          <div className="card-body event-card  ">
            <h5 className="card-title text-center"> {date.toDateString()} </h5>
            <h4 className="card-title text-center">
              {" "}
              <strong>{time} </strong>{" "}
            </h4>
            <hr></hr>
            <h5 className="card-title text-center mt-2">
              {" "}
              <strong className="mt-2"> {match} </strong>{" "}
            </h5>
            <h6 className="m-auto">
              {" "}
              <FontAwesomeIcon icon={faMapPin} /> {data.event_location}
            </h6>
          </div>
        </div>
        <div className="year">{date.getFullYear()}</div>
      </div>
    </>
  );
};

export default EventCard;
