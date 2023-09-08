import React from 'react'
import { Link } from 'react-router-dom'

function ServiceDetailsPublic() {
  return (
    <section className="service_detail_section">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
       
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
            <h3 data-aos="fade-up" data-aos-duration="1500">Adjusted to serve advertiser's needs</h3>
            <p data-aos="fade-up" data-aos-duration="1500">In order to let your display ads be seen by the right users at the right time, we created an interface where you can manage, optimize, and run your campaigns in real-time.
            </p>
            <ul className="list_block" data-aos="fade-up" data-aos-duration="1500">
              <li>
                <h3>Bid management autopilot</h3>
                <p>AI algorithms automatically manage your bids to offer the optimal price for an impression and keep your budget sound.</p>
              </li>
              <li>
                <h3>Retargeting</h3>
                <p>Turn unconverted users into customers. Remind them about your offer by launching retargeting campaigns on different screens and channels.</p>
              </li>
              <li>
                <h3>Geo targeting</h3>
                <p>Integration with our internal DMP connects both DSP and SSP platforms to the extended targeting options which make advertising relevant, and results in higher view-ability, win-rate, and ROI</p>
              </li>
              <li>
                <h3>Secure advertising ecosystem</h3>
                <p>We show your ads only to the real people. Quality of impressions is guaranteed by partnerships with international traffic validators and by in-house tools.</p>
              </li>
              <li>
                <h3>Campaign controls</h3>
                <p>You can set up preferable placements, channels, ad resolutions, view frequency, and budget spend to let campaign hit the right KPI.</p>
              </li>
              <li>
                <h3>Detailed reporting</h3>
                <p>Useful insights about campaign performance, including number of Impressions, Spend, CPM, eCPM, CTR, etc. can be generated via daily report or through API reporting link.</p>
              </li>
            </ul>
            {/* <h3 data-aos="fade-up" data-aos-duration="1500">How we build your software</h3> */}
            <p data-aos="fade-up" data-aos-duration="1500">This all we can do for you on manage-serve DSP! Our dedicated team of account managers will assist you on every stage of campaign development: from the very start to optimizing CPMs, GEOs, publishers, demand type, traffic verticals according to your objectives and KPI.</p>
          </div>
        </div>
        <div className="col-lg-4">
        
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
          
            <div className="side_contact_block" data-aos="fade-up" data-aos-duration="1500">
              <div className="icon"><i className="icofont-live-support"></i></div>
              <h3>Let’s work together</h3>
              <Link to="/contactus" className="btn btn_main">CONTACT US <i className="icofont-arrow-right"></i></Link>
              <p><Link to="tel:1234567899"><i className="icofont-phone-circle"></i>+971 52 4932595</Link></p>
            </div>
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

export default ServiceDetailsPublic