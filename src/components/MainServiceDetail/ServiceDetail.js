import React from 'react'
import { Link } from 'react-router-dom'

function ServiceDetail() {
  return (
    <>
      <section className="service_detail_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
         
            <div className="service_left_side">
              <div className="section_title" data-aos="fade-up" data-aos-duration="2000">
                <h2>Bug free software development
                  services provider</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the
                  industrys standard dummy text ever since the when an unknown printer took a galley of type and.
                  scrambled it to make a type specimen book.</p>
              </div>
              <div className="img" data-aos="fade-up" data-aos-duration="2000">
                <img src="assets/images/new/service-img.png" alt="image"/>
              </div>
              <h3 data-aos="fade-up" data-aos-duration="1500">Benifits of our services</h3>
              <p data-aos="fade-up" data-aos-duration="1500">Lorem Ipsum is simply dummy text of the printing and
                typesetting industry lorem Ipsum has been the
                industrys standard dummy text ever since the when an utext ever since the when an unknown printer took a
                galley of type and. scrambled it to make a type speci
                men book It has survived not only five centuries, but also the leap into electronic type
                setting, remaining essentially unchanged.
              </p>
              <ul className="list_block" data-aos="fade-up" data-aos-duration="1500">
                <li>
                  <h3>Carefully designed</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typ esetting industry lorem Ipsum has.</p>
                </li>
                <li>
                  <h3>24/7 live support</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typ esetting industry lorem Ipsum has.</p>
                </li>
                <li>
                  <h3>Expert developer</h3>
                  <p>Simply dummy text of the printing and typesetting inustry lorem Ipsum has Lorem dollar summit.</p>
                </li>
                <li>
                  <h3>Ontime delivery</h3>
                  <p>Simply dummy text of the printing and typesetting inustry lorem Ipsum has Lorem dollar summit.</p>
                </li>
              </ul>
              <h3 data-aos="fade-up" data-aos-duration="1500">How we build your software</h3>
              <p data-aos="fade-up" data-aos-duration="1500">Lorem Ipsum is simply dummy text of the printing and
                typesetting industry lorem Ipsum has been the
                industrys standard dummy text ever since the when an utext ever since the when an unknown printer took a
                galley of type and.</p>
            </div>
          </div>
          <div className="col-lg-4">
          
            <div className="service_right_side">
              <div className="service_list_panel" data-aos="fade-up" data-aos-duration="1500">
                <h3>Services</h3>
                <ul className="service_list">
                  <li><Link to="/serviceDetail" className="active">Software Development</Link></li>
                  <li><Link to="/serviceDetail">Web Development</Link></li>
                  <li><Link to="/serviceDetail">Mobile Application</Link></li>
                  <li><Link to="/serviceDetail">Web Design</Link></li>
                  <li><Link to="/serviceDetail">Logo Design</Link></li>
                  <li><Link to="/serviceDetail">Print Design</Link></li>
                </ul>
              </div>
            
              <div className="side_contact_block" data-aos="fade-up" data-aos-duration="1500">
                <div className="icon"><i className="icofont-live-support"></i></div>
                <h3>Let’s work together</h3>
                <Link to="/contactus" className="btn btn_main">CONTACT US <i className="icofont-arrow-right"></i></Link>
                <p><Link to="tel:1234567899"><i className="icofont-phone-circle"></i> +1 123 456 7890</Link></p>
              </div>
              <div className="action_btn">
                <Link to="images/pdf-brochure.pdf" target="blank" className="btn" data-aos="fade-up" data-aos-duration="1500">
                  <span><i className="icofont-file-pdf"></i> </span>
                  <p>Company Profile</p>
                </Link>
                <Link to="images/pdf-brochure.pdf" target="blank" className="btn" data-aos="fade-up" data-aos-duration="1500">
                  <span><i className="icofont-file-powerpoint"></i> </span>
                  <p>Download PPT</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ServiceDetail
