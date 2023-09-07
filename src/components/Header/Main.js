import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import One from "../../assets/images/new/logo_white.png";

function Main() {
  const [headerScroll, setheaderScroll] = useState(false);
  const [click, setClick] = useState(false);
  const [animation, setAnimation] = useState(true);
  const [tabclick, setTabclick] = useState(false);
  const path = useLocation().pathname;

  useEffect(() => {
    if (path === "/contact") {
      setAnimation(false);
    }
  }, [path]);

  useEffect(() => {
    const fixedHeader = () => {
      if (window.pageYOffset > 150) {
        setheaderScroll(true);
      } else {
        setheaderScroll(false);
      }
    };
    window.addEventListener("scroll", fixedHeader);
  }, []);

  return (
    <>
      <header className={headerScroll ? "fixed fix_style" : "fixed"}>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">
              <img src={One} alt="image" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <div
                  className={`toggle-wrap ${click === true ? "active" : ""}`}
                  onClick={() => {
                    setClick(!click);
                  }}
                >
                  <span
                    className="toggle-bar"
                    onClick={() => setTabclick(!tabclick)}
                  ></span>
                </div>
              </span>
            </button>

            <div
              className={`collapse navbar-collapse ${
                tabclick === true ? "show" : ""
              }`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <Link className="nav-link" to="/home">
                    Home
                  </Link>
                 </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about-us">
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/testimonial">
                    Advertisers
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Publishers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    AdFormats{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Brand Safety{" "}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/contactus">
                    Contact Us
                  </Link>
                </li>
               
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Main;
