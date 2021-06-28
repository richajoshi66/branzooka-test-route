import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import $ from "jquery"

function Header(props) {
    const {header} = props

    useEffect(() => { 
        $(window).scroll(function(){
            if ($(window).scrollTop() >= 50) {
                $('header').addClass('sticky');
            }
            else {
                $('header').removeClass('sticky');
            }
        });
    }, []);
    return (
        <>
            <header className="header">
                    <Link className="navbar-brand" to="/">
                        <img src="/images/Home/bz_logo.png" alt="Logo" />
                    </Link>
                <div className="header-shape new-header-shape"></div>
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                    <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-btn">
                            <img src="/images/Menu-Button.png" />
                        </span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end">
                        <ul className="navbar-nav ">
                            {!header ? <>
                                <li className="nav-item">
                                <Link to="/platform" className="nav-link dropdown-toggle" id="PLATFORM">
                                    PLATFORM
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="PLATFORM">
                                    <Link className="dropdown-item" to="/for-agencies">For Agencies</Link>
                                    <Link className="dropdown-item" to="/for-brands">For Brands & Businesses</Link>
                                    <Link className="dropdown-item" to="/for-enterprise">For Enterprise</Link>
                                    <Link className="dropdown-item" to="/for-political">For Political & Non-profit</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="nav-link dropdown-toggle"  id="PRODUCTS">
                                    PRODUCTS
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="PRODUCTS">
                                    <Link className="dropdown-item" to="/products">BRANDZOOKA</Link>
                                    <Link className="dropdown-item" to="/brandzooka-plus">BRANDZOOKA+</Link>
                                    <Link className="dropdown-item" to="/mediator">Mediator</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link dropdown-toggle" id="ABOUT">
                                    ABOUT
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="ABOUT">
                                    <Link className="dropdown-item" to="/our-team">Our Team</Link>
                                    <Link className="dropdown-item" to="/jobs">Jobs at Brandzooka</Link>
                                    <Link className="dropdown-item" to="/our-partners">Our Partners</Link>
                                    <Link className="dropdown-item" to="/recent-press">Recent Press</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link to="/case-studies" className="nav-link dropdown-toggle" id="RESOURCES">
                                    RESOURCES
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="RESOURCES">
                                    <Link className="dropdown-item" to="/case-studies">Case Studies</Link>
                                    <Link className="dropdown-item" to="/help-center">Help center</Link>
                                    <Link className="dropdown-item" to="/faqs">FAQ</Link>
                                    <Link className="dropdown-item" to="/pricing">Pricing</Link>
                                </div>
                            </li>    
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">CONTACT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">LOGIN</Link>
                            </li>
                            </>: ""}
                            <li className="nav-item">
                                <a href="https://meetings.grooveapp.com/44yo7f7j" target="_blank" className="nav-link theme-text">BOOK A DEMO</a>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-primary"><Link to="/signup">CREATE AN ACCOUNT</Link></button>
                            </li>
                        </ul>
                    </div>  
                </nav>
                <div className="mobile-menu" id="collapsibleNavbar">
                    <div>
                        <div className="logo-div mb-5 d-flex justify-content-between align-items-center">
                            <Link to="">
                               <img src="/images/BZ_logo_small.png" />
                            </Link>
                            <i className="fa fa-times" data-toggle="collapse" data-target="#collapsibleNavbar"></i>
                        </div>
                        <div className="menu-list-box">
                            <ul>
                                <li>
                                    <span className="has-submenu">
                                        <Link to="/platform">PLATFORM</Link>
                                        <i className="fa fa-angle-right"  data-toggle="collapse" data-target="#PLATFORM"></i>
                                    </span>
                                    <div className="inner-menu" id="PLATFORM">
                                        <h5 className="inner-heading" data-toggle="collapse" data-target="#PLATFORM"> 
                                        <i className="fas fa-long-arrow-alt-left"></i>
                                            PLATFORM
                                        </h5>
                                        <ul>
                                            <li>
                                                <Link to="/for-agencies">For Agencies</Link>
                                            </li>
                                            <li>
                                                <Link to="/for-brands">For Brands & Businesses</Link>
                                            </li>
                                            <li>
                                                <Link to="/for-enterprise">For Enterprise</Link>
                                            </li>
                                            <li>
                                                <Link to="/for-political">For Political & Non-profit</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <span className="has-submenu">
                                        <Link to="/products">PRODUCTS</Link>
                                        <i className="fa fa-angle-right" data-toggle="collapse" data-target="#PRODUCT"></i>
                                    </span>
                                    <div className="inner-menu" id="PRODUCT">
                                        <h5 className="inner-heading" data-toggle="collapse" data-target="#PRODUCT"> 
                                        <i className="fas fa-long-arrow-alt-left"></i>
                                            PRODUCTS
                                        </h5>
                                        <ul>
                                            <li>
                                                <Link to="/products">BRANDZOOKA</Link>
                                            </li>
                                            <li>
                                                <Link to="/brandzooka-plus">BRANDZOOKA+</Link>
                                            </li>
                                            <li>
                                               <Link to="/mediator">MEDIATOR</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <span className="has-submenu">
                                        <Link to="/about">ABOUT</Link>
                                        <i className="fa fa-angle-right"  data-toggle="collapse" data-target="#ABOUT"></i>
                                    </span>
                                    <div className="inner-menu" id="ABOUT">
                                        <h5 className="inner-heading" data-toggle="collapse" data-target="#ABOUT"> 
                                        <i className="fas fa-long-arrow-alt-left"></i>
                                            ABOUT
                                        </h5>
                                        <ul>
                                            <li>
                                                <Link to="/our-team">OUR TEAM</Link>
                                            </li>
                                            <li>
                                                <Link to="/jobs">JOBS AT BRANDZOOKA</Link>
                                            </li>
                                            <li>
                                               <Link to="/recent-press">OUR PARTNERS</Link>
                                            </li>
                                            <li>
                                               <Link to="/recent-press">Recent Press</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <span className="has-submenu">
                                        <Link to="/case-studies">RESOURCES</Link>
                                        <i className="fa fa-angle-right" data-toggle="collapse" data-target="#RESOURCES"></i>
                                    </span>
                                    <div className="inner-menu" id="RESOURCES">
                                        <h5 className="inner-heading" data-toggle="collapse" data-target="#RESOURCES"> 
                                        <i className="fas fa-long-arrow-alt-left"></i>
                                            RESOURCES
                                        </h5>
                                        <ul>
                                            <li>
                                                <Link to="/case-studies">CASE STUDIES</Link>
                                            </li>
                                            <li>
                                                <Link to="/help-center">HELP CENTER</Link>
                                            </li>
                                            <li>
                                                <Link to="/faqs">FAQ</Link>
                                            </li>
                                            <li>
                                                <Link to="/pricing">PRICING</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <span>
                                        <Link to="/contact">CONTACT</Link>
                                    </span>
                                </li>    
                                <li>
                                    <span>
                                        <Link to="/login">LOGIN</Link>
                                    </span>
                                </li> 
                                <li>
                                    <span>
                                        <a href="https://meetings.grooveapp.com/44yo7f7j" target="_blank" className="theme-text">BOOK A DEMO</a>
                                    </span>
                                </li>       
                                <li>
                                </li>    
                            </ul>
                            <button type="button" className="btn btn-primary">
                                <Link to="/signup">
                                    CREATE AN ACCOUNT
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
export default Header;
