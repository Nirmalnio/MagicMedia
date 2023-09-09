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
              <img src="https://mediacity.co.in/codely/4/assets/images/new/service_list_img2.png" alt="image"/>
            </div>
          </div>

          
          <div className="col-md-6">
            <div className="sl_two_colom_text" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100">
              <div className="section_title">
                <h2>Regular Display Ads. </h2>
                <p>Our auto generated ad channel creation tool will have your standard tube site ad channels created in under one minute. We offer a standard layout, you pick and choose which options you want, assign some categories and click a button, done. 
                  You can now get your ad tags to start making money instantly with us.</p>
              </div>
              
              <div className="service_list_point">
                <ul data-aos="fade-up" data-aos-duration="2000">
                  <li> <i className="icofont-check-circled"></i> Focused Ads </li>
                  <li> <i className="icofont-check-circled"></i> Simple Setup </li>
                  <li> <i className="icofont-check-circled"></i>  Quality Traffic </li>
                  <li> <i className="icofont-check-circled"></i> High CTR</li>
                </ul>
              </div>

              {/* <Link to="/serviceDetail" data-aos="fade-up" data-aos-duration="2000" className="btn btn_main aos-init aos-animate">READ MORE <i className="icofont-arrow-right"></i></Link> */}
            </div>
          </div>

        </div>
      </div>
    </section>
    <section className="row_am service_list_two_colom">
      <div className="container">
        <div className="row">

     
          <div className="col-md-6">
            <div className="sl_two_colom_text" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100">
              <div className="section_title">
                <h2>Pop Under Ads </h2>
                <p>Pop under ads are as tried and tested as the internet itself. 
                  A great method of advertising, pop under ads open and remain in the background while the user goes about their surfing. Once activated upon user closing their browser, your content is directly in their face and you have a large window to convince them to be come a customer. 
                  Sold on CPM basis.</p>
              </div>
              <ul>
                <li data-aos="fade-up" data-aos-duration="2000">
                  <h3>Top Conversations</h3>
                  {/* <p>Lorem Ipsum is simply dummy text of the printing and typ esetting industry lorem Ipsum has.</p> */}
                </li>
                <li data-aos="fade-up" data-aos-duration="2000">
                  <h3>Easy Implementation</h3>
                </li>
                <li data-aos="fade-up" data-aos-duration="2000">
                  <h3>Captivating</h3>
                </li>
                <li data-aos="fade-up" data-aos-duration="2000">
                  <h3>Scalable</h3>
                </li>
              </ul>
              {/* <Link to="/serviceDetail" data-aos="fade-up" data-aos-duration="2000" className="btn btn_main aos-init aos-animate">READ MORE <i className="icofont-arrow-right"></i></Link> */}
            </div>
          </div>

       
          <div className="col-md-6">
            <div className="sl_two_colom_image" data-aos="fade-in" data-aos-duration="1000">
              <img src="https://mediacity.co.in/codely/4/assets/images/new/service_list_img1.png" alt="image"/>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default ServiceList2
