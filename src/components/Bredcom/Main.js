import React from 'react'
import { Link } from 'react-router-dom'


function Main({ same, subtitle, title }) {
    return (
        <>
            <div className="bread_crumb"
                data-aos="fade-in"
                data-aos-duration={2000}
                data-aos-delay={100} >
                <div className="container">
                    <div className="bred_text">
                        <h1>{same}</h1>
                        <ul>
                            <li>
                                <Link to="/">{title}</Link>
                            </li>
                            <li>
                                <span>»</span>
                            </li>
                            <li>
                                <Link to="/aboutus">{subtitle}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Main
