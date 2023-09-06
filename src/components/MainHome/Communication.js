import React from 'react'

function Communication() {
  return (
    <>
      <section className="row_am communication_section">
        <div className="communication_inner">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="communication_text" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100">
                  <span className="icon"><img src="assets/images/new/comunication.svg" alt="image" /></span>
                  <div className="section_title">
                    <h2>Easy communication wherever you are live</h2>
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
                <div className="communication_image" data-aos="fade-in" data-aos-duration="1000">
                  <img data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100" className="moving_animation"
                    src="assets/images/new/cominication-data-03.png" alt="image" />
                  <img data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100" className="moving_animation"
                    src="assets/images/new/cominication-data-02.png" alt="image" />
                  <img data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100" className=""
                    src="assets/images/new/cominication-data-01.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Communication
