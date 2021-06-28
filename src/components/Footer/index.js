import React, {useState} from "react";
import {Link} from "react-router-dom";
import Slider from "react-slick";

function Footer(props) {
    const settingsSlider = {
        dots: false,
        infinite: true,
        arrows:false,   
        autoplay:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive:[
            {
              breakpoint: 991,
              settings:{
                slidesToShow: 2,
              }
            }
        ]
    };
    const {footer} = props
    return (
        <>
            <footer className={footer ? 'footer landing-footer': 'footer'}>
                {!footer? <div className="container footer-cards-outer">
                    <div className="row footer-cards">
                        <div className="col-md-9">
                        <div className="footer-slider">
                            <Slider {...settingsSlider}>
                                <Link to="/for-agencies">
                                    <div className="footer-card-inner">
                                        <div className="image-outer">
                                            <img src="/images/Home/screenshot-2.png" alt="image" />
                                            {/* <span>
                                                <i className="fas fa-play"></i>
                                            </span> */}
                                        </div>
                                        <div className="text-content">
                                            <div>
                                                <p>Brandzooka is the Programmatic TV & Media Toolkit for Agencies</p>
                                            </div>
                                            <a href="#">
                                                <span>
                                                    LEARN MORE 
                                                </span>
                                                <img src="/images/arrow-white.png" width="30px" alt="arrow image" />                
                                            </a>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/for-brands">
                                        <div className="footer-card-inner">
                                            <div className="image-outer">
                                                <img src="/images/Home/screenshot-3.png" alt="image" />
                                                {/*  */}
                                            </div>
                                            <div className="text-content">
                                                <div>
                                                    <p>Brandzooka Helps Brands Reach the Right Audience on Primetime TV</p>
                                                </div>
                                                <a href="#">
                                                    <span>
                                                        LEARN MORE 
                                                    </span>
                                                    <img src="/images/arrow-white.png" width="30px" alt="arrow image" />                
                                                </a>
                                            </div>
                                        </div>
                                    </Link>          
                                <Link to="/for-political">
                                        <div className="footer-card-inner">
                                            <div className="image-outer">
                                                <img src="/images/Home/screenshot-4.png" alt="image" />
                                                {/*  */}
                                            </div>
                                            <div className="text-content">
                                                <div>
                                                    <p>Brandzooka is the Digital Advertising Platform for Political and Non-profits</p>
                                                </div>
                                                <a href="#">
                                                    <span>
                                                        LEARN MORE 
                                                    </span>
                                                    <img src="/images/arrow-white.png" width="30px" alt="arrow image" />                
                                                </a>
                                            </div>
                                        </div>
                                    </Link>
                                
                            </Slider>
                        </div>
                        {/* <div className="row">
                                <div className="col-6 col-md-4">
                                
                                    <Link to="/for-agencies">
                                        <div className="footer-card-inner">
                                            <div className="image-outer">
                                                <img src="/images/Home/screenshot-2.png" alt="image" />
                                                
                                            </div>
                                            <div className="text-content">
                                                <div>
                                                    <p>Brandzooka is the Programmatic TV & Media Toolkit for Agencies</p>
                                                </div>
                                                <a href="#">
                                                    <span>
                                                        LEARN MORE 
                                                    </span>
                                                    <img src="/images/arrow-white.png" width="30px" alt="arrow image" />                
                                                </a>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-6 col-md-4">
                                    <Link to="/for-brands">
                                        <div className="footer-card-inner">
                                            <div className="image-outer">
                                                <img src="/images/Home/screenshot-3.png" alt="image" />
                                                
                                            </div>
                                            <div className="text-content">
                                                <div>
                                                    <p>Brandzooka Helps Brands Reach the Right Audience on Primetime TV</p>
                                                </div>
                                                <a href="#">
                                                    <span>
                                                        LEARN MORE 
                                                    </span>
                                                    <img src="/images/arrow-white.png" width="30px" alt="arrow image" />                
                                                </a>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-6 col-md-4">
                                    <Link to="/for-political">
                                        <div className="footer-card-inner">
                                            <div className="image-outer">
                                                <img src="/images/Home/screenshot-4.png" alt="image" />
                                            </div>
                                            <div className="text-content">
                                                <div>
                                                    <p>Brandzooka is the Digital Advertising Platform for Political and Non-profits</p>
                                                </div>
                                                <a href="#">
                                                    <span>
                                                        LEARN MORE 
                                                    </span>
                                                    <img src="/images/arrow-white.png" width="30px" alt="arrow image" />                
                                                </a>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>*/}
                        </div> 
                        <div className="col-md-3 text-center">
                            <Link to="/case-studies">
                                <div className="footer-card-button">
                                    <span>VIEW CASE <br />STUDIES</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div> : ""}
                
                
                <div className="footer-top">
                    <div className="container">
                        <div className="footer-line">
                            <div>
                                <img src="/images/BZ_logo_small.png" />
                            </div>
                            <div></div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-4 col-md-3 col-lg-2">
                                <h6>OUR PLATFORM</h6>
                                <ul>
                                    <li><Link to="/platform">Overview</Link></li>
                                    <li><Link to="/for-agencies">For Agencies</Link></li>
                                    <li><Link to="/for-brands">For Brands & Businesses</Link></li>
                                    <li><Link to="/for-enterprise">For Enterprise</Link></li>
                                    <li><Link to="/for-political">For Political & Non-Profit</Link></li>
                                </ul>
                            </div>
                            <div className="mb-3 col-4 col-md-3 col-lg-2">
                                <h6>OUR PRODUCTS</h6>
                                <ul>
                                    <li>
                                        <Link to="/products">Brandzooka</Link>
                                    </li>
                                    <li>
                                        <Link to="/brandzooka-plus">Brandzooka+</Link>
                                    </li>
                                    <li>                                    
                                        <Link to="/mediator">Mediator</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-3 col-4 col-md-3 col-lg-2">
                                <h6>ABOUT</h6>
                                <ul>
                                    {/* <li>
                                        <Link to="/about">Our Story</Link>                                    
                                    </li> */}
                                    <li>
                                        <Link to="/our-team">Our Team</Link>                                    
                                    </li>
                                    <li>
                                        <Link to="/jobs">Jobs</Link>
                                    </li>
                                    <li>
                                        <Link to="/our-partners">Our Partners</Link>                                    
                                    </li>
                                    <li>
                                        <Link to="/recent-press">Press</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-3 col-4 col-md-3 col-lg-2">
                                <h6>RESOURCES</h6>
                                <ul>
                                    <li>
                                        <Link to="/case-studies">Case Studies</Link>
                                    </li>
                                    <li>
                                    <Link to="/help-center">Help Center</Link>
                                    </li>
                                    <li>
                                        <Link to="/faqs">FAQs</Link>
                                    </li>
                                    <li>
                                        <Link to="/pricing">Pricing</Link>
                                    </li>
                                    <li><a href="https://brandzooka-image-store.s3.amazonaws.com/pdf/Brandzooka_Media_Kit_-_Online_and_TV_(compressed).pdf" target="_blank">Media Kit</a></li>
                                    <li><a href="https://s3.amazonaws.com/brandzooka-image-store/pdf/targeting_options_guide-2.4.pdf" target="_blank">Targeting Guidelines</a></li>
                                    <li><a href="https://s3.amazonaws.com/brandzooka-image-store/pdf/best_practices.pdf" target="_blank">Best Practices</a></li>
                                </ul>
                            </div>
                            <div className="mb-3 col-4 col-md-3 col-lg-2">
                                <h6>CONTACT</h6>
                                <ul>
                                    <li><a href="tel:(720) 669-7915">(720) 669-7915</a></li>
                                    <li>
                                        <Link to="/contact">2000 Central Ave <br />Boulder, CO 80302</Link>
                                    </li>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/signup">Register</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-lg-2">
                                <div className="social-links">
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/Brandzooka/" target="_blank">
                                                <img src="/images/Home/social-fb.png"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/brandzooka" target="_blank">
                                                <img src="/images/Home/social-tw.png"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/company/brandzooka" target="_blank">
                                                <img src="/images/Home/social-in.png"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.crunchbase.com/organization/brandzooka#/entity" target="_blank">
                                                <img src="/images/Home/social-cb.png"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://angel.co/company/brandzooka" target="_blank">
                                                <img src="/images/Home/social-vi.png"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-links">
                    <div className="container">
                        <ul>
                            <li className="wow fadeIn"><p>© Brandzooka 2021</p></li>
                            <li className="wow fadeIn"><a href="https://d1cy2e0vbrm1md.cloudfront.net/pdf/2018-05-24-brandzooka-terms_and_conditions.pdf" target="_blank">Privacy Policy</a></li>
                            <li className="wow fadeIn"><a href="https://d1cy2e0vbrm1md.cloudfront.net/pdf/2018-05-24-brandzooka-terms_and_conditions.pdf" target="_blank">Terms & Conditions</a></li>
                            <li className="wow fadeIn"><Link to="/certification">Certification & Assurance</Link></li>
                        </ul>
                    </div>
                </div>
                <Link to="/signup" className="footer-create-btn">
                    <span>CREATE AN <br/> ACCOUNT<br/>
                        <img src="/images/arrow-white.png" width="35px" alt="arrow image" />                
                    </span>
                </Link>
            </footer>
        </>
    );
}

export default Footer;
