import React from 'react';
import Layout from '../MyLayout';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import $ from "jquery"

function Platform(props) {
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
        arrows: false,
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
                <div className="triangle-banner platform-page">
                </div>
                <div className="triangle-banner-overlay"></div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className=" triangle-banner-content">
                                <h1>The Revolutionary Technology Platform</h1>
                                <p>Connect and share your digital content beyond the constraints of Search and Social. Reach your consumers wherever they are with Connected TV, Web, Mobile, and Audio ads. Our self-service platform allows you to unleash the power of data driven premium digital advertising to deliver pro results - without additional cost or overhead. </p>
                                <div className="buttons pb-3">
                                    <Link to="/signup" className="btn btn-primary my-2 mr-1">CREATE AN ACCOUNT</Link>
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
            <section className="our-platform platform-tilled the-campaign new-platform-tilled">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="platform-text">
                                <h5 className="mb-3">WHAT IS BRANDZOOKA</h5>
                                <h3 className="mb-3">
                                    The Magic of TV Meets Programmatic Media
                                </h3>
                                <p className="mb-3">
                                    Connect and share your story and reach beyond the constrains of Search and Social. TV is where people are watching. Brandzooka is the only platform that unleashes the power of TV ads and puts it at your fingertips. The power is yours to deliver pro results without intermediate cost and overhead.
                                </p>
                                <Link to="/products" className="btn btn-primary">OUR PRODUCTS</Link>
                            </div>
                        </div>
                        <div className="col-lg-7">
                        <div className="job-tilled-view case-detail platform new-job-tilled-view">
                                <div className="row row d-none d-sm-flex">
                                    <div className="col-3"></div>
                                    <div className="col-3"></div>
                                    <div className="col-3">
                                        <Link to="/for-agencies" className="inner-card pink">
                                            <div className="content">
                                                <h4>BRANDZOOKA IS FOR AGENCIES</h4>
                                                <span className="navigate-arrow"><i className="fas fa-long-arrow-alt-right"></i></span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-3"></div>
                                    <div className="col-3">
                                        <Link to="/for-enterprise" className="inner-card light-pink">
                                            <div className="content">
                                                <h4>BRANDZOOKA IS FOR ENTERPRISE</h4>
                                                <span className="navigate-arrow"><i className="fas fa-long-arrow-alt-right"></i></span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-3">
                                        <div className="inner-card">
                                            <div className="content image">
                                                <img src="/images/platform/tilled-1.png" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="inner-card">
                                            <div className="content image">
                                                <img src="/images/platform/tilled-2.png" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <Link to="/for-brands" className="inner-card light-pink">
                                            <div className="content">
                                                <h4>BRANDZOOKA IS FOR BRANDS</h4>
                                                <span className="navigate-arrow"><i className="fas fa-long-arrow-alt-right"></i></span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-3"></div>
                                    <div className="col-3">
                                        <div className="inner-card">
                                            <div className="content image">
                                                <img src="/images/platform/tilled-3.png" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <Link to="/for-political" className="inner-card blue">
                                            <div className="content">
                                                <h4>BRANDZOOKA IS FOR POLITICAL/NON-PROFIT</h4>
                                                <span className="navigate-arrow"><i className="fas fa-long-arrow-alt-right"></i></span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-3">
                                        <div className="inner-card">
                                            <div className="content image">
                                                <img src="/images/platform/tilled-4.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row d-flex d-sm-none new-d-sm-none">
                                    <div className="col-3"></div>
                                    <div className="col-3">
                                        <div className="inner-card">
                                            <div className="content image">
                                                <img src="/images/platform/tilled-1.png" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3"></div>
                                    <div className="col-3"></div>
                                    <div className="col-3">
                                        <div className="inner-card">
                                            <div className="content image">
                                                <img src="/images/platform/tilled-2.png" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <Link to="/for-agencies" className="inner-card pink">
                                            <div className="content">
                                                <h4>BRANDZOOKA IS FOR AGENCIES</h4>
                                                <span className="navigate-arrow"><i className="fas fa-long-arrow-alt-right"></i></span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-3">
                                        <Link to="/for-brands" className="inner-card light-pink">
                                            <div className="content">
                                                <h4>BRANDZOOKA IS FOR BRANDS</h4>
                                                <span className="navigate-arrow"><i className="fas fa-long-arrow-alt-right"></i></span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-3">
                                        <div className="inner-card">
                                            <div className="content image">
                                                <img src="/images/platform/tilled-3.png" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3"></div>
                                    <div className="col-3">
                                        <Link to="/for-enterprise" className="inner-card light-pink">
                                            <div className="content">
                                                <h4>BRANDZOOKA IS FOR ENTERPRISE</h4>
                                                <span className="navigate-arrow"><i className="fas fa-long-arrow-alt-right"></i></span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-3">
                                        <Link to="/for-political" className="inner-card blue">
                                            <div className="content">
                                                <h4>BRANDZOOKA IS FOR POLITICAL/NON-PROFIT</h4>
                                                <span className="navigate-arrow"><i className="fas fa-long-arrow-alt-right"></i></span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-3">
                                        <div className="inner-card">
                                            <div className="content image">
                                                <img src="/images/platform/tilled-4.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>                      
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="video-slider" id="reels">
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
            <section className="recent-press platform-features pt-5">
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
            <section className="powerful-way our-platform pb-0 platform-page">
                <div className="table-card">
                    <div className="child"></div>
                    <div className="container">
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
            <section className="platform-cards">
                <div className="container-fluid px-0">
                    <div className="platform-card-outer">
                        <div className="platform-card-inner">
                            <Link to="/for-agencies">
                                <img src="/images/platform/agencies.png" />
                                <div className="text">
                                    <h4>Brandzooka For Agencies</h4>
                                    <p>Brandzooka is purpose-built software designed to seize on agencies' biggest opportunity: media.</p>
                                    <img src="/images/arrow-white.png" className="icon"/>
                                </div>
                            </Link>
                        </div>
                        <div className="platform-card-inner">
                            <Link to="/for-brands">
                                <img src="/images/platform/brands.png" />
                                <div className="text">
                                    <h4>Brandzooka For Brands</h4>
                                    <p>Businesses worldwide are discovering the power of reaching new audiences on Primetime TV with Brandzooka. </p>
                                    <img src="/images/arrow-white.png" className="icon"/>
                                </div>
                            </Link>
                        </div>
                        <div className="platform-card-inner">
                            <Link to="/for-enterprise">
                                <img src="/images/platform/enterprise.png" />
                                <div className="text">
                                    <h4>Brandzooka For Enterprise</h4>
                                    <p>Launch a campaign in minutes and reach new customers for all of your business locations.</p>
                                    <img src="/images/arrow-white.png" className="icon"/>
                                </div>
                            </Link>
                        </div>
                        <div className="platform-card-inner">

                            <Link to="/for-political">
                                <img src="/images/platform/political.png" />
                                <div className="text">
                                    <h4>Brandzooka For Political/Non-Profit</h4>
                                    <p>Reach your constituents in minutes.</p>
                                    <img src="/images/arrow-white.png" className="icon"/>
                                </div>
                            </Link>

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
                              <h5 className="mb-3">WHAT OUR AGENCY CLIENTS ARE SAYING</h5>
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
export default Platform;