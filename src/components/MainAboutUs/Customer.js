import React from 'react'
import { Link } from 'react-router-dom'


function Customer() {
  return (
    <>
      <section className="what_coustomer_says">
        <div className="container">
          <div className="section_title" data-aos="fade-up" data-aos-duration="1500">
            <h2>What our customer says</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus <br /> orem Ipsum has beenthe
              standard dummy text ever since.</p>
          </div>
          <div id="coustomer_slider_white" className="owl-carousel owl-theme" data-aos="fade-in" data-aos-duration="1500">
            <div className="item">
              <div className="coustomer_slide_box">
                <div className="rating">
                  <span><i className="icofont-star"></i></span>
                  <span><i className="icofont-star"></i></span>
                  <span><i className="icofont-star"></i></span>
                  <span><i className="icofont-star"></i></span>
                  <span><i className="icofont-star"></i></span>
                </div>
                <p>Lorem Ipsum is simply dummy text of the print ing and typese tting us orem Ipsum has been.</p>
                <div className="avtar_profil">
                  <div className="avatr">
                    <img src="assets/images/new/testi_01.png" alt="image" />
                  </div>
                  <div className="text">
                    <h3>Shayna john</h3>
                    <span>Careative inc.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="coustomer_slide_box">
                <div className="rating">
                  <span><i className="icofont-star"></i></span>
                  <span><i className="icofont-star"></i></span>
                  <span><i className="icofont-star"></i></span>
                  <span><i className="icofont-star"></i></span>
                  <span><i className="icofont-star"></i></span>
                </div>
                <p>Simply dummy text of the print ing and typese tting us orem Ipsum has been lorem Ipsum.</p>
                <div className="avtar_profil">
                  <div className="avatr">
                    <img src="assets/images/new/testi_02.png" alt="image" />
                  </div>
                  <div className="text">
                    <h3>Mark </h3>
                    <span>Careative inc.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="coustomer_slide_box">
                <div className="rating">
                  <span><i className="icofont-star"></i></span>
                  <span><i className="icofont-star"></i></span>
                  <span><i className="icofont-star"></i></span>
                  <span><i className="icofont-star"></i></span>
                  <span><i className="icofont-star"></i></span>
                </div>
                <p>Lorem Ipsum is simply dummy text of the print ing and typese tting us orem Ipsum has been.</p>
                <div className="avtar_profil">
                  <div className="avatr">
                    <img src="assets/images/new/testi_01.png" alt="image" />
                  </div>
                  <div className="text">
                    <h3>Willium Joe</h3>
                    <span>Careative inc.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="coustomer_slide_box">
                <div className="rating">
                  <span><i className="icofont-star"></i></span>
                  <span><i className="icofont-star"></i></span>
                  <span><i className="icofont-star"></i></span>
                  <span><i className="icofont-star"></i></span>
                  <span><i className="icofont-star"></i></span>
                </div>
                <p>Lorem Ipsum is simply dummy text of the print ing and typese tting us orem Ipsum has been.</p>
                <div className="avtar_profil">
                  <div className="avatr">
                    <img src="assets/images/new/testi_03.png" alt="image" />
                  </div>
                  <div className="text">
                    <h3>Shayna john</h3>
                    <span>Careative inc.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="review_summery">
            <div className="rating">
              <span><i className="icofont-star"></i></span>
              <span><i className="icofont-star"></i></span>
              <span><i className="icofont-star"></i></span>
              <span><i className="icofont-star"></i></span>
              <span><i className="icofont-star"></i></span>
            </div>
            <p><span>5.0 / 5.0 -</span> <Link to="/testimonial">3689 Total User Reviews <i className="icofont-arrow-right"></i></Link></p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Customer
