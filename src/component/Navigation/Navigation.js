import React, { useEffect, useState } from "react";

const LINKS = [
  { href: "#story", label: "Our Story" },
  { href: "#crest", label: "The Crest" },
  { href: "#roots", label: "Türkiye & Canada" },
  { href: "#spirit", label: "Club Spirit" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav className={`da-nav ${solid || open ? "da-nav--solid" : ""}`}>
        <a className="da-nav-brand" href="#top" onClick={close}>
          <img
            className="da-brand-badge"
            src={require("../../images/logo.png")}
            alt=""
          />
          <span>Dinamo Anatolia</span>
        </a>
        <div className="da-nav-links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a className="da-nav-cta" href="#join">
            Join Us
          </a>
        </div>
        <button
          className={`da-burger ${open ? "is-open" : ""}`}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <div className={`da-mobile-menu ${open ? "is-open" : ""}`}>
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
        <a className="btn-da" href="#join" onClick={close}>
          Join Us
        </a>
      </div>
    </>
  );
};

export default Navigation;
