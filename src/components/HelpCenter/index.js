import React from "react";
import Layout from '../MyLayout';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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

function HelpCenter(Props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Layout>
            <section className="page-banner home-page-banner faq-page-banner help-center-page-banner">
                <div className="banner-overlay"></div>
                <div className="faq-page-banner-shapes">
                    <div></div>
                    <div></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="page-banner-text">
                                <h1>
                                    Welcome to the Help Center
                                </h1>
                                <div className="help-center-search">
                                    <input type="text" placeholder="SEARCH FOR ARTICLES"></input>
                                    <i className="fas fa-search"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="recent-press what-can-help">
              <div className="container">
                <div className="head-section">
                    <h3>What Can We Help With?</h3>
                    <div className="tabs-main d-none d-lg-block">
                        <AppBar position="static">
                            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                                <Tab label="ALL" {...a11yProps(0)} />
                                <Tab label="FAQ " {...a11yProps(1)} />
                                <Tab label="PRICING" {...a11yProps(2)} />
                                <Tab label="TARGETING" {...a11yProps(3)} />
                                <Tab label="ANALYTICS" {...a11yProps(4)} />
                                <Tab label="VIDEO" {...a11yProps(5)} />
                                <Tab label="PROGRAMMATIC QUESTIONS" {...a11yProps(6)} />
                            </Tabs>
                        </AppBar>
                    </div>
                    <div className="d-lg-none tab-filter text-right">
                        <div className="form-group">
                            <select>
                                <option value="" selected >FILTER BY</option>
                                <option value="all">ALL</option>
                                <option value="FAQ">FAQ</option>
                                <option value="PRICING">PRICING</option>
                                <option value="TARGETING">TARGETING</option>
                                <option value="ANALITICS">ANALITICS</option>
                                <option value="VIDEO">VIDEO</option>
                                <option value="PROGRAMMATIC QUESTIONS">PROGRAMMATIC QUESTIONS</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="help-center-list">
                    <ul>
                        <li>
                            <Link to="/article-detail">
                                <p className="heading">How do I launch a display ad?</p>
                                <p className="sub-text">A few tips and tricks.</p>
                                <span><img src="images/arrow-white.png" /></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/article-detail">
                                <p className="heading">Can I add budget to my campaign?</p>
                                <p className="sub-text">You sure can!</p>
                                <span><img src="images/arrow-white.png" /></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/article-detail">
                                <p className="heading">How much does Brandzooka cost?</p>
                                <p className="sub-text">Reach your audience online for just $5 per day!</p>
                                <span><img src="images/arrow-white.png" /></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/article-detail">
                                <p className="heading">Is there a monthly minimum spend requirement?</p>
                                <p className="sub-text">Nope, Brandzooka does not have a minimum monthly spend!</p>
                                <span><img src="images/arrow-white.png" /></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/article-detail">
                                <p className="heading">What are Saved Audiences?</p>
                                <p className="sub-text">Keep your target audience close and your saved audiences closer.</p>
                                <span><img src="images/arrow-white.png" /></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/article-detail">
                                <p className="heading">Why is targeting different for TV?</p>
                                <p className="sub-text">Connected TV targets by household.</p>
                                <span><img src="images/arrow-white.png" /></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/article-detail">
                                <p className="heading">Why are some impressions serving outside of my geographical area?</p>
                                <p className="sub-text">Don’t be alarmed.</p>
                                <span><img src="images/arrow-white.png" /></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/article-detail">
                                <p className="heading">Can I share my campaign results with my team?</p>
                                <p className="sub-text">Sure thing! We encourage sharing and caring. It can be fun.</p>
                                <span><img src="images/arrow-white.png" /></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/article-detail">
                                <p className="heading">What kind of videos do you accept?</p>
                                <p className="sub-text">Yours, so long as it fits the following criteria.</p>
                                <span><img src="images/arrow-white.png" /></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/article-detail">
                                <p className="heading">Can I see examples of videos that ran through Brandzooka?</p>
                                <p className="sub-text">You sure can! Here’s a small sample.</p>
                                <span><img src="images/arrow-white.png" /></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/article-detail">
                                <p className="heading">How do you choose what websites to put my ad on?</p>
                                <p className="sub-text">It’s all about real-time bidding.</p>
                                <span><img src="images/arrow-white.png" /></span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="text-center mt-5">
                    <button type="button" className="btn btn-secondary">LOAD MORE</button>
                </div>
              </div>
            </section>
            <section className="target-guidelines mt-4">
                <div className="row mx-0">
                    <div className="col-md-6 box-main guideline-box">
                        <div className="guidelines-box-text">
                            <h2>Targeting Guidelines</h2>
                            <p>
                                Brandzooka taps into millions of data points to make sure your digital media gets to your targeted audience. Find out how with our Targeting     Guidelines. 
                            </p>
                            <a href="https://s3.amazonaws.com/brandzooka-image-store/pdf/best_practices.pdf" target="_blank" className="btn btn-primary">DOWNLOAD</a>
                        </div>
                    </div>
                    <div className="col-md-6 box-main best-practice-box">
                        <div className="guidelines-box-text">
                            <h2>Best Practices</h2>
                            <p>
                                Get tips on how to make the most out of your creative – including Call-to-Actions (CTAs) for optimal performance, higher audience engagement, and greater lead generation.  
                            </p>
                            <a href="https://s3.amazonaws.com/brandzooka-image-store/pdf/best_practices.pdf" target="_blank" className="btn btn-primary">DOWNLOAD</a>
                        </div>
                    </div>
                </div>
            </section>  
        </Layout>
        );
    }    
export default HelpCenter;