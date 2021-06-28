import React from "react";
import Layout from '../MyLayout';
import { Link } from "react-router-dom";
import Slider from "react-slick";

function Pricing(Props) {
    const settingsReview = {
        dots: true,
        infinite: true,
        arrows:false,   
        autoplay:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: i => (
        <div className="review-slider-counts">
            <span className="counts">
                0{i + 1}
            </span>
        </div>
        )
    };
    return (
        <Layout>
            <section className="page-banner home-page-banner case-studies-banner pricing-banner">
                <div className="brandzooka-page-banner-shapes pricing-page">
                    <div></div>
                    <div></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="page-banner-text">
                                <h1 className="brandzooka-heading">
                                    The Most Powerful Way to Advertise on TV & Online
                                </h1>
                                <p>
                                    With no subscriptions or minimums, we make placing your ad online or on TV easy. Brandzooka provides powerful ad placements on digital, mobile, and ConnectedTV at any budget size.
                                </p>
                                <div className="buttons pb-3">
                                    <Link to="/signup" className="btn btn-primary mr-2 my-2">CREATE AN ACCOUNT</Link>
                                    <a href="https://meetings.grooveapp.com/44yo7f7j" target="_blank" className="btn btn-secondary my-2">BOOK A DEMO</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 text-right">
                        </div>
                    </div>
                </div>
            </section>
            <section className="powerful-way pb-0 pricing-structure">
                <div className="table-card pb-5">
                    <div className="container">
                        <div className="platform-text">
                            <h3 className="mb-3 powerful-heading text-center mw-100">
                                Our Pricing Structure
                            </h3>
                            <div className="table-responsive">
                                <table className="table powerful-table mb-4">
                                    <thead>
                                        <tr>
                                            <th>PLATFORM</th>
                                            <th>MINIMUM<br />SPEND</th>
                                            <th>REACH (% OF TOTAL WEB TRAFFIC)</th>
                                            <th>AD NETWORKS ACCESSED AD NETWORKS</th>
                                            <th>TIME TO LAUNCH</th>
                                            <th>RISK-FREE TRIAL</th>
                                            <th>3RD PARTY VERIFIED</th>
                                            <th>EASY-TO-USE PLATFORM</th>
                                            <th>CONNECTED TV & TOOL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>BRANDZOOKA</td>
                                            <td>$5</td>
                                            <td>92%</td>
                                            <td>30+</td>
                                            <td>5 min</td>
                                            <td><i className="fas fa-check"></i></td>
                                            <td><i className="fas fa-check"></i></td>
                                            <td><i className="fas fa-check"></i></td>
                                            <td><i className="fas fa-check"></i></td>
                                        </tr>
                                        <tr>
                                            <td>FACEBOOK</td>
                                            <td>$5</td>
                                            <td>5%</td>
                                            <td>1</td>
                                            <td>30 min</td>
                                            <td></td>
                                            <td></td>
                                            <td><i className="fas fa-check"></i></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>YOUTUBE</td>
                                            <td>$5</td>
                                            <td>3%</td>
                                            <td>1</td>
                                            <td>30 min</td>
                                            <td></td>
                                            <td></td>
                                            <td><i className="fas fa-check"></i></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>MEDIAMATH</td>
                                            <td>$10,000</td>
                                            <td>92%</td>
                                            <td>30+</td>
                                            <td>120 min</td>
                                            <td></td>
                                            <td><i className="fas fa-check"></i></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>ADOBE</td>
                                            <td>$20,000</td>
                                            <td>92%</td>
                                            <td>30+</td>
                                            <td>120 min</td>
                                            <td></td>
                                            <td><i className="fas fa-check"></i></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <button className="btn btn-primary">
                                <Link to="/signup">
                                    CREATE AN ACCOUNT
                            </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="brand-cards">
                <div className="container">
                    <div className="brand-card-outer">
                        <div>
                            <div>
                                <img src="/images/Home/wsj.png" /><br />
                                <span>"Execute campaigns across the biggest sites"</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="/images/Home/google.png" /><br />
                                <span>Customer Reviews</span>
                                <span className="review">
                                    <i className="fas fa-star mr-1"></i>
                                    <i className="fas fa-star mr-1"></i>
                                    <i className="fas fa-star mr-1"></i>
                                    <i className="fas fa-star mr-1"></i>
                                    <i className="fas fa-star mr-1"></i>
                                </span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="/images/Home/adweek.png" /><br />
                                <span>"Find fans at all <br />budget levels"</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="/images/Home/facebook.png" /><br />
                                <span>Customer Reviews</span>
                                <span className="review">
                                    <i className="fas fa-star mr-1"></i>
                                    <i className="fas fa-star mr-1"></i>
                                    <i className="fas fa-star mr-1"></i>
                                    <i className="fas fa-star mr-1"></i>
                                    <i className="fas fa-star mr-1"></i>
                                </span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="/images/Home/nbc.png" /><br />
                                <span>"Democratizing digital marketing"</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="magic-connected-cards-outer">
                <div className="container">
                    <div className="magic-connected-card-inner">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="magic-connected-card-text">
                                    <div className="shape">
                                        <img src="/images/Home/target-icon.png" alt="icon" />
                                    </div>
                                    <h3>A Budget That Works for You</h3>
                                    <p>On Brandzooka, you set your own budget, with a minimum of $5. There are two costs associated with running Brandzooka Ads: the audience targeting (known as targeting costs) and purchasing the ad placements (known as  placement costs).</p>
                                    <a href="https://meetings.grooveapp.com/44yo7f7j" target="_blank" className="btn btn-primary">BOOK A DEMO</a>

                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="image-outer a-budget position-relative">
                                    <img src="/images/builder-laptop.png" alt="image" />
                                    <div className="play-circle"><i className="fa fa-play"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="magic-connected-cards-outer pricing-tilled">
                <div className="container">
                    <div className="magic-connected-card-inner">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="job-tilled-view">
                                    <div className="row d-none d-md-flex">
                                        <div className="col-3"></div>
                                        <div className="col-3">
                                            <div className="inner-card grey">
                                                <div className="content">
                                                    <h4></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="inner-card light-pink">
                                                <div className="content">
                                                    <h4>INDUSTRY LEADING PERFORMANCE</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3"></div>
                                        <div className="col-3">
                                            <div className="inner-card light-pink">
                                                <div className="content">
                                                    <h4></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="inner-card blue">
                                                <div className="content">
                                                    <h4>NO UPFRONT REGISTRATION FEES</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="inner-card pink">
                                                <div className="content">
                                                    <h4>SET YOUR OWN BUDGET</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="inner-card grey">
                                                <div className="content">
                                                    <h4>REAL-TIME DATA</h4>
                                                </div>
                                            </div>
                                        </div>  
                                        <div className="col-3"></div>
                                        <div className="col-3">
                                            <div className="inner-card grey">
                                                <div className="content">
                                                    <h4>NO SUBSCRIPTIONS OR MONTHLY FEES</h4>
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="col-3">
                                            <div className="inner-card light-pink">
                                                <div className="content">
                                                    <h4>NO CONTRACTS OR AGREEMENTS</h4>
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="col-3">
                                            <div className="inner-card blue">
                                                <div className="content">
                                                    <h4>PREMIUM PLACEMENTS</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3"></div>
                                        <div className="col-3"></div>
                                        <div className="col-3">
                                            <div className="inner-card pink">
                                                <div className="content">
                                                    <h4>NO HIDDEN COSTS</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3"></div>
                                    </div>
                                    <div className="row d-flex d-md-none">
                                        <div className="col-3"></div>
                                        <div className="col-3">
                                            <div className="inner-card grey">
                                                <div className="content">
                                                    <h4></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="inner-card light-pink">
                                                <div className="content">
                                                    <h4>INDUSTRY LEADING PERFORMANCE</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="inner-card blue">
                                                <div className="content">
                                                    <h4>PREMIUM PLACEMENTS</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="inner-card light-pink">
                                                <div className="content">
                                                    <h4></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="inner-card blue">
                                                <div className="content">
                                                    <h4>NO UPFRONT REGISTRATION FEES</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="inner-card pink">
                                                <div className="content">
                                                    <h4>SET YOUR OWN BUDGET</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="inner-card grey">
                                                <div className="content">
                                                    <h4>REAL-TIME DAT</h4>
                                                </div>
                                            </div>
                                        </div>  
                                        <div className="col-3"></div> 
                                        <div className="col-3"> 
                                            <div className="inner-card grey">
                                                <div className="content">
                                                    <h4>NO SUBSCRIPTIONS OR MONTHLY FEES</h4>
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="col-3">
                                            <div className="inner-card light-pink">
                                                <div className="content">
                                                    <h4>NO CONTRACTS OR AGREEMENTS</h4>
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="col-3">
                                            <div className="inner-card blue">
                                                <div className="content">
                                                    <h4></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3"></div>
                                        <div className="col-3">
                                            <div className="inner-card pink">
                                                <div className="content">
                                                    <h4>NO HIDDEN FEES</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3"></div>
                                        <div className="col-3"></div>
                                    </div>
                                </div>        
                            </div>
                            <div className="col-lg-5">
                                <div className="magic-connected-card-text">
                                    <h3>The Perks</h3>
                                    <p className="the-perk-text">Brandzooka exists to give everyone access to the same thing: massive online advertising networks. To make that possible, Brandzooka accounts are free, and our users only pay when they launch advertising campaigns.</p>
                                    <Link to="/signup" className="btn btn-primary">CREATE AN ACCOUNT</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-partners our-platform set-top">
                <div className="platform-shape">
                   <img src="/images/quote.png" className="mw-100" alt="image" className="quote-img" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="platform-text pt-0">
                              <h5 className="mb-3">What Our Clients Are Saying</h5>
                            </div>  
                            <div className="reviews-slider">
                                <Slider {...settingsReview}>
                                    <div>
                                       <h4>The transparency and clear cut presentation of the results makes it much easier for our clients to understand the real benefits of using Brandzooka."</h4>
                                        <p>- Dentsu</p>
                                    </div>
                                    <div>
                                       <h4>The transparency and clear cut presentation of the results makes it much easier for our clients to understand the real benefits of using Brandzooka."</h4>
                                        <p>- Dentsu</p>
                                    </div>
                                    <div>
                                       <h4>The transparency and clear cut presentation of the results makes it much easier for our clients to understand the real benefits of using Brandzooka."</h4>
                                        <p>- Dentsu</p>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="position-relative">
                                <img src="/images/video-ss.png" className="mw-100" alt="image" />
                                <div className="play-circle"><i className="fa fa-play"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>                
        </Layout>
    );
}
export default Pricing;