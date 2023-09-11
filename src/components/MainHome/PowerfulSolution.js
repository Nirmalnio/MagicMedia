import React from 'react'
import NumberCounter from 'number-counter'


function PowerfulSolution() {
  return (
    <>
      <section className="powerful_solution" data-aos="fade-in" data-aos-duration="1000">

        <div className="container">
          <div className="section_title" data-aos="fade-up" data-aos-duration="1000">
            <h2>Powerful solution for your business</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard
              dummy text ever since.</p>
          </div>
          <div className="quality_lable" data-aos="fade-up" data-aos-duration="1000">
            <ul>
              <li>
                <p><i className="icofont-check-circled"></i>
                  Highly customizable</p>
              </li>
              <li>
                <p><i className="icofont-check-circled"></i>
                  Pixel perfect design</p>
              </li>
              <li>
                <p><i className="icofont-check-circled"></i>
                  Worldwide support</p>
              </li>
            </ul>
          </div>
          <div className="counters_block" data-aos="fade-up" data-aos-duration="1000">
            <ul className="app_statstic" id="counter" data-aos="fade-in" data-aos-duration="1500">
              <li>
                <div className="text">
                  <p className="d-flex justify-content-center">
                    <NumberCounter className="counter-value" data-count={120} end={100} delay={0.5}>
                      0
                    </NumberCounter>
                    <span>+</span>
                  </p>
                  <p style={{textAlign:"center"}} >
                       Publishers
                    </p>
                </div>
              </li>
              <li>
                <div className="text">
                  <p className="d-flex justify-content-center">
                  <NumberCounter className="counter-value" data-count={120} end={150} delay={0.5}>
                        0
                      </NumberCounter>
                    <span>+</span>
                  </p>
                  <p style={{textAlign:"center"}} >
                       Advertisers
                    </p>
                </div>
              </li>
              <li>
                <div className="text">
                  <p className="d-flex justify-content-center">
                  <NumberCounter className="counter-value" data-count={120} end={250} delay={2}>
                        0
                      </NumberCounter>
                    <span>+</span>
                  </p>
                  <p>Campaigns</p>
                </div>
              </li>
              <li>
                <div className="text">
                  <p className="d-flex justify-content-center">
                    <NumberCounter className="counter-value" data-count={50} end={50} delay={1}>
                      0{" "}
                    </NumberCounter>

                    <span>+</span>
                  </p>
                  <p style={{textAlign:"center"}}>
                      Agencies
                    </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="images_gallery_block row">
            <div className="gl_block col-md-3 col-sm-6" data-aos="fade-up" data-aos-duration="1000">
              <div className="img"><img src="https://mediacity.co.in/codely/4/assets/images/new/Powerful-solution-01.png" alt="image" /></div>
              <div className="img"><img src="https://mediacity.co.in/codely/4/assets/images/new/Powerful-solution-02.png" alt="image" /></div>
            </div>
            <div className="gl_block col-md-3 col-sm-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
              <div className="img"><img src="https://mediacity.co.in/codely/4/assets/images/new/Powerful-solution-03.png" alt="image" /></div>
              <div className="img"><img src="https://mediacity.co.in/codely/4/assets/images/new/Powerful-solution-04.png" alt="image" /></div>
              <div className="img"><img src="https://mediacity.co.in/codely/4/assets/images/new/Powerful-solution-05.png" alt="image" /></div>
            </div>
            <div className="gl_block col-md-3 col-sm-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">
              <div className="img"><img src="https://mediacity.co.in/codely/4/assets/images/new/Powerful-solution-06.png" alt="image" /></div>
              <div className="img"><img src="https://mediacity.co.in/codely/4/assets/images/new/Powerful-solution-07.png" alt="image" /></div>
            </div>
            <div className="gl_block col-md-3 col-sm-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <div className="img"><img src="https://mediacity.co.in/codely/4/assets/images/new/Powerful-solution-08.png" alt="image" /></div>
              <div className="img"><img src="https://mediacity.co.in/codely/4/assets/images/new/Powerful-solution-09.png" alt="image" /></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PowerfulSolution
