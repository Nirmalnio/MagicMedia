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
                  <h2>Analyze your data with powerful tool</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and types
                    etting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown
                    printer took a galley of type and.</p>
                </div>
                <ul>
                  <li data-aos="fade-up" data-aos-duration="2000">
                    <h3>Carefully designed</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typ esetting industry lorem Ipsum has.</p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="2000">
                    <h3>Seamless Sync</h3>
                    <p>Simply dummy text of the printing and typesetting inustry lorem Ipsum has Lorem dollar summit.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="analyze_image" data-aos="fade-in" data-aos-duration="1000">
                <img data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100" className="moving_animation"
                  src="assets/images/new/analyze-data-01.png" alt="image" />
                <img data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100" className="moving_animation"
                  src="assets/images/new/analyze-data-02.png" alt="image" />
                <img data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100" className=""
                  src="assets/images/new/analyze-data-03.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Analyze
