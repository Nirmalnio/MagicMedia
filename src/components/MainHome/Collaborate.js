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
                  <img className="icon_img moving_animation" src="https://mediacity.co.in/codely/4/assets/images/new/Collaborate-icon_1.png" alt="image" />
                  <img src="https://mediacity.co.in/codely/4/assets/images/new/Collaborate-01.png" alt="image" />
                </div>
                <div className="img_block" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100">
                  <img src="https://mediacity.co.in/codely/4/assets/images/new/Collaborate-02.png" alt="image" />
                  <img className="icon_img moving_animation" src="https://mediacity.co.in/codely/4/assets/images/new/Collaborate-icon_2.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="collaborate_text" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100">
                <span className="icon"><img src="assets/images/new/securely.svg" alt="image" /></span>
                <div className="section_title">
                  <h2>Programmatic & RTB Advertising</h2>
                  <p>Elevate your brand using real-time-bidding advanced programmatic technology, expand your reach to audiences beyond traditional targets, 
                    increase brand awareness, and accurately track & measure the success of your marketing campaigns.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Collaborate
