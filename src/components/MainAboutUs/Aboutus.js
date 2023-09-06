import React from 'react'
import NumberCounter from 'number-counter'

function AboutUsPage() {
  return (
    <>
      <section className="about_us_page_section">
        <div className="dotes_anim_bloack">
          <div className="dots dotes_1"></div>
          <div className="dots dotes_2"></div>
          <div className="dots dotes_3"></div>
          <div className="dots dotes_4"></div>
          <div className="dots dotes_5"></div>
          <div className="dots dotes_6"></div>
          <div className="dots dotes_7"></div>
          <div className="dots dotes_8"></div>
        </div>
        <div className="container">
          <div className="about_block">
            <div className="row">
              <div className="col-md-6">
                <div className="section_title" data-aos="fade-in" data-aos-duration="1500">
                  <h2>Few words about us, what
                    we provide for your growth</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe
                    standard dummybeenthe standard dummy text ever since when an own Ipsums.</p>
                  <p>Simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy text
                    ever since when an own Lorem Ipsums dummy text of the printing and typesetting indus orem Ipsum
                    simply.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="abt_img_block" data-aos="fade-in" data-aos-duration="1500">
                  <a data-aos="fade-up" data-aos-duration="1500" className="popup-youtube play-button"
                    data-url="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1" data-toggle="modal"
                    data-target="#myModal" title="XJj2PbenIsU">
                    <div className="play_btn">
                      <img src="assets/images/new/orange_play.png" alt="image" />
                      <div className="waves-block">
                        <div className="waves wave-1"></div>
                        <div className="waves wave-2"></div>
                        <div className="waves wave-3"></div>
                      </div>
                    </div>
                  </a>
                  <div className="top_img">
                    <img src="assets/images/new/abt_01.png" alt="image" />
                    <img src="assets/images/new/abt_02.png" alt="image" />
                  </div>
                  <div className="bottom_img">
                    <img src="assets/images/new/abt_03.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="counter">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div

                  className="counter_outer"
                  data-aos="fade-up"
                  data-aos-duration={1500}>


                  <div className="counter_box">


                    <p className="d-flex justify-content-center"><span className="counter-value" data-count={120}>
                      <NumberCounter className="counter-value" data-count={120} end={450} delay={0.5}>
                        0
                      </NumberCounter>
                    </span>
                      <span>+</span>
                    </p>
                    <p>
                      Millions of client <br /> logins monthly
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter_outer" data-aos="fade-up" data-aos-duration="1500">
                  <div className="counter_box">
                    <p className="d-flex justify-content-center"><span className="counter-value" data-count={120}>
                      <NumberCounter className="counter-value" data-count={120} end={120} delay={2}>
                        0
                      </NumberCounter>
                    </span>
                      <span>+</span>
                    </p>
                    <p>
                      Languages and <br /> countries
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter_outer" data-aos="fade-up" data-aos-duration="1500">
                  <div className="counter_box">
                    <p className="d-flex justify-content-center"><span className="counter-value" data-count={120}>
                      <NumberCounter className="counter-value" data-count={120} end={135} delay={2}>
                        0
                      </NumberCounter>
                    </span>
                      <span>+</span>
                    </p>
                    <p>
                      Percent yearly <br /> turnover increase
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter_outer" data-aos="fade-up" data-aos-duration="1500">
                  <div className="counter_box">
                    <p className="d-flex justify-content-center"><span className="counter-value" data-count={120}>
                      <NumberCounter className="counter-value" data-count={120} end={324} delay={1}>
                        0
                      </NumberCounter>
                    </span>
                      <span>+</span>
                    </p>
                    <p>
                      Million active <br /> accounts
                    </p>
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

export default AboutUsPage
