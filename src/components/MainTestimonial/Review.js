import React from 'react'

function Review() {
  return (
    <>
      <section className="review_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="review_box" data-aos="fade-up" data-aos-duration="2000">
              <div className="icon"><img src="assets/images/new/google.png" alt="image"/></div>
              <div className="rating">
                <span><i className="icofont-star"></i></span>
                <span><i className="icofont-star"></i></span>
                <span><i className="icofont-star"></i></span>
                <span><i className="icofont-star"></i></span>
                <span><i className="icofont-star"></i></span>
              </div>
              <div className="text">
                <h3><span className="main_rating">4.9</span> out of 5 Based on
                  <span className="total_review">485 Reviews</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="review_box" data-aos="fade-up" data-aos-duration="2000">
              <div className="icon"><img src="assets/images/new/clutch.png" alt="image"/></div>
              <div className="rating">
                <span><i className="icofont-star"></i></span>
                <span><i className="icofont-star"></i></span>
                <span><i className="icofont-star"></i></span>
                <span><i className="icofont-star"></i></span>
                <span><i className="icofont-star"></i></span>
              </div>
              <div className="text">
                <h3><span className="main_rating">4.8</span> out of 5 Based on
                  <span className="total_review">390 Reviews</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="review_box" data-aos="fade-up" data-aos-duration="2000">
              <div className="icon"><img src="assets/images/new/capterra.png" alt="image"/></div>
              <div className="rating">
                <span><i className="icofont-star"></i></span>
                <span><i className="icofont-star"></i></span>
                <span><i className="icofont-star"></i></span>
                <span><i className="icofont-star"></i></span>
                <span><i className="icofont-star"></i></span>
              </div>
              <div className="text">
                <h3><span className="main_rating">4.6</span> out of 5 Based on
                  <span className="total_review">276 Reviews</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Review
