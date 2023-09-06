import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Banner() {
  const [click, setClick] = useState(false)
  return (
    <>
      <section className="banner_section">
        <div className="container">
          <div className="banner_text">
            <div className="ban_inner_text" data-aos="fade-up" data-aos-duration="1500">
              <span>Powerful, easier and faster</span>
              <h1>Grow your software <br /> <span>faster & easier with Dashbord</span></h1>
              <p>The World's simplest and fast platform that brings everything together</p>
            </div>
            <Link data-aos="fade-up" data-aos-duration="1500" className="popup-youtube play-button"
              data-url="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1" data-toggle="modal"
              data-target="#myModal" title="XJj2PbenIsU">
              <div className="play_btn">
                <img src="assets/images/play_icon.png" alt="image" onClick={() => setClick(true)} />
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
          <div className="banner_images" data-aos="fade-up" data-aos-duration="1500">
            <img src="assets/images/new/banner_01.png" alt="image" />
            <div className="sub_images">
              <img className="moving_animation" src="assets/images/new/banner_02.png" alt="image" />
              <img className="moving_animation" src="assets/images/new/banner_03.png" alt="image" />
              <img className="moving_animation" src="assets/images/new/banner_04.png" alt="image" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
