import React from "react";
import "./Login.css";
import UserDashBoard from "../UserDashBoard/UserDashBoard";
import Navigation from "../Navigation/Navigation";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("/dashboard", { replace: true });
  };

  const onSubmitHandler = (e) => {
    const email = document.getElementById("emailLogin").value;
    const password = document.getElementById("passwordLogin").value;
    if ((email == "test") & (password == "test")) {
      console.log("login");
      navigateTo();
    }
  };

  return (
    <>
      <Navigation></Navigation>
      <section className="vh-100 login-background">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0 ">
                  <div className="col-md-2 col-lg-7 d-flex align-items-center m-auto">
                    <div className="card-body p-4  text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          ></i>
                          <span className="h1 fw-bold m-auto">
                            <img
                              className="img-fluid"
                              src={require("../../images/logo.png")}
                              alt="..."
                            />
                          </span>
                        </div>

                        <h5
                          className="fw-normal text-center pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Sign into your account
                        </h5>

                        <div className="form-outline ">
                          <input
                            type="email"
                            id="emailLogin"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label">Email address</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="passwordLogin"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label">Password</label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            onClick={onSubmitHandler}
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                          >
                            Login
                          </button>
                        </div>

                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p
                          className="mb-5 pb-lg-2"
                          style={{ color: "#393f81" }}
                        >
                          Don't have an account?{" "}
                          <a href="#!" style={{ color: "#393f81" }}>
                            Register here
                          </a>
                        </p>
                      </form>
                    </div>
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
