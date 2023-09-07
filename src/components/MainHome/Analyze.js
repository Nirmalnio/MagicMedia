import React from 'react'

function Analyze() {
  return (
    <>
      <section className="row_am analyze_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="analyze_text" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100">
                <span className="icon"><img src="assets/images/new/Analyze_Icon.svg" alt="image" /></span>
                <div className="section_title">
                  <h2>Mobile Advertising</h2>
                  <p>Our publishers and advertisers enjoy ever-developing top-notch tech solutions that deliver relevant audience and optimized yield, 
                    through precise targeting capabilities and advanced AI technology.</p>
                </div>
            
              </div>
            </div>
            <div className="col-md-6">
              <div className="analyze_image" data-aos="fade-in" data-aos-duration="1000">
                <img data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100" className="moving_animation"
                  src="https://mediacity.co.in/codely/4/assets/images/new/analyze-data-01.png" alt="image" />
                <img data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100" className="moving_animation"
                  src="https://mediacity.co.in/codely/4/assets/images/new/analyze-data-02.png" alt="image" />
                <img data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100" className=""
                  src="https://mediacity.co.in/codely/4/assets/images/new/analyze-data-03.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Analyze
