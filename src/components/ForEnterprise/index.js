import React from 'react';
import Layout from '../MyLayout'
import Slider from "react-slick";
import {Link} from "react-router-dom";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import $ from "jquery"

function ForEnterprise(props) {
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
      const playVideo = (id) => {
        const video = document.getElementById(id);
        $('video').removeClass('videoPlay');
        $(video).addClass('videoPlay');
        
        if (video.paused || video.ended) {
          video.pause();
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
          <span className="text">Monstercat</span>
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
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <Layout>
            <section className="page-banner triangle-banner-main">
                <div className="triangle-banner enterprise-page">
                </div>
                <div className="triangle-banner-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className=" triangle-banner-content">
                                <h1>For Enterprise – Structure Your Programmatic Efforts Across Your Organization’s Teams</h1>
                                <p>Enterprise-sized organizations and franchises worldwide are discovering the power of Brandzooka. Allocate budgets across teams and launch multiple campaigns in minutes. Reach new customers for every location of your business, and leverage real-time analytics to drive ROI. </p>
                                <div className="buttons pb-3">
                                    <Link to="/signup" className="btn btn-primary mr-2 my-2">CREATE AN ACCOUNT</Link>
                                    <a href="https://meetings.grooveapp.com/44yo7f7j" target="_blank" className="btn btn-secondary my-2">BOOK A DEMO</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="agencies-page-video">
                                <div className="position-relative">
                                    <img src="/images/builder-laptop.png" />
                                    <div className="play-circle">
                                        <i className="fa fa-play"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-platform for-agencies">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="platform-text">
                      <h5 className="mb-3">OUR PLATFORM</h5>
                      <h3 className="mb-3"> 
                        Elevate Your Brand with the Easiest Tool in Digital Advertising
                      </h3>
                      <p className="mb-3">
                        Brandzooka’s machine learning, media trading algorithms routinely outperform their human counterparts 3:1. In every category - from auto to spirits, and from sports to consumer goods, Brandzooka advertisers get results.    
                      </p>
                      <a href="https://meetings.grooveapp.com/44yo7f7j" target="_blank" className="btn btn-primary">BOOK A DEMO</a>
                    </div>
                  </div>
                  <div className="col-md-6">
                  <div className="image-outer media-partner">
                      <div className="inner-image">
                        <img src="/images/camera.png" alt="image" />
                      </div>
                      <img src="/images/hue-saturation.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="our-platform no-line">
              <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/images/hue-saturation-9.png" alt="image" />
                    </div>
                  <div className="col-md-6">
                    <div className="platform-text mt-5 mt-md-0">
                      <h3 className="mb-3">
                        Reach the Right Market at Your Budget 
                      </h3>
                      <p className="mb-3">
                      Brandzooka makes it possible for enterprises of all sizes to deploy targeted and high-performing rich media across digital and TV - at any budget level.   
                      </p>
                      <Link to="/contact" className="btn btn-primary">CONTACT US</Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="video-slider enterprise-page mb-5" id="reels">
                <div className="row">
                    <div className="col-"></div>
                </div>
                <Slider {...settings}>
                    {sliderItems.map((item, key) => {
                        return <div className="position-relative">
                            <video preload="metadata" id={key+1} controls poster={item.banner}>
                            <source src={item.source} type="video/mp4" />
                            </video>
                            <div className="play-circle" onClick={e => playVideo(key+1)}><i className="fa fa-play"></i></div>
                        </div>
                    })}
                </Slider>
            </div>
            <section className="recent-press platform-features">
                <div className="container">
                    <div className="head-section">
                        <h3>Platform Features</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-7">
                            <img src="/images/analytics-laptop.png" />
                        </div>
                        <div className="col-lg-5">
                            <div className="platform-features-accd">
                                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                    <AccordionSummary
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography className="accd-heading">The Magic of TV in your Toolkit</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className="acc-content">
                                            TV is where people are watching. Brandzooka is the only platform that unleashes the power of TV ads and  puts it at your fingertips.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                    <AccordionSummary
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography className="accd-heading">Your Media Partner in a Box</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className="acc-content">
                                        The best agencies monetize media with Brandzooka. The power is yours to deliver pro results without intermediate cost and overhead.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                    <AccordionSummary
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography className="accd-heading">Purpose-Built for Marketers</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className="acc-content">
                                        Your content is meant to be seen. Built to deliver the highest viewability at the lowest cost-per-view, from your first impression to your last.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                    <AccordionSummary
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography className="accd-heading">Spark Relationships with Pinpoint Targeting</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className="acc-content">
                                        Communicate with the right audiences through demographics, interests and spending habits. Globally or locally you'll find them here.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                    <AccordionSummary
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography className="accd-heading">A Budget That Works for You</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className="acc-content">
                                        We deliver the world, on-demand. It's your call how much you budget and how you decide to pay, no hassles and no subscriptions.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="powerful-way our-platform pb-0 enterprise-page">
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
                                <h3>Ready to Get Started?</h3>
                                <p>Brandzooka works with your enterprise to offer unique features and solutions for your clients and your goals. With no contracts, minimums, or user restrictions we are here to help you level up your digital media game. </p>
                                <Link to="/signup" className="btn btn-primary blue">SIGN UP FOR FREE</Link>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                    <div className="text-content">
                        <h3>The advertising power behind over 50,000 businesses worldwide </h3>
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
                              <h5 className="mb-3">WHAT OUR ENTERPRISE CLIENTS ARE SAYING</h5>
                            </div>  
                            <div className="reviews-slider">
                                <Slider {...settingsReview}>
                                    <div>
                                       <h4>"We've been trying out different ways to expand our reach and Brandzooka has helped out a lot in providing that space for our company."</h4>
                                        <p>- Oscar C.</p>
                                    </div>
                                    <div>
                                       <h4>"Brandzooka is exceptional. We love the powerful and insightful reporting options (mind-blowing!)."</h4>
                                        <p>- Qwan S.</p>
                                    </div>
                                    <div>
                                       <h4>"Our Brand Ambassadors for The Social Life use this platform which increased the number of sales leads we had in a month!"</h4>
                                        <p>- Andrea V.</p>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="partners-slider">
                                <Slider {...settingsPartners}>
                                    <div>
                                        <img src="/images/political-slider-img.png" />
                                    </div>
                                    <div>
                                        <img src="/images/political-slider-img.png" />
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
export default ForEnterprise;
