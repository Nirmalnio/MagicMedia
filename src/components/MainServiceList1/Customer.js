import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel'


function Customer() {
  let satting = {
    loop: true, 
    margin: 10, 
    nav: false, 
    autoplay: true, 
    smartSpeed: 1500, 
    dots: true, 
    responsive: {
      0: {
        items: 1
      }, 600: {
        items: 1
      }, 1000: {
        items: 1
      }
    }
}
  return (
    <>
      <section className="customer_section">
      <div className="coustomer_block" data-aos="fade-up" data-aos-duration="1000">
        <div className="section_title" data-aos="fade-in" data-aos-duration="1000">
          <h2>What our customer says</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard
            dummy text ever since.</p>
        </div>
        <OwlCarousel {...satting} id="coustomer_slider" className="owl-carousel owl-theme" data-aos="fade-in" data-aos-duration="1000">
          <div className="item">
            <div className="coustomer_slide_block">
              <div className="coustomer_img">
                <img src="assets/images/new/testimonial-01.png" alt="image"/>
              </div>
              <div className="coustomer_review">
                <div className="rating">
                  <span><i className="icofont-star"></i></span>
                  <span><i className="icofont-star"></i></span>
                  <span><i className="icofont-star"></i></span>
                  <span><i className="icofont-star"></i></span>
                  <span><i className="icofont-star"></i></span>
                </div>
                <p>Lorem Ipsum is simply dummy text of the print ing and typese tting us orem Ipsum has been lorem
                  beenthe standar ddummy Lorem Ipsum is simply mmy text of the print ing and typese tting us orem Ipsum
                  has lorem Ipsum has lorem beenthe standar ddummy. </p>
                <h3 className="coustomer_name">Shayna John</h3>
                <span className="desiganation">Careative inc</span>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="coustomer_slide_block">
              <div className="coustomer_img">
                <img src="assets/images/new/testimonial-02.png" alt="image"/>
              </div>
              <div className="coustomer_review">
                <div className="rating">
                  <span><i className="icofont-star"></i></span>
                  <span><i className="icofont-star"></i></span>
                  <span><i className="icofont-star"></i></span>
                  <span><i className="icofont-star"></i></span>
                  <span><i className="icofont-star"></i></span>
                </div>
                <p>Lorem Ipsum is simply dummy text of the print ing and typese tting us orem Ipsum has been lorem
                  beenthe standar ddummy Lorem Ipsum is simply mmy text of the print ing and typese tting us orem Ipsum
                  has lorem Ipsum has lorem beenthe standar ddummy. </p>
                <h3 className="coustomer_name">Wilium Smith</h3>
                <span className="desiganation">Fish Kreativ</span>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="coustomer_slide_block">
              <div className="coustomer_img">
                <img src="assets/images/new/testimonial-03.png" alt="image"/>
              </div>
              <div className="coustomer_review">
                <div className="rating">
                  <span><i className="icofont-star"></i></span>
                  <span><i className="icofont-star"></i></span>
                  <span><i className="icofont-star"></i></span>
                  <span><i className="icofont-star"></i></span>
                  <span><i className="icofont-star"></i></span>
                </div>
                <p>Lorem Ipsum is simply dummy text of the print ing and typese tting us orem Ipsum has been lorem
                  beenthe standar ddummy Lorem Ipsum is simply mmy text of the print ing and typese tting us orem Ipsum
                  has lorem Ipsum has lorem beenthe standar ddummy. </p>
                <h3 className="coustomer_name">John Doe</h3>
                <span className="desiganation">Digital People</span>
              </div>
            </div>
          </div>

        </OwlCarousel>
      </div>
      <div className="review_summery" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
        <div className="rating">
          <span><i className="icofont-star"></i></span>
          <span><i className="icofont-star"></i></span>
          <span><i className="icofont-star"></i></span>
          <span><i className="icofont-star"></i></span>
          <span><i className="icofont-star"></i></span>
        </div>
        <p><span>5.0 / 5.0 -</span> <Link to="/testimonial">3689 Total User Reviews <i className="icofont-arrow-right"></i></Link></p>
      </div>
    </section>
    </>
  )
}

export default Customer
