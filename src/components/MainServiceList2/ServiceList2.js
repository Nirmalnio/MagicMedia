import React from 'react'
import { Link } from 'react-router-dom'


function ServiceList2() {
  return (
    <>
      <section className="row_am service_list_two_colom">
      <div className="container">
        <div className="row">

        
          <div className="col-md-6">
            <div className="sl_two_colom_image" data-aos="fade-in" data-aos-duration="1000">
              <img src="assets/images/new/service_list_img2.png" alt="image"/>
            </div>
          </div>

          
          <div className="col-md-6">
            <div className="sl_two_colom_text" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100">
              <div className="section_title">
                <h2>Your service title here </h2>
                <p>Lorem Ipsum is simply dummy text of the printing and types etting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and.</p>
              </div>
              
              <div className="service_list_point">
                <ul data-aos="fade-up" data-aos-duration="2000">
                  <li> <i className="icofont-check-circled"></i> Lorem Ipsum is simply dummy </li>
                  <li> <i className="icofont-check-circled"></i> Text of the printing and typesetting industry </li>
                  <li> <i className="icofont-check-circled"></i> Ipsum has been the industrys standard  </li>
                  <li> <i className="icofont-check-circled"></i> Dummy text ever since the when </li>
                </ul>
              </div>

              <Link to="/serviceDetail" data-aos="fade-up" data-aos-duration="2000" className="btn btn_main aos-init aos-animate">READ MORE <i className="icofont-arrow-right"></i></Link>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default ServiceList2
