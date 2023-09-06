import React from 'react'
import { Link } from 'react-router-dom'

function Comments() {
  return (
    <div>
       <section className="row_am comment_section">
      <div className="container">
        <div className="blog_cooment_block">
          <div className="posted_cooment">
            <div className="section_title" data-aos="fade-up" data-aos-duration="1500">
              <h2>3 Comments</h2>
            </div>
            <ul>
              <li data-aos="fade-up" data-aos-duration="1500">
                <div className="authore_info">
                  <div className="avtar">
                    <img src="assets/images/blog_d01.png" alt="image"/>
                  </div>
                  <div className="text">
                    <span>30 min ago</span>
                    <h4>John Due</h4>
                  </div>
                </div>
                <div className="comment">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been
                    theindustrys standard dummy text ever since the when an unknown printer. </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-duration="1500" className="replay_comment">
                <div className="authore_info">
                  <div className="avtar">
                    <img src="assets/images/blog_d02.png" alt="image"/>
                  </div>
                  <div className="text">
                    <span>50 min ago</span>
                    <h4>Lily Joo</h4>
                  </div>
                </div>
                <div className="comment">
                  <p>Printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever since
                    the
                    when an unknown printer.</p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-duration="1500">
                <div className="authore_info">
                  <div className="avtar">
                    <img src="assets/images/blog_d03.png" alt="image"/>
                  </div>
                  <div className="text">
                    <span>1 days ago</span>
                    <h4>Cyrus Loy</h4>
                  </div>
                </div>
                <div className="comment">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting in dustry lorem Ipsum has been the
                    in
                    dustrys standard dummy text ev er since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen. </p>
                </div>
              </li>
            </ul>
          </div>
  
          <div className="comment_form_section">
            <div className="section_title" data-aos="fade-up" data-aos-duration="1500">
              <h2>Leave a <span>comment</span></h2>
              <p>Your email address will not be published. Required fields are marked *</p>
            </div>
            <form action="submit" data-aos="fade-up" data-aos-duration="1500">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name *"/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email *"/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Phone"/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Website  "/>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea className="form-control" placeholder="Comments"></textarea>
                  </div>
                </div>
                <div className="col-md-12 text-left">
                  <button className="btn btn_main" type="submit">POST COMMENTS <i className="icofont-arrow-right"></i></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Comments
