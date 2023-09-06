import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import One from '../../assets/images/new/logo_white.png'

function Main() {
  const [headerScroll, setheaderScroll] = useState(false);
  const [click, setClick] = useState(false);
  const [animation, setAnimation] = useState(true);
  const [tabclick, setTabclick] = useState(false)
  const path = useLocation().pathname

  useEffect(() => {
    if (path === "/contact") {
      setAnimation(false)
    }
  }, [path])

  useEffect(() => {

    const fixedHeader = () => {
      if (window.pageYOffset > 150) {
        setheaderScroll(true)
      } else {
        setheaderScroll(false)
      }
    }
    window.addEventListener('scroll', fixedHeader)
  }, [])


  return (
    <>


      <header className={headerScroll ? "fixed fix_style" : "fixed"}>

        <div className="container">

          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">
              <img src={One} alt="image" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">

                <div className={`toggle-wrap ${click === true ? 'active' : ''}`} onClick={() => {
                  setClick(!click)
                }}>
                  <span className="toggle-bar" onClick={() => setTabclick(!tabclick)}></span>
                </div>
              </span>
            </button>

            <div className={`collapse navbar-collapse ${tabclick === true ? "show" : ""}`} id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/about-us">About us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/testimonial">Advertisement</Link>
                </li>

                <li className="nav-item has_dropdown">
                  <Link className="nav-link" to="#">Services</Link>
                  <span className="drp_btn"><i className="icofont-rounded-down"></i></span>
                  <div className="sub_menu">
                    <ul>
                      <li><Link to="/servicelist1">Service List 1</Link></li>
                      <li><Link to="/servicelist2">Service List 2</Link></li>
                      <li><Link to="/serviceDetail">Service Details </Link></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item has_dropdown">
                  <Link className="nav-link" to="#">Blog </Link>
                  <span className="drp_btn"><i className="icofont-rounded-down"></i></span>
                  <div className="sub_menu">
                    <ul>
                      <li><Link to="/bloglist">Blog List</Link></li>
                      <li><Link to="/singleblog">Single Blog</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item has_dropdown">
                  <Link className="nav-link" to="#">Pages </Link>
                  <span className="drp_btn"><i className="icofont-rounded-down"></i></span>
                  <div className="sub_menu">
                    <ul>
                      <li><Link to="/pricing">Pricing </Link></li>
                      <li><Link to="/signin">Sign In </Link></li>
                      <li><Link to="/signup">Sign Up </Link></li>
                      <li><Link to="/error">Error 404 </Link></li>
                      <li><Link to="/faq">Faq </Link></li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/contactus">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link dark_btn" to="/contactus">TRY IT FREE <i className="icofont-arrow-right"></i></Link>
                </li>
              </ul>
            </div>
          </nav>

        </div>

      </header>
    </>
  )
}

export default Main
