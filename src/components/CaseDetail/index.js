import React from 'react';
import Layout from '../MyLayout'
import { Link } from "react-router-dom";
import Slider from "react-slick";

function CaseDetail(props) {
    const settingsCaseStudies = {
        dots: false,
        infinite: true,
        autoplay:true,
        arrows:false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                },
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                },
            },
        ]
    };
    return (
        <Layout>
            <section className="page-banner triangle-banner-main triangle-banner-case-detail">
                <div className="triangle-banner">
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className=" triangle-banner-content">
                                <h1>JanSport: <br /> Digital Burrito</h1>
                                <p>Burritos are tasty, cables are messy. The Burrito folds up with a burrito wrap style design to keep your cables neat.</p>
                                <div className="buttons pb-3">
                                    <Link to="/signup" className="btn btn-primary mr-2 my-2">CREATE AN ACCOUNT</Link>
                                    <a href="https://meetings.grooveapp.com/44yo7f7j" target="_blank" className="btn btn-secondary my-2">BOOK A DEMO</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="agencies-page-video">
                                <div className="position-relative">
                                    <img src="/images/case-detail-img.png" />
                                    <div className="play-circle">
                                        <i className="fa fa-play"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-platform pb-5 the-campaign">
                <div className="platform-shape"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="platform-text">
                                <h5 className="mb-3">OVERVIEW</h5>
                                <h3 className="mb-3">
                                    The Campaign
                                </h3>
                                <p className="mb-3">
                                    Creative testing is a sour point for agencies and clients alike. Brandzooka eliminates the frustration. Greg, Partner at Teak, loved that Brandzooka “allowed us to test media with different target audiences and get data feedback quickly.” Smarter testing with Brandzooka means hyper-targeting, self-serve ad launches, and thorough analytics ahead of the big buy.
                                </p>
                                <Link to="/login" className="btn btn-primary">CREATE A CAMPAIGN</Link>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="job-tilled-view case-detail">
                                <div className="row d-none d-sm-flex">
                                    <div className="col-3"></div>
                                    <div className="col-3"></div>
                                    <div className="col-3">
                                        <div className="inner-card light-pink">
                                            <div className="content">
                                                <h2>+73%</h2>
                                                <h4>INCREASED VIEWABILITY</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3"></div>
                                    <div className="col-3">
                                        <div className="inner-card pink">
                                            <div className="content">
                                                <h4>INDUSTRY:<br />ADVERTISING AGENCY</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="inner-card">
                                            <div className="content image">
                                                <img src="/images/cd-1.png" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="inner-card">
                                            <div className="content image">
                                                <img src="/images/cd-2.png" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="inner-card light-pink">
                                            <div className="content">
                                                <h2>+182%</h2>
                                                <h4>MORE CLICKS</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3"></div>
                                    <div className="col-3">
                                        <div className="inner-card">
                                            <div className="content image">
                                                <img src="/images/cd-3.png" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="inner-card blue">
                                            <div className="content">
                                                <h2>+112%</h2>
                                                <h4>HIGHER ENGAGEMENT</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="inner-card">
                                            <div className="content image">
                                                <img src="/images/cd-4.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row d-flex d-sm-none">
                                    <div className="col-4 px-0">
                                        <div className="inner-card">
                                            <div className="content image">
                                                <img src="/images/cd-3.png" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 px-0">
                                        <div className="inner-card light-pink">
                                            <div className="content">
                                                <h2>+73%</h2>
                                                <h4>INCREASED VIEWABILITY</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 px-0"></div>
                                    <div className="col-4 px-0">
                                        <div className="inner-card">
                                            <div className="content image">
                                                <img src="/images/cd-1.png" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 px-0">
                                        <div className="inner-card">
                                            <div className="content image">
                                                <img src="/images/cd-2.png" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 px-0">
                                        <div className="inner-card light-pink">
                                            <div className="content">
                                                <h2>+182%</h2>
                                                <h4>MORE CLICKS</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 px-0">
                                        <div className="inner-card pink">
                                            <div className="content">
                                                <h4>INDUSTRY:<br />ADVERTISING AGENCY</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 px-0">
                                        <div className="inner-card blue">
                                            <div className="content">
                                                <h2>+112%</h2>
                                                <h4>HIGHER ENGAGEMENT</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 px-0">
                                        <div className="inner-card">
                                            <div className="content image">
                                                <img src="/images/cd-4.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="recent-press proud-moments my-0 py-5">
                <div className="container">
                    <div className="head-section ml-0 ml-sm-auto">
                        <h3>More Case Studies</h3>
                    </div>
                    <div className="moments-outer">
                        <Slider {...settingsCaseStudies}>
                            <Link to="/case-detail">
                                <div className="moment-card">
                                    <div className="img-main">
                                        <img src="/images/Home/screenshot-2.png" />
                                    </div>
                                    <div className="content">
                                        <h5>JanSport: Digital Burrito</h5>
                                        <p>
                                            Burritos are tasty, cables are messy. The Burrito foldts up with a burrito wrap style design to keep your cables neat.
                                        </p>
                                        <div className="view-case">
                                            <span>VIEW CASE STUDY</span>
                                            <img src="/images/arrow-white.png" width="30px" alt="arrow image" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/case-detail">
                                <div className="moment-card">
                                    <div className="img-main">
                                        <img src="/images/Home/screenshot-2.png" />
                                    </div>
                                    <div className="content">
                                        <h5>JanSport: Digital Burrito</h5>
                                        <p>
                                            Burritos are tasty, cables are messy. The Burrito foldts up with a burrito wrap style design to keep your cables neat.
                                        </p>
                                        <div className="view-case">
                                            <span>VIEW CASE STUDY</span>
                                            <img src="/images/arrow-white.png" width="30px" alt="arrow image" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/case-detail">
                                <div className="moment-card">
                                    <div className="img-main">
                                        <img src="/images/Home/screenshot-2.png" />
                                    </div>
                                    <div className="content">
                                        <h5>JanSport: Digital Burrito</h5>
                                        <p>
                                            Burritos are tasty, cables are messy. The Burrito foldts up with a burrito wrap style design to keep your cables neat.
                                        </p>
                                        <div className="view-case">
                                            <span>VIEW CASE STUDY</span>
                                            <img src="/images/arrow-white.png" width="30px" alt="arrow image" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Slider>    
                    </div>
                </div>
            </section>
        </Layout>
    );
}
export default CaseDetail;