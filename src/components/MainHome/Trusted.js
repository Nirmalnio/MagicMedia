import React from 'react';
import OwlCarousel from 'react-owl-carousel';

function Trusted() {
  const satting = {
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  };

  const logos = [
    'https://www.iavatarz.com/wp-content/uploads/2014/03/yahoo-india.png',
    'https://www.iavatarz.com/wp-content/uploads/2014/03/alibaba.png',
    'https://www.iavatarz.com/wp-content/uploads/2014/03/hp.png',
    'https://www.iavatarz.com/wp-content/uploads/2014/03/jumeirah.png',
    'https://www.iavatarz.com/wp-content/uploads/2014/03/lg.png',
    'https://www.iavatarz.com/wp-content/uploads/2014/03/panasonic.png',
    'https://www.iavatarz.com/wp-content/uploads/2014/03/samsung.png',
    'https://www.iavatarz.com/wp-content/uploads/2014/03/tata-aig.png',
    'https://www.iavatarz.com/wp-content/uploads/2014/03/icici-bank.png',
    'https://www.iavatarz.com/wp-content/uploads/2014/03/nokia.png',
    'https://www.iavatarz.com/wp-content/uploads/2014/03/sony-erricsson.png'
  ];

  return (
    <section className="row_am trusted_section">
      <div className="container">
        <div
          className="section_title"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="100"
        >
          <h2>
          CLIENTS
          </h2>
          {/* <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            <br /> indus orem Ipsum has beenthe standard dummy.
          </p> */}
        </div>

        <div
          className="company_logos"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="100"
        >
          <OwlCarousel {...satting} id="company_slider" className="owl-carousel owl-theme">
            {logos.map((logo, index) => (
              <div className="item" key={index}>
                <div className="logo">
                  <img src={logo} alt="image" />
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  )
}

export default Trusted;
