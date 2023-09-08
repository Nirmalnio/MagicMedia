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
                  <h2>Few words about us, what we provide for your growth</h2>
                  <p>Magic Media belongs to those programmatic advertising companies, which through creativity, mind-blowing technologies, and commitment to results, solve all challenges of digital advertising. We aspire to be a leading global provider of innovative online performance marketing solutions to publishers & advertisers. While developing and utilizing the most advanced technology available, using the most powerful media channels,
                     we wish to deliver top-quality results and performance optimization for our partners. Since 2022, MM has expanded its activities while becoming a pioneer 
                    in various areas within the online marketing world. The online market has expanded widely over the years, and as a key player within the industry, we have constantly set measures to remain a step ahead by anticipating and taking action for prospective changes. Through innovation, technology, and know-how gathered from our executive team who hold 10+ years of experience, we develop and deliver effective online solutions.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="abt_img_block" data-aos="fade-in" data-aos-duration="1500">
                  {/* <a data-aos="fade-up" data-aos-duration="1500" className="popup-youtube play-button"
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
                  </a> */}
                  <div className="top_img">
                    <img src="https://mediacity.co.in/codely/4/assets/images/new/abt_01.png" alt="image" />
                    <img src="https://mediacity.co.in/codely/4/assets/images/new/abt_02.png" alt="image" />
                  </div>
                  <div className="bottom_img">
                    <img src="https://mediacity.co.in/codely/4/assets/images/new/abt_03.png" alt="image" />
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
                      <NumberCounter className="counter-value" data-count={120} end={100} delay={0.5}>
                        0
                      </NumberCounter>
                    </span>
                      <span>+</span>
                    </p>
                    <p style={{textAlign:"center"}} >
                       Publishers
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter_outer" data-aos="fade-up" data-aos-duration="1500">
                  <div className="counter_box">
                    <p className="d-flex justify-content-center"><span className="counter-value" data-count={120}>
                      <NumberCounter className="counter-value" data-count={120} end={150} delay={2}>
                        0
                      </NumberCounter>
                    </span>
                      <span>+</span>
                    </p>
                    <p style={{textAlign:"center"}}>
                      Advertisers
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter_outer" data-aos="fade-up" data-aos-duration="1500">
                  <div className="counter_box">
                    <p className="d-flex justify-content-center"><span className="counter-value" data-count={120}>
                      <NumberCounter className="counter-value" data-count={120} end={250} delay={2}>
                        0
                      </NumberCounter>
                    </span>
                      <span>+</span>
                    </p>
                    <p style={{textAlign:"center"}}>
                        Campaigns
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter_outer" data-aos="fade-up" data-aos-duration="1500">
                  <div className="counter_box">
                    <p className="d-flex justify-content-center"><span className="counter-value" data-count={120}>
                      <NumberCounter className="counter-value" data-count={120} end={50} delay={1}>
                        0
                      </NumberCounter>
                    </span>
                      <span>+</span>
                    </p>
                    <p style={{textAlign:"center"}}>
                    Agencies
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
