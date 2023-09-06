import React from 'react'
import OwlCarousel from 'react-owl-carousel';

function Interface() {
  let satting = {
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 2500,
    center: true,
    responsive: {
      0: {
        items: 1
      }, 600: {
        items: 2
      }
    }
  }
  return (
    <>
      <section className="row_am interface_section">
        <div className="section_title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
          <h2>Interface overview</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard
            dummy text ever since.
          </p>
        </div>

        <div className="screen_slider" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="100">
          <OwlCarousel {...satting} id="screen_slider" className="owl-carousel owl-theme">
            <div className="item">
              <div className="screen_frame_img">
                <img src="assets/images/new/Interface-overview-01.png" alt="image" />
                <h3 className="caption">Report Page</h3>
              </div>
            </div>
            <div className="item">
              <div className="screen_frame_img">
                <img src="assets/images/new/Interface-overview-02.png" alt="image" />
                <h3 className="caption">Dashboard</h3>
              </div>
            </div>
            <div className="item">
              <div className="screen_frame_img">
                <img src="assets/images/new/Interface-overview-03.png" alt="image" />
                <h3 className="caption">Report Page</h3>
              </div>
            </div>
            <div className="item">
              <div className="screen_frame_img">
                <img src="assets/images/new/Interface-overview-02.png" alt="image" />
                <h3 className="caption">Dashboard</h3>
              </div>
            </div>
            <div className="item">
              <div className="screen_frame_img">
                <img src="assets/images/new/Interface-overview-01.png" alt="image" />
                <h3 className="caption">Report Page</h3>
              </div>
            </div>
            <div className="item">
              <div className="screen_frame_img">
                <img src="assets/images/new/Interface-overview-03.png" alt="image" />
                <h3 className="caption">Report Page</h3>
              </div>
            </div>
          </OwlCarousel>
        </div>

      </section>
    </>
  )
}

export default Interface
