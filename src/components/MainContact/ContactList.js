import React from 'react'
import { Link } from 'react-router-dom'


function ContactList() {
  return (
    <>
      <section className="row_am contact_list_section">
        <div className="container">

          <div className="contact_list_inner" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100">

            <div className="c_list_card">
              <div className="icons">
                <img src="assets/images/new/mail.png" alt="image" />
                <div className="dot_block">
                  <span className="dot_anim"></span>
                  <span className="dot_anim"></span>
                  <span className="dot_anim"></span>
                </div>
              </div>
              <div className="inner_text">
                <h3>Chat to sales</h3>
                <p>Let’s discuss with our sales team
                </p>
                <Link to="mailto:sales@magicmedia.ae" className="text_btn">sales@magicmedia.ae</Link>
              </div>
            </div>

            <div className="c_list_card">
              <div className="icons">
                <img src="assets/images/new/location.png" alt="image" />
                <div className="dot_block">
                  <span className="dot_anim"></span>
                  <span className="dot_anim"></span>
                  <span className="dot_anim"></span>
                </div>
              </div>
              <div className="inner_text">
                <h3>Visit our office</h3>
                <p>Reach us to our offcie and meest us
                </p>
                <Link to="#" className="text_btn">Cluster M1, 33rd Floor, HDS Business Centre Tower, Dubai, UAE</Link>
              </div>
            </div>

            <div className="c_list_card">
              <div className="icons">
                <img src="assets/images/new/phone.png" alt="image" />
                <div className="dot_block">
                  <span className="dot_anim"></span>
                  <span className="dot_anim"></span>
                  <span className="dot_anim"></span>
                </div>
              </div>
              <div className="inner_text">
                <h3>Call us</h3>
                <p>Call us directly with sales team
                </p>
                <Link to="tel:+971 52 4932595" className="text_btn">+971 52 4932595</Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default ContactList
