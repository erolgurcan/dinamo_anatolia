import { useState, useEffect } from "react";
import "./Login.css";
import UserDashBoard from "../UserDashBoard/UserDashBoard";
import Navigation from "../Navigation/Navigation";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [isAuth, setIsAuth] = useState(true);

  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("/user-router/team", { replace: true });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const email = document.getElementById("emailLogin").value;
    const password = document.getElementById("passwordLogin").value;

    try {
      const body = { email, password };
      
      const response = await fetch( "https://dinamo-anatolia.herokuapp.com" + "/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      console.log(response)
      const parseRes = await response.json();

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        navigateTo();
        console.log("Auth");
      } else {
        console.log("Not Auth");
        setIsAuth(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const IsAuth = async () => {
    const result = await fetch("https://dinamo-anatolia.herokuapp.com/" + "auth/is-auth", {
      method: "POST",
      headers: {
        token: localStorage.token,
      },
    });

    const resultParse = await result.json();
    setIsAuth(true);
    navigateTo();
  };

  useEffect(() => {
    IsAuth();
  }, []);

  return (
    <>
      <Navigation />
      <section className="vh-100 login-background">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="col-md-2 col-lg-7 d-flex align-items-center m-auto">
                  <div className="card-body text-black">
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

                      <div className="form-outline mb-2">
                        <input
                          type="password"
                          id="passwordLogin"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">Password</label>
                      </div>

                      <div className="mb-2">
                        <button
                          onClick={onSubmitHandler}
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                        >
                          Login
                        </button>
                      </div>
                      {!isAuth && (
                        <h6 className="font-weight-bold">
                          {" "}
                          Invalid Password or Email{" "}
                        </h6>
                      )}
                      <div className="d-flex flex-column">
                        <h6>Do you want to join us?</h6>
                        <h6>Fill out your form here</h6>
                      </div>
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
