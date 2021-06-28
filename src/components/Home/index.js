import React from 'react';
import Layout from '../MyLayout'
import Slider from "react-slick";
import {Link} from "react-router-dom";
import $ from "jquery"

function Home(props) {
  const sliderItems=[
    {
      id:1,
      banner:"/images/Home/screenshot.png",
      source:"https://d1cy2e0vbrm1md.cloudfront.net/videos/nike-ad.mp4"
    },
    {
      id:2,
      banner:"/images/Home/screenshot.png",
      source:"https://d1cy2e0vbrm1md.cloudfront.net/videos/duraflame-ad.mp4"
    }
  ];
  const pauseAllVideo = () => {
    $('video').each(function() {
      $(this).get(0).pause();
  });
  }
  const playVideo = (id) => {
    const video = document.getElementById(id);
    $('video').removeClass('videoPlay');
    $(video).addClass('videoPlay');
    
    if (video.paused || video.ended) {
      pauseAllVideo();
      video.play();
    } else {
      $(video).removeClass('videoPlay');
      video.pause();
    }
  }

  const settings = {
    dots: true,
    infinite: false,
    arrows:false,
    speed: 500,
    slidesToShow: 1,
    vertical: true,
    verticalSwiping: true,
    slidesToScroll: 1,
    customPaging: i => (
      <div className="video-slider-counts">
        <span className="text">Nike: Run with Purpose </span>
        <span className="counts">
          0{i + 1}
        </span>
      </div>
    )
  };
  const settingsPartners = {
    dots: false,
    infinite: true,
    arrows:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return (
        <Layout>
          <section className="page-banner home-page-banner help-center-page-banner home-page">
              <div className="faq-page-banner-shapes">
                <div></div>
                <div></div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-9">
                    <div className="page-banner-text new-page-banner-text">
                      <h1>
                        Welcome to Brandzooka.<br/>
                        Your Self-Service Advertising Platform
                      </h1>
                      <p>
                        With no subscriptions or minimums, placing your ad online and on TV has never been easier. Brandzooka provides powerful and transparent digital ad placements across Web, Mobile, Streaming Audio, and Connected TV at any budget size. Now that’s Digital Media for the People!
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
                <div className="play-btn-main text-center">
                  <a href="#reels" className="playBtn">
                    <i className="fas fa-play"></i>
                  </a>
                  <span>
                    SHOW REEL
                  </span>
                </div>
              </div>
              
            </section>
          <section className="our-platform">
              <div className="platform-shape"></div>
              <div className="container">
                <div className="row">
                  <div className="col-md-5">
                    <div className="platform-text">
                      <h5 className="mb-3">OUR PLATFORM</h5>
                      <h3 className="mb-3">
                        50,000+ Advertisers Worldwide are Growing with Brandzooka
                      </h3>
                      <p className="mb-3">
                        Connect and share your digital content beyond the constraints of Search and Social. Reach your consumers wherever they are with Connected TV, Web, Mobile, and Audio ads. Our self-service platform allows you to unleash the power of data-driven premium digital advertising to deliver pro results - without additional cost or overhead. 
                      </p>
                      <Link to="/platform" className="btn btn-primary">LEARN MORE</Link>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <img src="/images/Home/builder_laptop.png" alt="image"/>
                  </div>
                  <div className="col-md-2"></div>
                </div>
              </div>
          </section>
          
          <div className="video-slider pt-md-5" id="reels">
            <Slider {...settings}>
              {sliderItems.map((item, key) => {
                  return <div className="position-relative">
                    <video preload="metadata" id={key+1} controls poster={item.banner}>
                      <source src={item.source} type="video/mp4" />
                    </video>
                    <div className="play-circle" onClick={e => playVideo(key+1)}><i className="fa fa-play"></i></div>
                  </div>
              })}
              {/* <div className="position-relative">
                <img src="/images/Home/screenshot.png" />
                <div className="play-circle"><i className="fa fa-play"></i></div>
            </div> */}
            </Slider>
          </div>
          
          <section className="brand-cards">
            <div className="container">
              <div className="brand-card-outer">
                <div>
                  <div>
                    <img src="/images/Home/wsj.png" /><br/>
                    <span>"Execute campaigns across the biggest sites"</span>
                  </div>
                </div>
                <div>
                  <div>
                    <img src="/images/Home/google.png" /><br/>
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
                    <img src="/images/Home/adweek.png" /><br/>
                    <span>"Find fans at all <br />budget levels"</span>
                  </div>
                </div>
                <div>
                  <div>
                    <img src="/images/Home/facebook.png" /><br/>
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
                    <img src="/images/Home/nbc.png" /><br/>
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
                        <img src="/images/Home/tv-icon.png" alt="icon" />
                      </div>
                      <h3>The Magic of Connected TV at Your Fingertips</h3>
                      <p>Meet your consumers on the big screen with Brandzooka’s premium TV placements.</p>
                      <Link to="/products" className="btn btn-primary">OUR PRODUCTS</Link>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="image-outer">
                      <img src="/images/Home/hue-sat-2.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="magic-connected-card-inner">
                <div className="row">
                  <div className="col-md-5">
                    <div className="magic-connected-card-text">
                      <div className="shape">
                        <img src="/images/Home/media-box.png" alt="icon" />
                      </div>
                      <h3>Your Media Partner in a Box </h3>
                      <p>One platform to rule them all! Manage cross-channel digital campaigns from one easy and transparent platform.</p>
                      <Link to="/platform" className="btn btn-primary">OUR PLATFORM</Link>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="image-outer media-partner">
                      <div className="inner-image">
                        <img src="/images/Home/hue-sat-8.png" alt="image" />
                      </div>
                      <img src="/images/Home/hue-sat-4.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="magic-connected-card-inner">
                <div className="row">
                  <div className="col-md-5">
                    <div className="magic-connected-card-text">
                      <div className="shape">
                        <img src="/images/Home/marketer-icon.png" alt="icon" />
                      </div>
                      <h3>Purpose-Built for Marketers</h3>
                      <p>We built Brandzooka as a user-driven tool that delivers on your desired results. From campaign setup to analytics and reporting we are there to help your business thrive.</p>
                      <Link to="/signup" className="btn btn-primary">CREATE AN ACCOUNT</Link>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="image-outer">
                      <img src="/images/Home/hue-sat-3.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="magic-connected-card-inner">
                <div className="row">
                  <div className="col-md-5">
                    <div className="magic-connected-card-text">
                      <div className="shape">
                        <img src="/images/Home/spark-icon.png" alt="icon" />
                      </div>
                      <h3>Spark Relationships with Pinpoint Targeting </h3>
                      <p>Reach your desired audience by connecting with our 30+ premium data partners, or target users by leveraging your own data. Either way, serve ads only to who you want when you want.</p>
                      <Link to="/case-studies" className="btn btn-primary">RESOURCES</Link>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="image-outer">
                      <img src="/images/Home/hue-sat-5.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="magic-connected-card-inner">
                <div className="row">
                  <div className="col-md-5">
                    <div className="magic-connected-card-text">
                      <div className="shape">
                        <img src="/images/Home/target-icon.png" alt="icon" />
                      </div>
                      <h3>A Budget That Works for You</h3>
                      <p>We deliver the world, on-demand. With no minimums or contracts you have the power to determine how you spend your marketing budget - hassle free.</p>
                      <a href="https://meetings.grooveapp.com/44yo7f7j" target="_blank" className="btn btn-primary">BOOK A DEMO</a>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="image-outer a-budget">
                      <div className="inner-image">
                        <img src="/images/Home/hue-sat-6.png" alt="image" />
                      </div>
                      <img src="/images/Home/hue-sat-7.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>        
            </div>
          </section>
          <section className="powerful-way our-platform pb-0">
            <div className="table-card">
              <div className="child"></div>
              <div className="container">
                <div className="powerful-way-table">

                </div>
                  <div className="platform-text">
                    <h5 className="mb-3">PRICING</h5>
                    <h3 className="mb-3 powerful-heading">
                      The Most Powerful Way to Advertise on TV & Online
                    </h3>
                    <div className="table-responsive">
                      <table className="table powerful-table mb-4">
                      <thead>
                        <tr>
                          <th>PLATFORM</th>
                          <th>MINIMUM<br/>SPEND</th>
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
          
            <div className="powerful-way-triangle-outer">
              <div>
                <div className="left">
                  <div className="overlay">
                    <div className="text-content">
                      <h3>Digital Media for the People</h3>
                      <p>Agencies and marketers worldwide are discovering the power of reaching their audiences with premium digital ad placements on Brandzooka. Democratizing digital advertising is what we do.</p>
                      <Link to="/about" className="btn btn-primary blue">ABOUT US</Link>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="text-content">
                    <h3>Get a Higher ROI from Your Digital Media</h3>
                    <button className="btn btn-primary d-none d-lg-block">
                      <Link to="/signup">
                        CREATE AN ACCOUNT
                      </Link> 
                    </button>
                    <a href="https://meetings.grooveapp.com/44yo7f7j" className="btn btn-primary d-lg-none" target="_blank">
                      SCHEDULE A DEMO
                    </a>
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
                      Backed by a team of passionate individuals, our revolutionary technology platform connects you with the best-in-class support, strategy, media available to deliver on your goals.  
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
        </Layout>
    );
}
export default Home;
