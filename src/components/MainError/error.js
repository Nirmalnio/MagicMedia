import React from 'react'
import { Link } from 'react-router-dom'

function error() {
  return (
    <>
      <div className="error_page_bg">

        <div className="container">
          <section className="error_page_section">
            <div className="section_title">
              <h2>Oops! Page Not Found, something went wrong</h2>
            </div>

            <div className="error_graphic">
              <div className="lostman">
                <img src="assets/images/new/lostman.png" alt="image" />
              </div>
              <div className="errornumber">
                <img src="assets/images/new/error-number.png" alt="image" />
              </div>
            </div>
            <div className="top_part">
              <Link to="/" data-aos="fade-up" data-aos-duration="2000" className="btn btn_main aos-init aos-animate"><i className="icofont-arrow-left"></i> Back to Home</Link>
            </div>

          </section>
        </div>

      </div>
    </>
  )
}

export default error
