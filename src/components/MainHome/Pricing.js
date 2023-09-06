import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Pricing() {
  const [active, setActive] = useState(false)
  return (
    <>
      <section className="row_am pricing_section" id="pricing" data-aos="fade-in" data-aos-duration="1000">

        <div className="container">
          <div className="section_title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
            <h2>Best plans, pay what you use</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus <br /> orem Ipsum has beenthe
              standard dummy text ever since.</p>
          </div>

          <div className="toggle_block" data-aos="fade-up" data-aos-duration="1500">
            <span className={`month ${!active && "active"}`}>Monthly</span>
            <div className="tog_block" onClick={() => {
              setActive(!active);
            }}>
              <span className={`tog_btn ${active && "month_active"}`}></span>
            </div>
            <span className={`years ${active && "active"}`}>Yearly</span>
            <span className="offer">50% off</span>
          </div>



          <div className="pricing_pannel monthly_plan active" data-aos="fade-up" data-aos-duration="1500">

            <div className="row">

              <div className="col-md-4">
                <div className="pricing_block">
                  <div className="icon">
                    <img src="assets/images/new/Free-Trial-01.svg" alt="image" />
                    <div className="dot_block">
                      <span className="dot_anim"></span>
                      <span className="dot_anim"></span>
                      <span className="dot_anim"></span>
                    </div>
                  </div>
                  <div className="pkg_name">
                    <h3>Free Trial</h3>
                    <span>For the basics</span>
                  </div>
                  <span className="price">$0<span>/Month</span></span>
                  <ul className="benifits">
                    <li className="include">
                      <p><i className="icofont-check-circled"></i>7 Days free trial</p>
                    </li>
                    <li className="include">
                      <p><i className="icofont-check-circled"></i>2 platform of your choice</p>
                    </li>
                    <li className="include">
                      <p><i className="icofont-check-circled"></i>10 GB Dedicated Hosting free</p>
                    </li>
                    <li className="exclude">
                      <p><i className="icofont-close-circled"></i>Unlimited updates</p>
                    </li>
                    <li className="exclude">
                      <p><i className="icofont-close-circled"></i>Live support</p>
                    </li>
                  </ul>
                  <Link to="#" className="btn btn_main">BUY NOW <i className="icofont-arrow-right"></i></Link>
                </div>
              </div>

              <div className="col-md-4">
                <div className="pricing_block highlited_block">
                  <div className="icon">
                    <img src="assets/images/new/unlimited.png" alt="image" />
                    <div className="dot_block">
                      <span className="dot_anim"></span>
                      <span className="dot_anim"></span>
                      <span className="dot_anim"></span>
                    </div>
                  </div>
                  <div className="pkg_name">
                    <h3>Unlimited</h3>
                    <span>For the professionals</span>
                  </div>
                  <span className="price">${active ? 999 : 99}<span>/Month</span></span>
                  <ul className="benifits">
                    <li className="include">
                      <p><i className="icofont-check-circled"></i>7 Days free trial</p>
                    </li>
                    <li className="include">
                      <p><i className="icofont-check-circled"></i>2 platform of your choice</p>
                    </li>
                    <li className="include">
                      <p><i className="icofont-check-circled"></i>10 GB Dedicated Hosting free</p>
                    </li>
                    <li className="include">
                      <p><i className="icofont-check-circled"></i>Unlimited updates</p>
                    </li>
                    <li className="include">
                      <p><i className="icofont-check-circled"></i>Live support</p>
                    </li>
                  </ul>
                  <Link to="#" className="btn btn_main">BUY NOW <i className="icofont-arrow-right"></i></Link>
                </div>
              </div>


              <div className="col-md-4">
                <div className="pricing_block">
                  <div className="icon">
                    <img src="assets/images/new/Premium.svg" alt="image" />
                    <div className="dot_block">
                      <span className="dot_anim"></span>
                      <span className="dot_anim"></span>
                      <span className="dot_anim"></span>
                    </div>
                  </div>
                  <div className="pkg_name">
                    <h3>Premium</h3>
                    <span>For small team</span>
                  </div>
                  <span className="price">${active ? 555 : 55}<span>/Month</span></span>
                  <ul className="benifits">
                    <li className="include">
                      <p><i className="icofont-check-circled"></i>7 Days free trial</p>
                    </li>
                    <li className="include">
                      <p><i className="icofont-check-circled"></i>2 platform of your choice</p>
                    </li>
                    <li className="include">
                      <p><i className="icofont-check-circled"></i>10 GB Dedicated Hosting free</p>
                    </li>
                    <li className="include">
                      <p><i className="icofont-check-circled"></i>Unlimited updates</p>
                    </li>
                    <li className="exclude">
                      <p><i className="icofont-close-circled"></i>Live support</p>
                    </li>
                  </ul>
                  <Link to="#" className="btn btn_main">BUY NOW <i className="icofont-arrow-right"></i></Link>
                </div>
              </div>
            </div>

          </div>

          <div className="pricing_pannel yearly_plan" data-aos="fade-up" data-aos-duration="1500">
            <div className="row">

              <div className="col-md-4">
                <div className="pricing_block">
                  <div className="icon">
                    <img src="assets/images/new/Free-Trial-01.svg" alt="image" />
                    <div className="dot_block">
                      <span className="dot_anim"></span>
                      <span className="dot_anim"></span>
                      <span className="dot_anim"></span>
                    </div>
                  </div>
                  <div className="pkg_name">
                    <h3>Free Trial</h3>
                    <span>For the basics</span>
                  </div>
                  <span className="price">$0<span>/Year</span></span>
                  <ul className="benifits">
                    <li className="include">
                      <p><i className="icofont-check-circled"></i>7 Days free trial</p>
                    </li>
                    <li className="include">
                      <p><i className="icofont-check-circled"></i>2 platform of your choice</p>
                    </li>
                    <li className="include">
                      <p><i className="icofont-check-circled"></i>10 GB Dedicated Hosting free</p>
                    </li>
                    <li className="exclude">
                      <p><i className="icofont-close-circled"></i>Unlimited updates</p>
                    </li>
                    <li className="exclude">
                      <p><i className="icofont-close-circled"></i>Live support</p>
                    </li>
                  </ul>
                  <Link to="#" className="btn btn_main">BUY NOW <i className="icofont-arrow-right"></i></Link>
                </div>
              </div>


              <div className="col-md-4">
                <div className="pricing_block highlited_block">
                  <div className="icon">
                    <img src="assets/images/new/unlimited.png" alt="image" />
                    <div className="dot_block">
                      <span className="dot_anim"></span>
                      <span className="dot_anim"></span>
                      <span className="dot_anim"></span>
                    </div>
                  </div>
                  <div className="pkg_name">
                    <h3>Unlimited</h3>
                    <span>For the professionals</span>
                  </div>
                  <span className="price">$999<span>/Year</span></span>
                  <ul className="benifits">
                    <li className="include">
                      <p><i className="icofont-check-circled"></i>7 Days free trial</p>
                    </li>
                    <li className="include">
                      <p><i className="icofont-check-circled"></i>2 platform of your choice</p>
                    </li>
                    <li className="include">
                      <p><i className="icofont-check-circled"></i>10 GB Dedicated Hosting free</p>
                    </li>
                    <li className="include">
                      <p><i className="icofont-check-circled"></i>Unlimited updates</p>
                    </li>
                    <li className="include">
                      <p><i className="icofont-check-circled"></i>Live support</p>
                    </li>
                  </ul>
                  <Link to="#" className="btn btn_main">BUY NOW <i className="icofont-arrow-right"></i></Link>
                </div>
              </div>


              <div className="col-md-4">
                <div className="pricing_block">
                  <div className="icon">
                    <img src="assets/images/new/Premium.svg" alt="image" />
                    <div className="dot_block">
                      <span className="dot_anim"></span>
                      <span className="dot_anim"></span>
                      <span className="dot_anim"></span>
                    </div>
                  </div>
                  <div className="pkg_name">
                    <h3>Premium</h3>
                    <span>For small team</span>
                  </div>
                  <span className="price">$555<span>/Year</span></span>
                  <ul className="benifits">
                    <li className="include">
                      <p><i className="icofont-check-circled"></i>7 Days free trial</p>
                    </li>
                    <li className="include">
                      <p><i className="icofont-check-circled"></i>2 platform of your choice</p>
                    </li>
                    <li className="include">
                      <p><i className="icofont-check-circled"></i>10 GB Dedicated Hosting free</p>
                    </li>
                    <li className="include">
                      <p><i className="icofont-check-circled"></i>Unlimited updates</p>
                    </li>
                    <li className="exclude">
                      <p><i className="icofont-close-circled"></i>Live support</p>
                    </li>
                  </ul>
                  <Link to="#" className="btn btn_main">BUY NOW <i className="icofont-arrow-right"></i></Link>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Pricing
