import React from 'react'
import { Link } from 'react-router-dom'


function Collaborate() {
  return (
    <>
      <section className="row_am collaborate_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="collaborate_image" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100">
                <div className="img_block" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100">
                  <img className="icon_img moving_animation" src="assets/images/new/Collaborate-icon_1.png" alt="image" />
                  <img src="assets/images/new/Collaborate-01.png" alt="image" />
                </div>
                <div className="img_block" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100">
                  <img src="assets/images/new/Collaborate-02.png" alt="image" />
                  <img className="icon_img moving_animation" src="assets/images/new/Collaborate-icon_2.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="collaborate_text" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100">
                <span className="icon"><img src="assets/images/new/securely.svg" alt="image" /></span>
                <div className="section_title">
                  <h2>Collaborate securely everything</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and types
                    etting industry lorem Ipsum has been the indu has been the industrys standard dummy text ever since
                    the when an unknown printer took a galley of type and.</p>
                </div>
                <ul>
                  <li data-aos="fade-up" data-aos-duration="2000">
                    <h3>Sync followers</h3>
                    <p>Simply dummy text of the printing and typesetting
                      inustry lorem Ipsum has Lorem dollar summit.</p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="2000">
                    <h3>Globally connected</h3>
                    <p>Simply dummy text of the printing and typesetting
                      inustry lorem Ipsum has Lorem dollar summit.</p>
                  </li>
                </ul>
                <Link to="/serviceDetail" data-aos="fade-up" data-aos-duration="2000" className="btn btn_main">READ MORE <i
                  className="icofont-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Collaborate
