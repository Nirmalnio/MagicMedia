import React from 'react'
import { Link } from 'react-router-dom'

function ServiceDetailsBrand() {
  return (
  <section className="service_detail_section" style={{marginTop:"-40px"}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
       
          <div className="service_left_side">
            {/* <div className="section_title" data-aos="fade-up" data-aos-duration="2000">
              <h2>Bug free software development
                services provider</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the
                industrys standard dummy text ever since the when an unknown printer took a galley of type and.
                scrambled it to make a type specimen book.</p>
            </div>
            <div className="img" data-aos="fade-up" data-aos-duration="2000">
              <img src="assets/images/new/service-img.png" alt="image"/>
            </div> */}
            <h3 data-aos="fade-up" data-aos-duration="1500">Measurable results driven by performance</h3>
            <p data-aos="fade-up" data-aos-duration="1500">High-quality traffic standards are the core pillars our marketplace is built on. Technology is the first element of it and professionalism is the other. Our traffic quality verification team keeps a hand on the pulse of programmatic buying and selling so that you could focus on things that matter: Growing your media-buying or media-selling strategy Enhancing the user experience. </p>
            <ul className="list_block" data-aos="fade-up" data-aos-duration="1500">
              <li>
                <h3>Protection by prevention</h3>
                <p>We teamed up with strategic brand safety traffic partners and developed advantageous anti-fraud practices that outrun all kinds of ad fraud, including bots, click hijacking, cookie-stuffing, malware, and external attacks. In real-time, with Machine Learning, the system analyzes traffic and blocks sources where suspicious patterns occur.</p>
              </li>
              <li>
                <h3>Protected in-app experience</h3>
                <p>Today mobile environment is especially vulnerable to threats associated with fraudulent activities. That’s why the paradigm of internal app protection in our SDK is based on the timely identification and in-depth analysis of user behavioral parameters, patterns, and fraud initiation scenarios.</p>
              </li>
              <li>
                <h3>Multi-layered scanning</h3>
                <p>We developed a combination of strategic and tactical steps that help us deliver verifiable traffic at all times. Additionally, you can manage and adjust the traffic to your own needs using proprietary tools of our platform. You can.</p>
              </li>
              <li>
                <h3>Integrated with programmatic infrastructure</h3>
                <p>Integrated with programmatic infrastructure. GothamAds SSP connects to the robust programmatic
                   hub featuring top 250+ direct and RTB demand partners globally</p>
              </li>
            </ul>
            <h3 data-aos="fade-up" data-aos-duration="1500">Viewability and transparency at scale</h3>
            <p data-aos="fade-up" data-aos-duration="1500">
            This all we can do for you on manage-serve DSP! Our dedicated team of account managers will assist you on every stage of campaign development: from the very start to optimizing CPMs, GEOs, publishers, demand type, traffic verticals according to your objectives and KPI.
            </p>
          </div>
        </div>
        <div /* className="col-lg-4" */>
        
          <div className="service_right_side">
            {/* <div className="service_list_panel" data-aos="fade-up" data-aos-duration="1500">
              <h3>Services</h3>
              <ul className="service_list">
                <li><Link to="/serviceDetail" className="active">Software Development</Link></li>
                <li><Link to="/serviceDetail">Web Development</Link></li>
                <li><Link to="/serviceDetail">Mobile Application</Link></li>
                <li><Link to="/serviceDetail">Web Design</Link></li>
                <li><Link to="/serviceDetail">Logo Design</Link></li>
                <li><Link to="/serviceDetail">Print Design</Link></li>
              </ul>
            </div> */}
          
            {/* <div className="side_contact_block" data-aos="fade-up" data-aos-duration="1500">
              <div className="icon"><i className="icofont-live-support"></i></div>
              <h3>Let’s work together</h3>
              <Link to="/contactus" className="btn btn_main">CONTACT US <i className="icofont-arrow-right"></i></Link>
              <p><Link to="tel:1234567899"><i className="icofont-phone-circle"></i>+971 52 4932595</Link></p>
            </div> */}
            {/* <div className="action_btn">
              <Link to="images/pdf-brochure.pdf" target="blank" className="btn" data-aos="fade-up" data-aos-duration="1500">
                <span><i className="icofont-file-pdf"></i> </span>
                <p>Company Profile</p>
              </Link>
              <Link to="images/pdf-brochure.pdf" target="blank" className="btn" data-aos="fade-up" data-aos-duration="1500">
                <span><i className="icofont-file-powerpoint"></i> </span>
                <p>Download PPT</p>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ServiceDetailsBrand