import React from 'react'
import { Link } from 'react-router-dom'

function BlogDetails() {
  return (
    <>
     <section className="blog_detail_section" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">
      <div className="container">
        <div className="blog_inner_pannel">
          <div className="blog_info" data-aos="fade-up" data-aos-duration="2000">
            <span className="date">12 Dec, 2022</span>
            <h1>Providing IT solution that diverse business verticals lorem ipsum</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and types etting industry lorem Ipsum has been the
              indu has been the industrys standard dummy text ever since the when an unknown printer took a galley
              of type and.</p>
            <div className="authore_block" data-aos="fade-up" data-aos-duration="1000">
              <div className="authore">
                <div className="img">
                  <img src="assets/images/new/authore_01.png" alt="image"/>
                </div>
                <div className="text">
                  <h4>Stephan Joe</h4>
                  <span>Author</span>
                </div>
              </div>
              <div className="blog_tag">
                <span>Software</span>
              </div>
            </div>
          </div>
          <div className="main_img" data-aos="fade-up" data-aos-duration="1500">
            <img src="assets/images/new/blog-detail.png" alt="image"/>
          </div>
          <div className="info" data-aos="fade-up" data-aos-duration="1500">
            <h2>Lorem Ipsum is simply dummy text of the printing
              and typesetting industry</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the
              industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining.</p>
            <p>Essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum</p>
            <ul>
              <li data-aos="fade-up" data-aos-duration="1500">
                <p> <span className="icon"><i className="icofont-check-circled"></i></span> Lorem Ipsum is simply dummy </p>
              </li>
              <li data-aos="fade-up" data-aos-duration="1500">
                <p> <span className="icon"><i className="icofont-check-circled"></i></span> Text of the printing and typesetting
                  industry</p>
              </li>
              <li data-aos="fade-up" data-aos-duration="1500">
                <p> <span className="icon"><i className="icofont-check-circled"></i></span> Lorem Ipsum has been the industrys
                  standard
                </p>
              </li>
              <li data-aos="fade-up" data-aos-duration="1500">
                <p> <span className="icon"><i className="icofont-check-circled"></i></span> Dummy text ever since the when. </p>
              </li>
            </ul>
            <h2 data-aos="fade-up" data-aos-duration="1500">Lorem Ipsum is simply dummy.</h2>
            <p data-aos="fade-up" data-aos-duration="1500">Lorem Ipsum is simply dummy text of the printing and
              typesetting industry lorem Ipsum has been the
              industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining.</p>
          </div>
          <div className="quote_block" data-aos="fade-up" data-aos-duration="1500">
            <span className="q_icon">“</span>
            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the
              industrys standard dummy text ever since the when an unknown printer.</h3>
            <span className="q_icon">”</span>
          </div>
          <div className="info" data-aos="fade-up" data-aos-duration="1500">
            <h3>Simply dummy text lorem Ipsum is.</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the
              industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining.</p>
          </div>
          <div className="main_img" data-aos="fade-up" data-aos-duration="1500">
            <iframe style={{width: "100%", height: "500px"}} src="https://www.youtube.com/embed/tgbNymZ7vqY"
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </div>
          <div className="info" data-aos="fade-up" data-aos-duration="1500">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting in dustry lorem Ipsum has been the
              industrys standard dummy text ev er since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic industry.</p>
          </div>
          <div className="blog_authore" data-aos="fade-up" data-aos-duration="1500">
            <div className="social_media">
              <h3>Share this</h3>
              <ul>
                <li><Link to="#"><i className="icofont-facebook"></i></Link></li>
                <li><Link to="#"><i className="icofont-twitter"></i></Link></li>
                <li><Link to="#"><i className="icofont-instagram"></i></Link></li>
                <li><Link to="#"><i className="icofont-pinterest"></i></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section> 
    </>
  )
}

export default BlogDetails
