import React from 'react'
import { Link } from 'react-router-dom'


function ServiceDetailsAdformat() {
    return (
        <>
            <section className="service_detail_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">

                            <div className="service_left_side">
                                {/* <div className="section_title" data-aos="fade-up" data-aos-duration="2000">
              <h2>Bug free software development
                services provider</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the
                industrys standard dummy text ever since the when an unknown printer took a galley of type and.
                scrambled it to make a type specimen book.</p>
            </div>*/}
           
                                <h3 data-aos="fade-up" data-aos-duration="1500">More Formats</h3>
                                <p data-aos="fade-up" data-aos-duration="1500">We offer most industry standard ad formats for Publishers and Advertisers, our system is not limited and we constantly update our ad options to stay current with the demands of the modern day advertising industry. Here are some more examples of what we offer</p>
                                <ul className="list_block" data-aos="fade-up" data-aos-duration="1500">
                                    <li>
                                        <h3>Video Slider</h3>
                                        {/* <p>We teamed up with strategic brand safety traffic partners and developed advantageous anti-fraud practices that outrun all kinds of ad fraud, including bots, click hijacking, cookie-stuffing, malware, and external attacks. In real-time, with Machine Learning, the system analyzes traffic and blocks sources where suspicious patterns occur.</p> */}
                                    </li>
                                    <li>
                                        <h3>In-Video Banner</h3>
                                        {/* <p>Today mobile environment is especially vulnerable to threats associated with fraudulent activities. That’s why the paradigm of internal app protection in our SDK is based on the timely identification and in-depth analysis of user behavioral parameters, patterns, and fraud initiation scenarios.</p> */}
                                    </li>
                                    <li>
                                        <h3>Large Footer</h3>
                                        {/* <p>We developed a combination of strategic and tactical steps that help us deliver verifiable traffic at all times. Additionally, you can manage and adjust the traffic to your own needs using proprietary tools of our platform. You can.</p> */}
                                    </li>
                                    <li>
                                        <h3>Video Banners</h3>
                                        {/* <p>Integrated with programmatic infrastructure. GothamAds SSP connects to the robust programmatic
                                            hub featuring top 250+ direct and RTB demand partners globally</p> */}
                                    </li>
                                    <li>
                                        <h3>Pop Unders</h3>
                                        {/* <p>Integrated with programmatic infrastructure. GothamAds SSP connects to the robust programmatic
                                            hub featuring top 250+ direct and RTB demand partners globally</p> */}
                                    </li>
                                    <li>
                                        <h3>Push Notifications</h3>
                                        {/* <p>Integrated with programmatic infrastructure. GothamAds SSP connects to the robust programmatic
                                            hub featuring top 250+ direct and RTB demand partners globally</p> */}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>

                            <div className="service_right_side">
                            <div className="img" data-aos="fade-up" data-aos-duration="2000">
              <img src="https://mediacity.co.in/codely/4/assets/images/new/service-img.png" alt="image"/>
            </div> 
                                {/* <div className="side_contact_block" data-aos="fade-up" data-aos-duration="1500">
                                    <div className="icon"><i className="icofont-live-support"></i></div>
                                    <h3>Let’s work together</h3>
                                    <Link to="/contactus" className="btn btn_main">CONTACT US <i className="icofont-arrow-right"></i></Link>
                                    <p><Link to="tel:1234567899"><i className="icofont-phone-circle"></i>+971 52 4932595</Link></p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceDetailsAdformat