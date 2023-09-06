import React from 'react'
import { Link } from 'react-router-dom'

function OurTeam() {
  return (
    <>
      <section className="row_am our_team_section">
        <div className="container">
          <div className="section_title" data-aos="fade-up" data-aos-duration="1500">
            <h2>Our Experience Team</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard
              dummy.</p>
          </div>
          <div className="team_block">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1500">
                <div className="team_inner">
                  <div className="img">
                    <img src="assets/images/new/team_01.png" alt="image" />
                    <div className="social_media">
                      <Link to="#"><i className="icofont-facebook"></i></Link>
                      <Link to="#"><i className="icofont-twitter"></i></Link>
                      <Link to="#"><i className="icofont-instagram"></i></Link>
                    </div>
                  </div>
                  <div className="text">
                    <h3>Riana Joe</h3>
                    <span>CEO & Co-Founder</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1500">
                <div className="team_inner">
                  <div className="img">
                    <img src="assets/images/new/team_02.png" alt="image" />
                    <div className="social_media">
                      <Link to="#"><i className="icofont-facebook"></i></Link>
                      <Link to="#"><i className="icofont-twitter"></i></Link>
                      <Link to="#"><i className="icofont-instagram"></i></Link>
                    </div>
                  </div>
                  <div className="text">
                    <h3>Shali Jely</h3>
                    <span>Co-Founder</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1500">
                <div className="team_inner">
                  <div className="img">
                    <img src="assets/images/new/team_03.png" alt="image" />
                    <div className="social_media">
                      <Link to="#"><i className="icofont-facebook"></i></Link>
                      <Link to="#"><i className="icofont-twitter"></i></Link>
                      <Link to="#"><i className="icofont-instagram"></i></Link>
                    </div>
                  </div>
                  <div className="text">
                    <h3>Mark Merbo</h3>
                    <span>Business Developer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1500">
                <div className="team_inner">
                  <div className="img">
                    <img src="assets/images/new/team_04.png" alt="image" />
                    <div className="social_media">
                      <Link to="#"><i className="icofont-facebook"></i></Link>
                      <Link to="#"><i className="icofont-twitter"></i></Link>
                      <Link to="#"><i className="icofont-instagram"></i></Link>
                    </div>
                  </div>
                  <div className="text">
                    <h3>Cyrus Mistry</h3>
                    <span>Marketing & Sales</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurTeam
