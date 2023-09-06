import React from 'react'
import { Link } from 'react-router-dom'

function LatestStory() {
  return (
    <>
      <section className="row_am latest_story" id="blog">

        <div className="container">
          <div className="section_title" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="100">
            <h2>Read latest <span>story</span></h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typese tting <br /> indus orem Ipsum has beenthe
              standard dummy.</p>
          </div>

          <div className="row">

            <div className="col-md-4">
              <div className="story_box" data-aos="fade-up" data-aos-duration="1500">
                <div className="story_img">
                  <img src="assets/images/new/story-01.png" alt="image" />
                  <span><span>23</span> AUG</span>
                </div>
                <div className="story_text">
                  <div className="statstic">
                    <span><i className="icofont-user-suited"></i> Admin</span>
                    <span><i className="icofont-speech-comments"></i> 36 Comments</span>
                  </div>
                  <h3>Powerfull features makes
                    software awesome !</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been.</p>
                  <Link to="/singleblog" className="btn text_btn">READ MORE <i className="icofont-arrow-right"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="story_box" data-aos="fade-up" data-aos-duration="1500">
                <div className="story_img">
                  <img src="assets/images/new/story-02.png" alt="image" />
                  <span><span>18</span> AUG</span>
                </div>
                <div className="story_text">
                  <div className="statstic">
                    <span><i className="icofont-user-suited"></i> Admin</span>
                    <span><i className="icofont-speech-comments"></i> 36 Comments</span>
                  </div>
                  <h3>Why software is globally used as best software</h3>
                  <p>Simply dummy text of the printing and typesetting industry lorem Ipsum has Lorem Ipsum is.</p>
                  <Link to="/singleblog" className="btn text_btn">READ MORE <i className="icofont-arrow-right"></i></Link>
                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="story_box" data-aos="fade-up" data-aos-duration="1500">
                <div className="story_img">
                  <img src="assets/images/new/story-03.png" alt="image" />
                  <span><span>9</span> AUG</span>
                </div>
                <div className="story_text">
                  <div className="statstic">
                    <span><i className="icofont-user-suited"></i> Admin</span>
                    <span><i className="icofont-speech-comments"></i> 36 Comments</span>
                  </div>
                  <h3>Beautiful user interface with bug free code.</h3>
                  <p>Printing and typesetting industry lorem Ipsum has Lorem simply dummy text of the.</p>
                  <Link to="/singleblog" className="btn text_btn">READ MORE <i className="icofont-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
    </>
  )
}

export default LatestStory
