import React from 'react'
import { Link } from 'react-router-dom'

function ServiceListBrand() {
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
            <h3>Fraud-proof by design</h3>
            <p>Scanning the traffic 24/7, our award-winning security partners ensure 100% secure trading ecosystem.
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
            <h3>Human-viewable</h3>
            <p>Our proactive team applies industry-best tools and strategies to ensure absolute viewability for your ads.
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
            <h3>Brand-friendly</h3>
            <p>Smart algorithms make your ads appear at appropriate websites and brand-safe content.</p>
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
            <h3>Transparent</h3>
            <p>Assess all data about campaigns, transactions or ad delivery in real-time via dashboard or ask your dedicated manager.</p>
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

export default ServiceListBrand