import React from "react";
import Layout from '../MyLayout'
import Slider from "react-slick";
import {Link} from "react-router-dom";

function BrandzookaPlus(Props) {
    const settingsPartners = {
        dots: false,
        infinite: true,
        arrows:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
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
            <section className="page-banner home-page-banner brandzooka-page-banner">
              <div className="brandzooka-page-banner-shapes">
                <div></div>
                <div></div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-9">
                    <div className="page-banner-text">
                      <h1 className="brandzooka-heading">
                        Brandzooka
                        <img src="/images/plus.png" />
                      </h1>
                      <p>
                        Designed for brands and agencies transforming their business through the power of digital media. Brandzooka+ delivers unique customization and targeting to set you apart. 
                      </p>
                      <div className="buttons pb-3">
                        <Link to="" className="btn btn-primary mr-2 my-2">APPLY FOR ACCESS</Link>
                        <a href="https://meetings.grooveapp.com/44yo7f7j" target="_blank" className="btn btn-secondary my-2">BOOK A DEMO</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 text-right">
                  </div>
                </div>
                <div className="play-btn-main text-center">
                  <a href="#tour" className="playBtn">
                    <i className="fas fa-play"></i>
                  </a>
                  <span>
                    TAKE A TOUR
                  </span>
                </div>
              </div>
            </section>
            <section className="our-platform the-greatest" id="tour">
              <div className="platform-shape"></div>
              <div className="container">
                <div className="row">
                  <div className="col-md-6 mt-5 mt-md-0">
                    <div className="platform-text">
                      <h5 className="mb-3">PLATFORM FEATURES</h5>
                      <h3 className="mb-3">
                          The Greatest Efficiency of Media Dollars at the Account Level
                      </h3>
                      <p className="mb-3">
                      Brandzooka+ is the full power of Brandzooka with the addition of collaboration tools and branding capabilities for brands and agencies. Harnes the power of collbration  with all our new teams features. Become a Brandzooka partner and differentiate yourself from the rest with a branded platform. 
                      </p>
                      <button type="button" className="btn btn-primary">APPLY FOR ACCESS</button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="position-relative">
                        <img src="/images/Home/builder_laptop.png" alt="image"/>
                        <div className="play-circle">
                            <i className="fa fa-play"></i>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="magic-connected-cards-outer bring-and-save-outer mt-0">
                <div className="container">
                    <div className="magic-connected-card-inner">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="image-outer">
                                    <img src="/images/laptop-1.png" alt="image" />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="magic-connected-card-text">
                                    <h3>More Efficiency with Each Media Dollar</h3>
                                    <p>Brandzooka+ gives you access to greater media efficiency through account level media tiers. The more you deploy on Brandzooka+ the greater the media efficiency out of every dollar placed.</p>
                                    <a href="https://meetings.grooveapp.com/44yo7f7j" target="_blank" className="btn btn-primary my-2">BOOK A DEMO</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="magic-connected-card-inner">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="image-outer">
                                    <img src="/images/laptop-2.png" alt="image" />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="magic-connected-card-text">
                                    <h3>Team Settings That Will Keep You Organized</h3>
                                    <p>Brandzooka+ is designed with collaboration in mind. Easily share and manage every aspect of your media campaigns with smart roles and payment setting across your entire book of business.</p>
                                    <button className="btn btn-primary">APPLY FOR ACCESS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="magic-connected-card-inner">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="image-outer">
                                    <img src="/images/laptop-3.png" alt="image" />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="magic-connected-card-text">
                                    <h3>BZ+ and You, CO-Brand the Best Tool in Advertising</h3>
                                    <p>Set your agency  or brand apart from the rest. With Brandzooka+ you not only get access to the best Brandzooka has to offer, but can be client-ready and armed with a branded toolkit that legitimizes your offering.</p>
                                    <Link to="/case-studies" className="btn btn-primary">RESOURCES</Link>
                                </div>
                            </div>
                        </div>
                    </div>               
                </div>
            </section>  
            <section className="read-triangles position-relative">
                <div className="powerful-way-triangle-outer">
                    <div>
                        <div className="left">
                            <div className="overlay">
                                <div className="text-content">
                                    <h3>Ready to Get Started?</h3>
                                    <p>Brandzooka delivers your business or agency the opportunity to reach existing and new customers by delivering your message on TV and the worlds best sites. It's time to level up your business. </p>
                                    <button type="button" className="btn btn-primary blue">APPLY FOR ACCESS</button>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                        <div className="text-content">
                            <h3>Over 50,000 Users Powered by Brandzooka</h3>
                            <a href="https://meetings.grooveapp.com/44yo7f7j" className="btn btn-primary" target="_blank">
                                SCHEDULE A DEMO
                            </a> 
                        </div>  
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-partners our-platform brandzooka-page">
                <div className="platform-shape">
                   <img src="/images/quote.png" className="mw-100" alt="image" className="quote-img" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="platform-text">
                              <h5 className="mb-3">WHAT OUR USERS ARE SAYING</h5>
                            </div>  
                            <div className="reviews-slider">
                                <Slider {...settingsReview}>
                                    <div>
                                       <h4>Brandzooka's platform blows our mind and makes our position as a brand's best asset more viable and sustainable."</h4>
                                        <p>- Fact & Fiction</p>
                                    </div>
                                    <div>
                                       <h4>Super happy with the results of our campaigns. We’ll definitely use Brandzooka again and again and again."</h4>
                                        <p>- Matter Unlimited</p>
                                    </div>
                                    <div>
                                       <h4>Brandzooka’s platform allows us to focus on delivering our message to the right people at in the right place and time."</h4>
                                        <p>- MKTG</p>
                                    </div>
                                    <div>
                                       <h4>The transparency and clear cut presentation of the results makes it much easier for our clients to understand the real benefits of using Brandzooka."</h4>
                                        <p>- Dentsu</p>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="partners-slider">
                                <Slider {...settingsPartners}>
                                    <div>
                                        <img src="/images/brandzooka/slider-image.png" />
                                    </div>
                                    <div>
                                        <img src="/images/brandzooka/slider-image.png" />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>  
            </section>
        
        </Layout>
    );
}

export default BrandzookaPlus;    