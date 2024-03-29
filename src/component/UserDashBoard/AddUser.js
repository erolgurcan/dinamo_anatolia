import React from "react";
import { Form, Button } from "react-bootstrap";

const AddUser = () => {
  return (
    <div className = "d-flex  flex-column flex-wrap  mt-5" >
    <div className="w-50 m-auto" > <h4>Create a New User</h4></div>
    <div className="w-50 m-auto"   >      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> User Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit"> 
          Submit
        </Button>
      </Form></div>

    </div>
  );
};

export default AddUser;
