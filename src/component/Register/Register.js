import { useState, useEffect } from "react";
import "./Register.css";
import UserDashBoard from "../UserDashBoard/UserDashBoard";
import Navigation from "../Navigation/Navigation";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { Form, FloatingLabel } from "react-bootstrap";

const Login = () => {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <>
      <Navigation />
      <section className="vh-100 register-background">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="col-md-2 col-lg-7 d-flex align-items-center m-auto">
                  <div className="card-body text-black">
                    <form>
                      <div className="m-auto">
                        {" "}
                        <h5>Do you want to be a Dinano Player?</h5>
                        <h5>Then fill out the form below....</h5>{" "}
                      </div>

                      <div className="form-outline ">
                        <label className="form-label">Email Address</label>
                        <Form.Control
                          type="email"
                          placeholder="name@example.com"
                        />
                      </div>

                      <div className="form-outline ">
                        <label className="form-label">Email Address</label>
                        <Form.Control
                          type="email"
                          placeholder="name@example.com"
                        />
                      </div>
                      <div className="form-outline ">
                        <label className="form-label">Email Address</label>
                        <Form.Control
                          type="email"
                          placeholder="name@example.com"
                        />
                      </div>

                      <div className="form-outline ">
                        <label className="form-label">Postion</label>

                        <Form.Select aria-label="Default select example">
                          <option>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </div>

                      <div className="m-2">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                        >
                          Register
                        </button>
                      </div>
                      <div className="d-flex flex-column"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
