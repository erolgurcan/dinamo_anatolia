import React from "react";
import { Modal, Button, Card, ListGroup } from "react-bootstrap";
import { useState } from "react";

const RegisterModal = ({ modalShownHandler, userInfo }) => {
  console.log(userInfo);
  return (
    <>
      <Modal show={true} className = "mt-10">
        <Modal.Header>
          <Modal.Title>Your Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <h6> Your request is succesfully submitted, We will get in touch with you as soon as possible </h6>
          <h6>
            <strong> Name:</strong> {userInfo.userName}{" "}
          </h6>
          <h6>
            <strong> Last Name:</strong> {userInfo.userLastName}{" "}
          </h6>
          <h6>
            <strong> Email:</strong> {userInfo.userEmail}{" "}
          </h6>
          <h6>
            <strong> Phone:</strong> {userInfo.userPhone}{" "}
          </h6>
        </Modal.Body>
        <Modal.Footer className="m-auto" >
          <Button variant="secondary" onClick={modalShownHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegisterModal;
