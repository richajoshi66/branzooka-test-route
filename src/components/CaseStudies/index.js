import React from "react";
import Layout from '../MyLayout';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import $ from "jquery"

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));

function CaseStudies(Props) {

    const caseStudies = [
        {url: '/images/Home/screenshot-2.png', title: 'JanSport: Digital Burrito', description: 'Burritos are tasty, cables are messy. The Burrito foldts up with a burrito wrap style design to keep your cables neat.'},
        {url: '/images/Home/screenshot-2.png', title: 'JanSport: Digital Burrito', description: 'Burritos are tasty, cables are messy. The Burrito foldts up with a burrito wrap style design to keep your cables neat.'}
    ];
    const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [isFilter, setIsFilter] = React.useState(false);

  const handleFilterChange = (event) => {
    if(event.target.value === '') {
        setIsFilter(false);
        return false;
    }
    setIsFilter(true);
};
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
    return (
        <Layout>
            <section className="page-banner home-page-banner case-studies-banner">
                <div className="brandzooka-page-banner-shapes">
                    <div></div>
                    <div></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="page-banner-text">
                                <h1 className="brandzooka-heading">
                                    Case Studies and Success Stories
                                </h1>
                                <p>
                                    Brandzooka has helped businesses and brands around the world drive audience engagement, increase conversions, generate leads, and meet your key consumer at their point of consideration.
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
                            FEATURED
                  </span>
                    </div>
                </div>
            </section>
            <div className="video-slider" id="reels">
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
            <section className="recent-press proud-moments">
                <div className="container">
                    <div className="head-section ml-0 ml-sm-auto">
                        <h3>Proud Moments</h3>
                        <div className="tabs-main d-none d-lg-block">
                            <AppBar position="static">
                                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                                <Tab label="ALL" {...a11yProps(0)} />
                                <Tab label="AGENCIES " {...a11yProps(1)} />
                                <Tab label="BRANDS" {...a11yProps(2)} />
                                <Tab label="SMALL BUSINESS" {...a11yProps(3)} />
                                <Tab label="ENTERPRISE" {...a11yProps(4)} />
                                <Tab label="POLITICAL/NON-PROFIT" {...a11yProps(5)} />
                                </Tabs>
                            </AppBar>
                        </div>
                    </div>
                    <div className="moments-outer">
                        <div className="d-none d-lg-block">
                            <TabPanel value={value} index={0}>
                            <div className="row">
                                <div className="col-sm-6 col-md-4">
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
                                </div>
                                <div className="col-sm-6 col-md-4">
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
                                </div>
                                <div className="col-sm-6 col-md-4">
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
                                </div>
                                <div className="col-sm-6 col-md-4">
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
                                </div>
                            </div>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <div className="row">
                                    <div className="col-sm-6 col-md-4">
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
                                    </div>
                                    <div className="col-sm-6 col-md-4">
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
                                    </div>
                                </div>    
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <div className="row">
                                    <div className="col-sm-6 col-md-4">
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
                                    </div>
                                </div>    
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                <div className="row">
                                    <div className="col-sm-6 col-md-4">
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
                                    </div>
                                    <div className="col-sm-6 col-md-4">
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
                                    </div>
                                </div>    
                            </TabPanel>
                            <TabPanel value={value} index={4}>
                                <div className="row">
                                    <div className="col-sm-6 col-md-4">
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
                                    </div>
                                </div>    
                            </TabPanel>
                            <TabPanel value={value} index={5}>
                                <div className="row">
                                    <div className="col-sm-6 col-md-4">
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
                                    </div>
                                    <div className="col-sm-6 col-md-4">
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
                                    </div>
                                </div>    
                            </TabPanel>
                        </div>
                        <div className="d-lg-none tab-filter text-right">
                            <div className="form-group">
                                <select onChange={handleFilterChange}>
                                    <option value="" selected >FILTER BY</option>
                                    <option value="">ALL</option>
                                    <option value="AGENCIES">AGENCIES</option>
                                    <option value="BRANDS">BRANDS</option>
                                    <option value="SMALL BUSINESS">SMALL BUSINESS</option>
                                    <option value="ENTERPRISE">ENTERPRISE</option>
                                    <option value="POLITICAL/NON-PROFIT">POLITICAL/NON-PROFIT</option>
                                </select>
                            </div>
                        </div>
                        <div className="row d-lg-none">
                            {isFilter ? caseStudies && caseStudies.length && caseStudies.map((item, key) => {
                                return <div className="col-sm-6 col-md-4">
                                <Link to="/case-detail">
                                    <div className="moment-card">
                                        <div className="img-main">
                                            <img src={item.url} />
                                        </div>
                                        <div className="content">
                                            <h5>{item.title}</h5>
                                            <p>
                                            {item.description}
                                            </p>
                                            <div className="view-case">
                                                <span>VIEW CASE STUDY</span>
                                                <img src="/images/arrow-white.png" width="30px" alt="arrow image" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            }): <><div className="col-sm-6 col-md-4">
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
                        </div>
                        <div className="col-sm-6 col-md-4">
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
                        </div>
                        <div className="col-sm-6 col-md-4">
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
                        </div>
                        <div className="col-sm-6 col-md-4">
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
                        </div></>}
                        </div>
                        <div className="text-center">
                            <button className="btn btn-secondary">LOAD MORE</button>
                        </div>
                    </div>
                </div>
            </section>  
            <section className="powerful-way position-relative pb-0 case-studies-triangle">
                <div className="powerful-way-triangle-outer">
                    <div>
                        <div className="left">
                            <div className="overlay">
                                <div className="text-content">
                                    <h3>Are You Ready to Get Started?</h3>
                                    <p>Agencies, businesses and brands worldwide are discovering the power of reaching new audiences through digital media and Connected TV with Brandzooka. It’s the power of digital at your fingertips. </p>
                                    <a href="https://meetings.grooveapp.com/44yo7f7j" target="_blank" className="btn btn-primary blue">BOOK A DEMO</a>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="text-content">
                                <h3>Get a Higher ROI from Your Digital Media</h3>
                                <button className="btn btn-primary">
                                    <Link to="/signup">
                                        CREATE AN ACCOUNT
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-partners case-studies-page pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7"></div>
                        <div className="col-md-5">
                            <div className="platform-text pt-0">
                                <img src="/images/quote.png" className="mw-100" alt="image" width="40px"  />
                              <h5 className="mb-3 mt-3">WHAT OUR CLIENTS ARE SAYING</h5>
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
                    </div>
                </div>  
            </section>
        </Layout>
    );
}
export default CaseStudies;