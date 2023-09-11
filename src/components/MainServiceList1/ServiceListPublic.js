import React from 'react'
import { Link } from 'react-router-dom'

function ServiceListPublic() {
  return (
    <>
    <section className="row_am service_list_section">
    <div className="container">
      {/* <div className="section_title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
       
        <h2>Our Featured Services </h2>

        <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus <br/> orem Ipsum has beenthe
          standard dummy text ever since</p>
      </div> */}
      
      <div className="service_list_inner" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100">
      
        <div className="s_list_card">
          <div className="icons">
            <img src="assets/images/new/service-1.svg" alt="image"/>
            <div className="dot_block">
              <span className="dot_anim"></span>
              <span className="dot_anim"></span>
              <span className="dot_anim"></span>
            </div>
          </div>
          <div className="inner_text">
            <h3>Revenue acceleration</h3>
            <p>Yield maximization algorithms and demands mediation drive substantially higher eCPMs.</p>
            <Link to="/serviceDetail" className="btn text_btn">DISCOVER MORE <i className="icofont-arrow-right"></i></Link>
          </div>
        </div>
  
        <div className="s_list_card">
          <div className="icons">
            <img src="assets/images/new/service-2.svg" alt="image"/>
            <div className="dot_block">
              <span className="dot_anim"></span>
              <span className="dot_anim"></span>
              <span className="dot_anim"></span>
            </div>
          </div>
          <div className="inner_text">
            <h3>Worldwide reach</h3>
            <p>250+ best global demand partners open endless omnichannel monetizing opportunities.</p>
            <Link to="/serviceDetail" className="btn text_btn">DISCOVER MORE <i className="icofont-arrow-right"></i></Link>
          </div>
        </div>
     
        <div className="s_list_card">
          <div className="icons">
            <img src="assets/images/new/service-3.svg" alt="image"/>
            <div className="dot_block">
              <span className="dot_anim"></span>
              <span className="dot_anim"></span>
              <span className="dot_anim"></span>
            </div>
          </div>
          <div className="inner_text">
            <h3>Engaging user experience</h3>
            <p>CTV, programmatic audio, native and interactive formats engage visitors and enhance their lifetime value.</p>
            <Link to="/serviceDetail" className="btn text_btn">DISCOVER MORE <i className="icofont-arrow-right"></i></Link>
          </div>
        </div>
      </div>

      <div className="service_list_inner" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100">
       
      </div>


    </div>
  </section> 
  </>
  )
}

export default ServiceListPublic