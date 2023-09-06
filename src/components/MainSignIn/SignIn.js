import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <>
      <div className="full_bg">

        <div className="container">
          <section className="signup_section">

            <div className="top_part">
              <Link to="/" className="back_btn"><i className="icofont-arrow-left"></i> Back to Home</Link>
            </div>

            <div className="profile_block sign-in">

              <div className="profile_side">
                <div className="top_side">
                  <Link to="#"><img src="assets/images/new/Logo.png" alt="image" /></Link>
                  <div className="rating">
                    <span><i className="icofont-star"></i></span>
                    <span><i className="icofont-star"></i></span>
                    <span><i className="icofont-star"></i></span>
                    <span><i className="icofont-star"></i></span>
                    <span><i className="icofont-star"></i></span>
                  </div>
                  <p>Lorem Ipsum is simply dummy text of the print ing and typese tting us orem Ipsum has been lorem
                    beenthe standar ddummy Lorem Ipsum is simply mmy text of the print ing and typese tting us.</p>
                  <div className="user_avtar">
                    <div className="img">
                      <img src="assets/images/new/sign-up.png" alt="image" />
                    </div>
                    <div className="text">
                      <h3>Shyan john</h3>
                      <span>Careative inc</span>
                    </div>
                  </div>
                </div>
                <div className="bottom_side">
                  <div className="rating_platform">
                    <div className="img">
                      <img src="assets/images/new/google_side.png" alt="image" />
                    </div>
                    <div className="text">
                      <div className="rating">
                        <span><i className="icofont-star"></i></span>
                        <span><i className="icofont-star"></i></span>
                        <span><i className="icofont-star"></i></span>
                        <span><i className="icofont-star"></i></span>
                        <span><i className="icofont-star"></i></span>
                      </div>
                      <span>4.8/5 - From over 220 reviews</span>
                    </div>
                  </div>
                  <div className="rating_platform">
                    <div className="img">
                      <img src="assets/images/new/yelp.png" alt="image" />
                    </div>
                    <div className="text">
                      <div className="rating">
                        <span><i className="icofont-star"></i></span>
                        <span><i className="icofont-star"></i></span>
                        <span><i className="icofont-star"></i></span>
                        <span><i className="icofont-star"></i></span>
                        <span><i className="icofont-star"></i></span>
                      </div>
                      <span>4.8/5 - From over 220 reviews</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="signup_form">
                <div className="section_title">
                  <h2>Welcome back</h2>
                  <p>Please log in to access your account</p>
                </div>
                <form action="submit">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" />
                    <small><Link to="#">Forgot Password ?</Link></small>
                  </div>
                  <div className="form-group">
                    <button className="btn btn_main" type="submit">SIGN IN <i className="icofont-arrow-right"></i></button>
                  </div>
                </form>
                <p className="or_block">
                  <span>OR</span>
                </p>
                <div className="or_option">
                  <p>Sign In with your work email</p>
                  <Link to="#" className="btn google_btn"><img src="assets/images/google.png" alt="image" /> <span>Sign In with
                    Google</span> </Link>
                  <p>Don't have an account? <Link to="#">Sign Up here</Link></p>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>
    </>
  )
}

export default SignIn
