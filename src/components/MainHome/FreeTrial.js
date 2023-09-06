import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function FreeTrial() {
  const [click, setClick] = useState(false)
  return (
    <>
      <section className="free_trial_section" data-aos="fade-in" data-aos-duration="1500">
        <div className="free_inner">
          <div className="text">
            <div className="section_title" data-aos="fade-up" data-aos-duration="1500">
              <h2>Start Your 14-Day Free Trial</h2>
              <p>Instant free download from apple and play store orem Ipsum is simply dummy
                text of the printing.</p>
            </div>
            <ul data-aos="fade-up" data-aos-duration="1500">
              <li>
                <p><i className="icofont-check-circled"></i>Free 14-day trial</p>
              </li>
              <li>
                <p><i className="icofont-check-circled"></i>No credit card required</p>
              </li>
              <li>
                <p><i className="icofont-check-circled"></i>Support 24/7</p>
              </li>
              <li>
                <p><i className="icofont-check-circled"></i>Cancel anytime</p>
              </li>
            </ul>
            <div className="start_and_watch" data-aos="fade-up" data-aos-duration="1500">
              <Link to="/contactus" className="btn btn_main">GET STARTED <i className="icofont-arrow-right"></i></Link>
              <Link className="popup-youtube play-button" data-url="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
                data-toggle="modal" data-target="#myModal" title="XJj2PbenIsU">
                <div className="play_btn">
                  <img src="assets/images/play_icon-white.png" alt="image" onClick={() => setClick(true)} />
                  <div className="waves-block">
                    <div className="waves wave-1"></div>
                    <div className="waves wave-2"></div>
                    <div className="waves wave-3"></div>
                  </div>
                </div>
                <span>WATCH PROMO</span>
              </Link>
            </div>
            {click &&
              <div className="modal fade youtube-video show" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" style={{ display: "block", paddingRight: "17px" }} aria-modal="true" role="dialog">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <button id="close-video" type="button" className="button btn btn-default text-right" data-dismiss="modal">
                      <i className="icofont-close-line-circled" onClick={() => setClick(false)}></i>
                    </button>
                    <div className="modal-body">
                      <div id="video-container" className="video-container">
                        <iframe id="youtubevideo" width="640" height="360" frameborder="0" allowFullScreen="" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&amp;mute=1"></iframe>
                      </div>
                    </div>
                    <div className="modal-footer">
                    </div>
                  </div>
                </div>
              </div>}
          </div>
          <div className="side_img">
            <img src="assets/images/new/start-free-side-img.png" alt="image" />
          </div>
        </div>
      </section>
    </>
  )
}

export default FreeTrial
