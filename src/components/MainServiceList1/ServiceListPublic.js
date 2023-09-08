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
            <h3>Extended targeting</h3>
            <p>Granular, high-precision targeting options helps to tailor advertisement for every customer.
            </p>
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
            <h3>Omnichannel Ad formats</h3>
            <p>Variety of interactive and static advertising formats for desktop, tablet, mobile devices, and CTV.
            </p>
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
            <h3>Bid optimization</h3>
            <p>DSP automatically optimizes bids to meet advertising campaign KPI and achieve your goals.              </p>
            <Link to="/serviceDetail" className="btn text_btn">DISCOVER MORE <i className="icofont-arrow-right"></i></Link>
          </div>
        </div>
      </div>

      <div className="service_list_inner" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100">
       
        <div className="s_list_card">
          <div className="icons">
            <img src="assets/images/new/service-4.svg" alt="image"/>
            <div className="dot_block">
              <span className="dot_anim"></span>
              <span className="dot_anim"></span>
              <span className="dot_anim"></span>
            </div>
          </div>
          <div className="inner_text">
            <h3>Stable quality</h3>
            <p>The platform is a part of GothamAds full-stack infrastructure that guarantees quality of impressions.
            </p>
            <Link to="/serviceDetail" className="btn text_btn">DISCOVER MORE <i className="icofont-arrow-right"></i></Link>
          </div>
        </div>
   
        {/* <div className="s_list_card">
          <div className="icons">
            <img src="assets/images/new/service-5.svg" alt="image"/>
            <div className="dot_block">
              <span className="dot_anim"></span>
              <span className="dot_anim"></span>
              <span className="dot_anim"></span>
            </div>
          </div>
          <div className="inner_text">
            <h3>UI/UX Design</h3>
            <p>Lorem Ipsum is simply dummy text ofthe printing and type setting indus ideas orem Ipsum has beenthe.
            </p>
            <Link to="/serviceDetail" className="btn text_btn">DISCOVER MORE <i className="icofont-arrow-right"></i></Link>
          </div>
        </div>
     
        <div className="s_list_card">
          <div className="icons">
            <img src="assets/images/new/service-6.svg" alt="image"/>
            <div className="dot_block">
              <span className="dot_anim"></span>
              <span className="dot_anim"></span>
              <span className="dot_anim"></span>
            </div>
          </div>
          <div className="inner_text">
            <h3>24/7 Free Support</h3>
            <p>Lorem Ipsum is simply dummy text ofthe printing and type setting indus ideas orem Ipsum has beenthe.
            </p>
            <Link to="/serviceDetail" className="btn text_btn">DISCOVER MORE <i className="icofont-arrow-right"></i></Link>
          </div>
        </div> */}
      </div>


    </div>
  </section> 
  </>
  )
}

export default ServiceListPublic