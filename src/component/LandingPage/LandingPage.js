import React, { useEffect } from "react";
import "../Main.css";

const INSTAGRAM_URL = "https://www.instagram.com/dinamoanatolia_fc/?hl=en";
const YOUTUBE_URL = "https://www.youtube.com/channel/UCvsYsl0kj7E24caMbv-r5iw";

const InstagramIcon = ({ size = 26 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
  </svg>
);

const YoutubeIcon = ({ size = 26 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
  </svg>
);

const LandingPage = () => {
  useEffect(() => {
    const targets = document.querySelectorAll(".da-reveal");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div id="top">
      {/* Hero */}
      <header className="da-hero">
        <div>
          <img
            className="da-hero-crest"
            src={require("../../images/logo.png")}
            alt="Dinamo Anatolia crest"
          />
          <span className="da-eyebrow">
            Türkiye roots · Est. 2020 · Vancouver, BC
          </span>
          <h1 className="da-hero-title">Dinamo Anatolia</h1>
          <p className="da-hero-tag">
            Anatolian heritage, Canadian home ground. A football club that is
            youthful, energetic, and open to everyone who loves the game.
          </p>
          <a className="btn-da" href="#story">
            Our Story
          </a>
          <a className="btn-da-ghost" href="#join">
            Join Us
          </a>
        </div>
        <span className="da-scroll-hint" aria-hidden="true"></span>
      </header>

      {/* Identity strip */}
      <section className="da-strip">
        <div className="container px-5">
          <div className="row text-center gy-4">
            <div className="col-md-4 py-2">
              <div className="da-strip-word">Est. 2020</div>
              <p className="da-strip-text">
                Born in Vancouver on February 25, 2020
              </p>
            </div>
            <div className="col-md-4 py-2">
              <div className="da-strip-word">Anatolia</div>
              <p className="da-strip-text">
                A heritage carried from Türkiye to Canada&rsquo;s West Coast
              </p>
            </div>
            <div className="col-md-4 py-2">
              <div className="da-strip-word">Dinamo</div>
              <p className="da-strip-text">
                Youthfulness, energy, and people in motion
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="da-main">
        {/* Chapter 1 — the story */}
        <section className="da-section" id="story">
          <div className="container px-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6 order-lg-2 text-center da-reveal">
                <div className="da-frame m-4">
                  <img
                    className="img-fluid"
                    src={require("../../images/circle_2.jpg")}
                    alt="The Dinamo Anatolia squad together on the pitch"
                  />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1 da-reveal">
                <div className="p-4 p-lg-5">
                  <span className="da-eyebrow">Chapter One · Our Story</span>
                  <h2 className="display-5">From Anatolia to the Pacific</h2>
                  <p>
                    Dinamo Anatolia FC was founded by a group of football
                    enthusiasts sharing the common cultural heredity of{" "}
                    <strong>Anatolia (Asia Minor)</strong>, living in
                    Vancouver, BC. What began as drop-in matches between
                    friends became a club — built on, and around, the
                    inclusive culture of the land its founders call home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 2 — the crest */}
        <section className="da-section pt-0" id="crest">
          <div className="container px-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6 text-center da-reveal">
                <div className="da-frame da-frame--flip m-4">
                  <img
                    className="img-fluid"
                    src={require("../../images/circle_1.jpg")}
                    alt="The Dinamo Anatolia coat of arms"
                  />
                </div>
              </div>
              <div className="col-lg-6 da-reveal">
                <div className="p-4 p-lg-5">
                  <span className="da-eyebrow">Chapter Two · The Crest</span>
                  <h2 className="display-5">A shield that means plenty</h2>
                  <p>
                    The club’s coat of arms represents togetherness and
                    diversity creating plenty for people. The colours carry
                    the story: yellow like the sun and a bright tomorrow,
                    black like the dark times Anatolia was in when the club
                    was established.
                  </p>
                  <p className="mt-3">
                    <span className="da-swatch da-swatch--gold">Sun</span>
                    <span className="da-swatch da-swatch--black">Night</span>
                    <span className="da-swatch da-swatch--navy">Club navy</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 3 — the mission */}
        <section className="da-section pt-0" id="mission">
          <div className="container px-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6 order-lg-2 text-center da-reveal">
                <div className="da-frame m-4">
                  <img
                    className="img-fluid"
                    src={require("../../images/circle_3.jpg")}
                    alt="Dinamo Anatolia players running during a match"
                  />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1 da-reveal">
                <div className="p-4 p-lg-5">
                  <span className="da-eyebrow">Chapter Three · The Mission</span>
                  <h2 className="display-5">Amateur soul, highest level</h2>
                  <p>
                    With the leadership of the club’s first board,{" "}
                    <strong>Dinamo Anatolia</strong> set out with a handful of
                    companions to play more structured football than drop-in
                    matches. The mission hasn’t changed: play at the highest
                    level of football in Canada — without ever losing the
                    amateur soul.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Türkiye ↔ Canada roots */}
      <section className="da-roots" id="roots">
        <div className="container px-5">
          <div className="text-center mb-5 da-reveal">
            <span className="da-eyebrow">Roots &amp; Home</span>
            <h2 className="display-5">İki bayrak, tek yürek</h2>
            <p className="da-roots-lead">Two flags, one heart.</p>
          </div>
          <div className="row gx-4 gy-4 justify-content-center">
            <div className="col-lg-5 col-md-6 da-reveal">
              <div className="da-country-card">
                <div className="da-country-mark da-country-mark--tr" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="46"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="10.5" cy="12" r="6.6" fill="#fff" />
                    <circle cx="12.2" cy="12" r="5.4" fill="#e30a17" />
                    <path
                      d="M17.8 9.5 L18.39 11.19 L20.18 11.23 L18.75 12.31 L19.27 14.02 L17.8 13 L16.33 14.02 L16.85 12.31 L15.42 11.23 L17.21 11.19 Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <span className="da-country-sub">Where the roots grow</span>
                <h3>Türkiye</h3>
                <p>
                  Our founders carry Anatolia with them — the hospitality, the
                  çay after every match, and a love of football first learned
                  on the streets of Türkiye.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 da-reveal">
              <div className="da-country-card">
                <div className="da-country-mark da-country-mark--ca" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="84"
                    height="84"
                    viewBox="0 0 84 84"
                  >
                    <defs>
                      <clipPath id="da-ca-flag">
                        <circle cx="42" cy="42" r="42" />
                      </clipPath>
                    </defs>
                    <g clipPath="url(#da-ca-flag)">
                      <rect x="21" width="42" height="84" fill="#fff" />
                      <path
                        d="M50 2 L56 20 L70 10 L65 30 L92 26 L80 44 L97 52 L70 60 L74 74 L54 66 L54 90 L46 90 L46 66 L26 74 L30 60 L3 52 L20 44 L8 26 L35 30 L30 10 L44 20 Z"
                        fill="#d52b1e"
                        transform="translate(21,20) scale(0.42)"
                      />
                    </g>
                  </svg>
                </div>
                <span className="da-country-sub">Where the story continues</span>
                <h3>Canada</h3>
                <p>
                  Vancouver is home ground now — rain or shine, between the
                  mountains and the Pacific, in the country that welcomed us
                  all with open arms.
                </p>
              </div>
            </div>
          </div>
          <div className="da-bridge da-reveal">
            <span>9,600 km apart &middot; 90 minutes together</span>
          </div>
        </div>
      </section>

      <div className="da-main">
        {/* Values */}
        <section className="da-section" id="spirit">
          <div className="container px-5">
            <div className="text-center mb-5 da-reveal">
              <span className="da-eyebrow">What we stand for</span>
              <h2 className="display-5">The club spirit</h2>
            </div>
            <div className="row gx-4 gy-4">
              <div className="col-md-4 da-reveal">
                <div className="da-value-card">
                  <span className="da-value-num" aria-hidden="true">01</span>
                  <h3>Togetherness</h3>
                  <p>
                    One squad, one table, one family — from the first whistle
                    to the last çay after the match.
                  </p>
                </div>
              </div>
              <div className="col-md-4 da-reveal">
                <div className="da-value-card">
                  <span className="da-value-num" aria-hidden="true">02</span>
                  <h3>Diversity</h3>
                  <p>
                    Rooted in the inclusive culture of Anatolia, the club is
                    open to everyone — wherever you are from.
                  </p>
                </div>
              </div>
              <div className="col-md-4 da-reveal">
                <div className="da-value-card">
                  <span className="da-value-num" aria-hidden="true">03</span>
                  <h3>Energy</h3>
                  <p>
                    Dinamo means motion. Youthful, active, and always chasing
                    the next ball — on and off the pitch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Join CTA */}
      <section className="da-cta" id="join">
        <div className="da-reveal">
          <span className="da-eyebrow">Fancy a match?</span>
          <h2>Come kick it with us</h2>
          <p>
            New to Vancouver, or just love the game? There’s a place for you
            at Dinamo Anatolia. Send us a message and join the next session.
          </p>
          <a
            className="btn-da"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
          >
            Message us on Instagram
          </a>
          <a
            className="btn-da-ghost"
            href={YOUTUBE_URL}
            target="_blank"
            rel="noreferrer"
          >
            Watch us play
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="da-footer">
        <div className="mb-3">
          <a
            className="mx-3"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Dinamo Anatolia on Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            className="mx-3"
            href={YOUTUBE_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Dinamo Anatolia on YouTube"
          >
            <YoutubeIcon />
          </a>
        </div>
        <p className="m-0 small">
          &copy; {new Date().getFullYear()} Dinamo Anatolia FC · Vancouver, BC
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
