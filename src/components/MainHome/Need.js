import React from 'react'
import { Link } from 'react-router-dom'

function Need() {
  return (
    <>
      <section className="need_section">
        <div className="need_section_inner">
          <div className="container">
            <div className="need_block">
              <div className="need_text">
                <div className="section_title">
                  <h2>Need support ? contact our team</h2>
                  <p><i className="icofont-clock-time"></i> Mon - Fri: 9 am to 5 am</p>
                </div>
              </div>
              <div className="need_action">
                <Link to="tel:1234567899" className="btn"><i className="icofont-phone-circle"></i> +1 123 456 7890</Link>
                <Link to="#faqBlock" className="faq_btn">Read The FAQ </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Need
