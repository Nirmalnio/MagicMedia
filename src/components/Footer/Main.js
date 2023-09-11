import React from 'react'
import { Link } from 'react-router-dom'
import One from '../../assets/images/new/Logo.png'
import Two from '../../assets/images/new/contact_01.png'
import Three from '../../assets/images/new/contact_02.png'
import Four from '../../assets/images/new/contact_03.png'
import logoimg from "../../assets/images/MM-1.png"


function Main() {
    return (
        <>
            <footer>
                <div className="top_footer" id="contact">


                    <div className="container">

                        <div className="row">

                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="abt_side">
                                    <div className="logo"> <img src={logoimg} alt="image" /></div>
                                    <p>Get your business ready to skyrocket </p>
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
                                        <li><Link to="/about-us">Advertisers</Link></li>
                                        <li><Link to="/servicelist1">Publishers</Link></li>
                                        <li><Link to="/serviceDetail">AdFormats</Link></li>
                                        <li><Link to="/bloglist">Brand Safety</Link></li>
                                    </ul>
                                </div>
                            </div>


                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="links">
                                    <h3>Help & Support</h3>
                                    <ul>
                                        <li><Link to="/contactus">Contact us</Link></li>
                                        <li><Link to="#">About Us</Link></li>
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
                                                <p>Reach us <br /> Cluster M1, 33rd Floor, HDS Business Centre Tower, Dubai, UAE</p>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="icon">
                                                <img src={Three} />
                                            </span>
                                            <div className="text">
                                                <p>Call us <Link to="tel:+971 52 4932595">+971 52 4932595</Link></p>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="icon">
                                                <img src={Four} />
                                            </span>
                                            <div className="text">
                                                <p>Email us <Link to="mailto:support@example.com">sales@magicmedia.ae</Link></p>
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
                                <p>© Copyrights 2022. All rights reserved.</p>
                            </div>
                            <div className="col-md-4">
                                <ul className="social_media">
                                    <li><Link to="#"><i className="icofont-facebook"></i></Link></li>
                                    <li><Link to="#"><i className="icofont-twitter"></i></Link></li>
                                    <li><Link to="#"><i className="icofont-instagram"></i></Link></li>
                                    <li><Link to="#"><i className="icofont-linkedin"></i></Link></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                {/* <p className="developer_text">Design & developed by <Link to="https://themeforest.net/user/kalanidhithemes" target="blank">Kalanidhi Themes</Link></p> */}
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
