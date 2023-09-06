import React from 'react'
import { Link } from 'react-router-dom'

function Bloglist() {
  return (
    <>
      <section className="blog_list_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">

              <div className="blog_left_side">
                <div className="blog_panel" data-aos="fade-up" data-aos-duration="1500">
                  <div className="main_img">
                    <Link to="/singleblog"><img src="assets/images/new/blog-list_01.png" alt="image" /></Link>
                  </div>
                  <div className="blog_info">
                    <span className="date">12 Dec, 2022</span>
                    <h2><Link to="/singleblog">Providing IT solution that diverse business verticals lorem ipsum</Link></h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and types etting industry lorem Ipsum has been the
                      indu has been the industrys standard dummy text ever since the when an unknown printer took a galley
                      of type and.</p>
                    <div className="authore_block">
                      <div className="authore">
                        <div className="img">
                          <img src="assets/images/new/authore_01.png" alt="image" />
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
                </div>
                <div className="blog_panel" data-aos="fade-up" data-aos-duration="1500">
                  <div className="main_img">
                    <Link to="/singleblog"><img src="assets/images/new/blog-list_02.png" alt="image" /></Link>
                  </div>
                  <div className="blog_info">
                    <span className="date">09 Dec, 2022</span>
                    <h2><Link to="/singleblog">7 Ways to improve website usability and
                      accessibility</Link></h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and types etting industry lorem Ipsum has been the
                      indu has been the industrys standard dummy text ever since the when an unknown printer took a galley
                      of type and.</p>
                    <div className="authore_block">
                      <div className="authore">
                        <div className="img">
                          <img src="assets/images/new/authore_02.png" alt="image" />
                        </div>
                        <div className="text">
                          <h4>Cyrus Melabo</h4>
                          <span>Author</span>
                        </div>
                      </div>
                      <div className="blog_tag">
                        <span>Development</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog_panel" data-aos="fade-up" data-aos-duration="1500">
                  <div className="main_img">
                    <Link to="/singleblog"><img src="assets/images/new/blog-list_02.png" alt="image" /></Link>
                  </div>
                  <div className="blog_info">
                    <span className="date">05 Dec, 2022</span>
                    <h2><Link to="/singleblog">Planning your online business goals with a
                      specialist at codley.</Link></h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and types etting industry lorem Ipsum has been the
                      indu has been the industrys standard dummy text ever since the when an unknown printer took a galley
                      of type and.</p>
                    <div className="authore_block">
                      <div className="authore">
                        <div className="img">
                          <img src="assets/images/new/authore_01.png" alt="image" />
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
                </div>
                <div className="blog_panel" data-aos="fade-up" data-aos-duration="1500">
                  <div className="main_img">
                    <Link to="/singleblog"><img src="assets/images/new/blog-list_04.png" alt="image" /></Link>
                  </div>
                  <div className="blog_info">
                    <span className="date">02 Dec, 2022</span>
                    <h2><Link to="/singleblog">Tech conference with global activities</Link></h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and types etting industry lorem Ipsum has been the
                      indu has been the industrys standard dummy text ever since the when an unknown printer took a galley
                      of type and.</p>
                    <div className="authore_block">
                      <div className="authore">
                        <div className="img">
                          <img src="assets/images/new/authore_02.png" alt="image" />
                        </div>
                        <div className="text">
                          <h4>Cyrus Melabo</h4>
                          <span>Author</span>
                        </div>
                      </div>
                      <div className="blog_tag">
                        <span>Development</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">

              <div className="blog_right_side">

                <div className="blog_search_block bg_box" data-aos="fade-up" data-aos-duration="1500">
                  <form action="submit">
                    <div className="form-group">
                      <h3>Search post</h3>
                      <div className="form_inner">
                        <input type="text" className="form-control" />
                        <button><i className="icofont-search-1"></i></button>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="recent_post_block bg_box" data-aos="fade-up" data-aos-duration="1500">
                  <h3>Recent Post</h3>
                  <ul className="recent_blog_list">
                    <li>
                      <Link to="/singleblog">
                        <div className="img">
                          <img src="assets/images/new/blog-side_01.png" alt="image" />
                        </div>
                        <div className="text">
                          <h4>Questions business owner must be able to answer.</h4>
                          <span>2 days ago</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/singleblog">
                        <div className="img">
                          <img src="assets/images/new/blog-side_02.png" alt="image" />
                        </div>
                        <div className="text">
                          <h4>How is Technology Working With New Things?</h4>
                          <span>2 days ago</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/singleblog">
                        <div className="img">
                          <img src="assets/images/new/blog-side_03.png" alt="image" />
                        </div>
                        <div className="text">
                          <h4>Two tried and true frameworks for achieving..</h4>
                          <span>3 days ago</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/singleblog">
                        <div className="img">
                          <img src="assets/images/new/blog-side_04.png" alt="image" />
                        </div>
                        <div className="text">
                          <h4>Why communities help you build better...</h4>
                          <span>4 days ago</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="categories_block bg_box" data-aos="fade-up" data-aos-duration="1500">
                  <h3>Categories</h3>
                  <ul>
                    <li>
                      <Link to="#" className="cat"><i className="icofont-folder-open"></i> Software</Link>
                      <span>(15)</span>
                    </li>
                    <li>
                      <Link to="#" className="cat"><i className="icofont-folder-open"></i> Technology</Link>
                      <span>(12)</span>
                    </li>
                    <li>
                      <Link to="#" className="cat"><i className="icofont-folder-open"></i> Business</Link>
                      <span>(09)</span>
                    </li>
                    <li>
                      <Link to="#" className="cat"><i className="icofont-folder-open"></i> Web Development</Link>
                      <span>(25)</span>
                    </li>
                    <li>
                      <Link to="#" className="cat"><i className="icofont-folder-open"></i> Android</Link>
                      <span>(19)</span>
                    </li>
                    <li>
                      <Link to="#" className="cat"><i className="icofont-folder-open"></i> iOS</Link>
                      <span>(08)</span>
                    </li>
                    <li>
                      <Link to="#" className="cat"><i className="icofont-folder-open"></i> Watch</Link>
                      <span>(13)</span>
                    </li>
                  </ul>
                </div>
                <div className="tags_block bg_box" data-aos="fade-up" data-aos-duration="1500">
                  <h3>Tags</h3>
                  <ul>
                    <li><Link to="#">Software</Link></li>
                    <li><Link to="#">Technology</Link></li>
                    <li><Link to="#">Business</Link></li>
                    <li><Link to="#">Development</Link></li>
                    <li><Link to="#">Android</Link></li>
                    <li><Link to="#">iOS</Link></li>
                    <li><Link to="#">Watch</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="pagination_block" data-aos="fade-up" data-aos-duration="1500">
            <div className="row">
              <div className="col-lg-8">
                <ul>
                  <li><Link to="#" className="prev"><i className="icofont-double-left"></i></Link></li>
                  <li><Link to="#">1</Link></li>
                  <li><Link to="#" className="active">2</Link></li>
                  <li><Link to="#">3</Link></li>
                  <li><Link to="#">4</Link></li>
                  <li><Link to="#" className="next"><i className="icofont-double-right"></i></Link></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Bloglist
