import React from 'react'

function WhyChoose() {
  return (
    <>
       <section className="row_am why_choose_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="why_choose_text" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100">
              <div className="section_title">
                <h2>Why you should choose Codely ?</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and types
                  etting industry lorem Ipsum has been the indu has been the industrys standard dummy text ever since
                  the when an unknown printer took a galley of type and.</p>
              </div>
              <ul data-aos="fade-up" data-aos-duration="2000">
                <li> <i className="icofont-check-circled"></i> Lorem Ipsum is simply dummy </li>
                <li> <i className="icofont-check-circled"></i> Text of the printing and typesetting industry </li>
                <li> <i className="icofont-check-circled"></i> Ipsum has been the industrys standard  </li>
                <li> <i className="icofont-check-circled"></i> Dummy text ever since the when </li>
              </ul>
              
            </div>
          </div>
          <div className="col-md-6">
            <div className="solution_image" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100">
              <img src="assets/images/new/why-choose.png" alt="image"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default WhyChoose
