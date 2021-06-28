import React from "react";
import Layout from '../MyLayout'
import Slider from "react-slick";
import {Link} from "react-router-dom";

function About(Props) {
    const settingsPartners = {
        dots: false,
        infinite: true,
        arrows:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const settingsBeTransparent = {
      dots: true,
      infinite: true,
      arrows:true,
      speed: 100,
      fade: true,
      autoplay:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => (
        <div
          style={{
            backgroundColor: "#ddd",
            borderRadius: "10px",
            padding: "10px"
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          style={{
            width: "30px",
            color: "blue",
            border: "1px blue solid"
          }}
        >
          {i + 1}/3
        </div>
      )
    };
    const settingsRecentPress = {
      dots: false,
      infinite: true,
      arrows:true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      focusOnSelect: true,
      centerMode: true,
      centerPadding: '150px',
      responsive:[
        {
          breakpoint: 1199,
          settings:{
            centerPadding:'0'
          }
        },
        {
          breakpoint: 767,
          settings:{
            centerPadding:'0',
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings:{
            centerPadding:'0',
            slidesToShow: 1,
          }
        }
      ]
    };
    return (
        <Layout> 
            <section className="page-banner home-page-banner about-page-banner">
              <div className="about-page-banner-shapes">
                <div></div>
                <div></div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-9">
                    <div className="page-banner-text">
                      <h1>
                        We're About Creating a World of Possibilities
                      </h1>
                      <p>
                        Brandzooka is purpose built to fully democratize and disrupt the media industrial complex. We are digital media for the people.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 text-right">
                  </div>
                </div>
                <div className="play-btn-main text-center">
                  <a href="#reels" className="playBtn">
                    <i className="fas fa-play"></i>
                  </a>
                  <span>
                    OUR STORY
                  </span>
                </div>
              </div>
              
            </section>
            
            <section className="our-platform">
              <div className="container">
                <div className="row">
                    <div className="col-lg-5 mt-5 mt-lg-0">
                        <div className="platform-text">
                            <h5 className="mb-3">WHY WORK WITH US?</h5>
                            <h3 className="mb-3">
                                Making a Real Difference
                            </h3>
                            <p className="mb-3">
                                We built the first scalable platform connecting millions of premium digital placements to business and agencies around the world. We focus on helping agencies, brands, small businesses, enterprises, political agencies and non-profits unleash the power of Connected TV, Mobile, Web, and Streaming Audio to drive their businesses to success. 
                            </p>
                            <Link to="/platform" className="btn btn-primary">OUR PLATFORM</Link>
                        </div>
                    </div>
                    <div className="col-lg-7 order-first order-lg-last">
                        <img src="/images/about-images/video-placeholder.png" alt="image" id="reels"/>
                    </div>
                </div>
                </div>
            </section>
            <section className="we-know about">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="row tilled-grid new-row-tilled-grid">
                      <div className="col-4"></div>
                      <div className="col-4">
                        <div className="inner-box">
                          <img src="/images/about-images/tv-photo.png" />
                        </div>
                      </div>
                      <div className="col-4"></div>
                      <div className="col-4">
                        <div className="inner-box">
                          <img src="/images/about-images/biker-Photo.png" />
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="inner-box">
                          <img src="/images/about-images/phone-Photo.png" />
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="inner-box">
                          <img src="/images/about-images/office-Photo.png" />
                        </div>
                      </div>
                      <div className="col-8 slider-grid">
                        <div className="inner-box be-transparent-slider">
                          <Slider {...settingsBeTransparent}>
                            <div>
                              <h5>Be Transparent</h5>
                              <p>There is no persuasiveness more effectual than transparency.</p>
                            </div>
                            <div>
                              <h5>Be Empowering</h5>
                              <p>The greatest impact we make is to empower our fellow man.</p>
                            </div>
                            <div>
                              <h5>Be Golden</h5>
                              <p>The golden rule is still the best advice, and we all know it.</p>
                            </div>
                          </Slider>
                        </div>
                      </div>
                      <div className="col-4 new-col-4">
                        <div className="inner-box">
                          <img src="/images/about-images/girl-Photo.png" />
                        </div>
                      </div>
                    </div>
                  
                  </div>
                  <div className="col-lg-5">
                    <div className="we-know-content">
                      <h4>We Know Who We Are and We Know Where We Are Going</h4>
                      <p>At Brandzooka we believe in harnessing the creative spirit and focused energy of some of the most seasoned investors and communities that move the world forward. Brandzooka is a venture backed technology company disrupting the $500b digital and programmatic media ecosystems. We've brought together a group of the most seasoned and succesful investors in media, advertising and publishing.</p>
                      <button type="button" className="btn btn-primary">MEET THE TEAM</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="join-the-team">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6">
                      <div className="join-the-team-content">
                        <h4>Join the Brandzooka Team</h4>
                        <p>At Brandzooka, we believe in each other. Our people are part of a family who celebrate each other’s authentic selves. If you are passionate about making a bigger impact, creating a better user experience every day, and aren’t scared of some old fashioned hard work, take a look at our open positions.</p>
                        <Link to="/jobs" className="btn btn-primary blue">SEE OPEN POSITIONS</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            
            <section className="our-partners our-platform">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <div className="platform-text">
                    <h5 className="mb-3">OUR PARTNERS</h5>
                    <h3 className="mb-3">
                      Behind the Magic There’s a Revolutionary Technology Platform 
                    </h3>
                    <p className="mb-3">
                      Backed by a team of passionate individuals, our revolutionary technology platform connects you with the best-in-class support, strategy, and media available to deliver on your goals.  
                    </p>
                    <Link to="/our-partners" className="btn btn-primary">VIEW ALL PARTNERS</Link>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="partners-slider">
                    <Slider {...settingsPartners}>
                      <div>
                        <img src="/images/Home/partners.png" />
                      </div>
                      <div>
                        <img src="/images/Home/partners.png" />
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>  
          </section>
            <section className="recent-press">
              <div className="head-section">
                <h3>Recent Press</h3>
                <Link to="recent-press" className="btn btn-primary">SEE MORE</Link>
              </div>
              <div className="recent-press-slider">
                <Slider {...settingsRecentPress}>
                    <div className="press-card">
                      <img src="/images/about-images/press-logo.png" />
                      <h4>Brandzooka Closes Series A and Appoints Co-Founder Kelly Dotseth as CEO</h4>
                      <p>Brandzooka closed $5.6 million in Series A funding, bringing its total funding to date to $10.1 million</p>
                        <Link to="/" className="read-more">
                          <span>
                              READ MORE 
                          </span>
                          <img src="/images/arrow-white.png" width="30px" alt="arrow image" />                
                        </Link>
                    </div>
                    <div className="press-card">
                      <img src="/images/about-images/press-logo.png" />
                      <h4>Brandzooka Closes Series A and Appoints Co-Founder Kelly Dotseth as CEO</h4>
                      <p>Brandzooka closed $5.6 million in Series A funding, bringing its total funding to date to $10.1 million</p>
                        <Link to="/" className="read-more">
                          <span>
                              READ MORE 
                          </span>
                          <img src="/images/arrow-white.png" width="30px" alt="arrow image" />                
                        </Link>
                    </div>
                    <div className="press-card">
                      <img src="/images/about-images/press-logo.png" />
                      <h4>Brandzooka Closes Series A and Appoints Co-Founder Kelly Dotseth as CEO</h4>
                      <p>Brandzooka closed $5.6 million in Series A funding, bringing its total funding to date to $10.1 million</p>
                        <Link to="/" className="read-more">
                          <span>
                              READ MORE 
                          </span>
                          <img src="/images/arrow-white.png" width="30px" alt="arrow image" />                
                        </Link>
                    </div>
                    <div className="press-card">
                      <img src="/images/about-images/press-logo.png" />
                      <h4>Brandzooka Closes Series A and Appoints Co-Founder Kelly Dotseth as CEO</h4>
                      <p>Brandzooka closed $5.6 million in Series A funding, bringing its total funding to date to $10.1 million</p>
                        <Link to="/" className="read-more">
                          <span>
                              READ MORE 
                          </span>
                          <img src="/images/arrow-white.png" width="30px" alt="arrow image" />                
                        </Link>
                    </div>
                    <div className="press-card">
                      <img src="/images/about-images/press-logo.png" />
                      <h4>Brandzooka Closes Series A and Appoints Co-Founder Kelly Dotseth as CEO</h4>
                      <p>Brandzooka closed $5.6 million in Series A funding, bringing its total funding to date to $10.1 million</p>
                        <Link to="/" className="read-more">
                          <span>
                              READ MORE 
                          </span>
                          <img src="/images/arrow-white.png" width="30px" alt="arrow image" />                
                        </Link>
                    </div>
                </Slider>
              </div>
            </section>
        </Layout>
    );
}

export default About;
