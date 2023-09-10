import React from 'react'
import { Link } from 'react-router-dom'


function ServiceList2col() {
  return (
    <>
       <section className="row_am service_list_two_colom">
      <div className="container">
        <div className="row">

     
          <div className="col-md-6">
            <div className="sl_two_colom_text" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100">
              <div className="section_title">
                <h2>Pre-Roll In-Stream Video. </h2>
                <p>Works in all major video players, ads show up before your website content plays and gives the user an option to skip the ad after a preset amount of time. Video ads are user friendly and non intrusive to give your visitors a great viewing experience. 
                  Available on CPM basis.</p>
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
                  <h3>Pin Point Targets</h3>
                </li>
                <li data-aos="fade-up" data-aos-duration="2000">
                  <h3>Huge Volume</h3>
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

export default ServiceList2col
