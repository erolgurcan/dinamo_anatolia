import React from "react";
import "./LandingPage.css";
import Navigation from "../Navigation/Navigation";

const LandingPage = () => {
  return (
    <>
    <Navigation></Navigation>
      <header class="masthead text-center text-white">
        <div class="masthead-content">
          <div class="container px-5">
            <h1 class="masthead-heading mb-0">Dinamo Anatolia</h1>
            <h2 class="masthead-subheading  mb-0">Will Rock Your Socks Off</h2>
            <a class="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">
              Learn More
            </a>
          </div>
        </div>
      </header>
      <section id="scroll">
        <div class="container px-5">
          <div class="row gx-5 align-items-center">
            <div class="col-lg-6 order-lg-2">
              <div class="p-5">
              <img
                className="img-fluid mb-4"
                src={require("../../images/circle_1.jpg")}
                alt="..."
              />
              </div>
            </div>
            <div class="col-lg-6 order-lg-1">
              <div class="p-5">
                <h2 class="display-4">For those about to rock...</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  aliquid, mollitia odio veniam sit iste esse assumenda amet
                  aperiam exercitationem, ea animi blanditiis recusandae!
                  Ratione voluptatum molestiae adipisci, beatae obcaecati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container px-5">
          <div class="row gx-5 align-items-center">
            <div class="col-lg-6">
              <div class="p-5">
              <img
                className="img-fluid mb-4"
                src={require("../../images/circle_2.jpg")}
                alt="..."
              />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="p-5">
                <h2 class="display-4">We salute you!</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  aliquid, mollitia odio veniam sit iste esse assumenda amet
                  aperiam exercitationem, ea animi blanditiis recusandae!
                  Ratione voluptatum molestiae adipisci, beatae obcaecati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container px-5">
          <div class="row gx-5 align-items-center">
            <div class="col-lg-6 order-lg-2">
              <div class="p-5">
              <img
                className="img-fluid mb-4"
                src={require("../../images/circle_3.jpg")}
                alt="..."
              />
              </div>
            </div>
            <div class="col-lg-6 order-lg-1">
              <div class="p-5">
                <h2 class="display-4">Let there be rock!</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  aliquid, mollitia odio veniam sit iste esse assumenda amet
                  aperiam exercitationem, ea animi blanditiis recusandae!
                  Ratione voluptatum molestiae adipisci, beatae obcaecati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="py-5 bg-black">
        <div class="container px-5">
          <p class="m-0 text-center text-white small">
            Copyright &copy; Your Website 2022
          </p>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
