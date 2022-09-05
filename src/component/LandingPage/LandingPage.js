import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="bg-light">
        <header className="masthead text-center text-white">
          <div className="masthead-content">
            <div className="container px-5">
              <h1 className="masthead-heading mb-0">Dinamo Anatolia</h1>
              <h2 className="masthead-subheading  mb-0"></h2>
              <a
                className="btn btn-primary btn-xl rounded-pill mt-5"
                href="#scroll"
              >
                Learn More
              </a>
            </div>
          </div>
        </header>
        <section className="" id="scroll">
          <div className="container px-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="p-5">
                  <img
                    className="img-fluid mb-4"
                    src={require("../../images/circle_1.jpg")}
                    alt="..."
                  />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="display-4">About to Dinamo Anatolia..</h2>
                  <p>
                    Dinamo Anatolia FC has been established by a group of
                    football enthusiasts who shared the common cultural heredity
                    of
                    <strong> Anatolia (Asia Minor)</strong> living in Vancouver,
                    BC on Feb 25, 2020. The club is built on and around the
                    inclusive culture of Anatolia. <strong>Dinamo</strong> in
                    the club name represents youthfulness, energy and active
                    individuals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container px-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6">
                <div className="p-5">
                  <img
                    className="img-fluid mb-4"
                    src={require("../../images/circle_2.jpg")}
                    alt="..."
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="p-5">
                  <h2 className="display-4"> Meaning of our Logo </h2>
                  <p>
                    The club’s coat of arms represents togetherness and
                    diversity creating plenty for people. And the club’s colours
                    are yellow like the sun like bright tomorrow and black like
                    dark like the time Anatolia was in when the club was
                    established
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container px-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="p-5">
                  <img
                    className="img-fluid mb-4"
                    src={require("../../images/circle_3.jpg")}
                    alt="..."
                  />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="display-4"> We are here to welcome you! </h2>
                  <p>
                    With the leadership of the club’s first members of board,{" "}
                    <strong>Dinamo Anatolia</strong> started its journey with a
                    handful of companions to play a more structured football
                    than drop-in matches. And the mission of the team is to play
                    at the highest level of football in Canada without losing
                    its amateur soul. 
                  </p>
                  <p>
                  If you want to join us, you may fill
                    out the form below, and we will get back to you as soon as possible.
                  </p>
                  <p className="text-center">
                    <button type="button" class="btn btn-primary">
                      <Link className="text-center text-light" to="/register">
                        {" "}
                        <span>
                          <strong> Join Us !</strong>
                        </span>{" "}
                      </Link>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-5 bg-black">
          <div className="container px-5">
            <p className="m-0 text-center text-white small">
              Copyright &copy; Dinamo Anatolia 2022
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
