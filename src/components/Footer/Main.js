import React from 'react'
import { Link } from 'react-router-dom'
import One from '../../assets/images/new/Logo.png'
import Two from '../../assets/images/new/contact_01.png'
import Three from '../../assets/images/new/contact_02.png'
import Four from '../../assets/images/new/contact_03.png'



function Main() {
    return (
        <>
            <footer>
                <div className="top_footer" id="contact">


                    <div className="container">

                        <div className="row">

                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="abt_side">
                                    <div className="logo"> <img src={One} alt="image" /></div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and type setting industry ype setting industry lorem
                                        Ipsum has been the industrys standard dummy. </p>
                                    <div className="news_letter_block">
                                        <form action="submit">
                                            <div className="form-group">
                                                <input type="email" placeholder="Enter your email" className="form-control" />
                                                <button className="btn"><i className="icofont-paper-plane"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-2 col-md-6 col-12">
                                <div className="links">
                                    <h3>Useful Links</h3>
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about-us">About us</Link></li>
                                        <li><Link to="/servicelist1">Services</Link></li>
                                        <li><Link to="/serviceDetail">Service Detail</Link></li>
                                        <li><Link to="/bloglist">Blog</Link></li>
                                    </ul>
                                </div>
                            </div>


                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="links">
                                    <h3>Help & Suport</h3>
                                    <ul>
                                        <li><Link to="/contactus">Contact us</Link></li>
                                        <li><Link to="/faq">FAQs</Link></li>
                                        <li><Link to="#">How it works</Link></li>
                                        <li><Link to="#">Terms & conditions</Link></li>
                                        <li><Link to="#">Privacy policy</Link></li>
                                    </ul>
                                </div>
                            </div>


                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="try_out">
                                    <h3>Contact us</h3>
                                    <ul>
                                        <li>
                                            <span className="icon">
                                                <img src={Two} alt="image" />
                                            </span>
                                            <div className="text">
                                                <p>Reach us <br /> 599, Vilium Crossing, NJ</p>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="icon">
                                                <img src={Three} />
                                            </span>
                                            <div className="text">
                                                <p>Call us <Link to="tel:+1-900-1234567">+1-900-123 4567</Link></p>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="icon">
                                                <img src={Four} />
                                            </span>
                                            <div className="text">
                                                <p>Email us <Link to="mailto:support@example.com">support@example.com</Link></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="bottom_footer">

                    <div className="container">

                        <div className="row">
                            <div className="col-md-4">
                                <p>© Copyrights 2023. All rights reserved.</p>
                            </div>
                            <div className="col-md-4">
                                <ul className="social_media">
                                    <li><Link to="#"><i className="icofont-facebook"></i></Link></li>
                                    <li><Link to="#"><i className="icofont-twitter"></i></Link></li>
                                    <li><Link to="#"><i className="icofont-instagram"></i></Link></li>
                                    <li><Link to="#"><i className="icofont-pinterest"></i></Link></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <p className="developer_text">Design & developed by <Link to="https://themeforest.net/user/kalanidhithemes" target="blank">Kalanidhi Themes</Link></p>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="go_top" id="Gotop">
                    <span><i className="icofont-arrow-up"></i></span>
                </div>
            </footer>
        </>
    )
}

export default Main
