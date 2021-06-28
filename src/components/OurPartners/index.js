import React from 'react';
import Layout from '../MyLayout';
import { Link } from "react-router-dom";
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
function OurPartners(props) {
    const PartnersList ={fourArray: [
        {url: '/images/partners-image/spotify.png'},
        {url: '/images/partners-image/roku.png'},
        {url: '/images/partners-image/spotify.png'},
        {url: '/images/partners-image/spotify.png'},
        {url: '/images/partners-image/spotify.png'},
        {url: '/images/partners-image/spotify.png'},
        {url: '/images/partners-image/spotify.png'},
    ], threeArray: [
        {url: '/images/partners-image/spotify.png'},
        {url: '/images/partners-image/roku.png'},
        {url: '/images/partners-image/spotify.png'},
        {url: '/images/partners-image/spotify.png'},
        {url: '/images/partners-image/spotify.png'},
        {url: '/images/partners-image/spotify.png'},
        {url: '/images/partners-image/spotify.png'},
    ]};
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [isFilter, setIsFilter] = React.useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleFilterChange = (event) => {
        if(event.target.value === '') {
            setIsFilter(false);
            return false;
        }
        setIsFilter(true);
    };
    return (
        <Layout>
            <section className="page-banner home-page-banner brandzooka-page-banner partners-page">
                <div className="brandzooka-page-banner-shapes">
                    <div></div>
                    <div></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="page-banner-text">
                                <h1 className="brandzooka-heading">
                                    Expand Your Reach with 80+ Partners
                                </h1>
                                <p>
                                    We’ve partnered with the best to bring the latest innovations to your campaigns. With Brandzooka, you have access a broad marketplace of premier providers in the digital advertising realm.
                                </p>
                                <div className="buttons pb-3">
                                    <Link to="/signup" className="btn btn-primary mr-2 my-2">CREATE AN ACCOUNT</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="recent-press partners-outer">
                <div className="head-section">
                    <h3>Our Partners</h3>
                    <div className="tabs-main d-none d-lg-block">
                        <AppBar position="static">
                            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                                <Tab label="ALL" {...a11yProps(0)} />
                                <Tab label="PREMIER " {...a11yProps(1)} />
                                <Tab label="TELEVISION" {...a11yProps(2)} />
                                <Tab label="MARKETING" {...a11yProps(3)} />
                                <Tab label="DATA" {...a11yProps(4)} />
                                <Tab label="INVENTORY" {...a11yProps(5)} />
                                <Tab label="ADVERTISING" {...a11yProps(6)} />
                            </Tabs>
                        </AppBar>
                    </div>
                </div>
                <div className="container">
                    <div className="partners-list">
                        <div className="d-none d-lg-block">
                            <TabPanel value={value} index={0}>
                                <div className="row mb-5">
                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="image">
                                            <img src="/images/partners-image/roku.png" />
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="image">
                                            <img src="/images/partners-image/hulu.png" />
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="image">
                                            <img src="/images/partners-image/sling.png" />
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="image">
                                            <img src="/images/partners-image/dish.png" />
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="image">
                                            <img src="/images/partners-image/mtv.png" />
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="image">
                                            <img src="/images/partners-image/hgtv.png" />
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="image">
                                            <img src="/images/partners-image/nbc.png" />
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="image">
                                            <img src="/images/partners-image/cbso.png" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row pt-5">
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/roku.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/hulu.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/sling.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/dish.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/directv.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/fox.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/mtv.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/hgtv.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/nbc.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/cbso.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/espn.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/spotify.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/roku.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/hulu.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/sling.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/dish.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/directv.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/fox.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/mtv.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/hgtv.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/nbc.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/cbso.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/espn.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/spotify.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/roku.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/hulu.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/sling.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/dish.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/directv.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/fox.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/mtv.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/hgtv.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/nbc.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/cbso.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/espn.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/spotify.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/roku.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/hulu.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/sling.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/dish.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/directv.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/fox.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/mtv.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/hgtv.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/nbc.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/cbso.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/espn.png" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-3 col-lg-2">
                                        <div className="image">
                                            <img src="/images/partners-image/spotify.png" />
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <div className="row mb-5">
                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="image">
                                            <img src="/images/partners-image/roku.png" />
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="image">
                                            <img src="/images/partners-image/hulu.png" />
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="image">
                                            <img src="/images/partners-image/sling.png" />
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="image">
                                            <img src="/images/partners-image/dish.png" />
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="image">
                                            <img src="/images/partners-image/mtv.png" />
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="image">
                                            <img src="/images/partners-image/hgtv.png" />
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="image">
                                            <img src="/images/partners-image/nbc.png" />
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="image">
                                            <img src="/images/partners-image/cbso.png" />
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>    
                        </div>
                        <div className="d-lg-none tab-filter text-right">
                            <div className="form-group">
                                <select onChange={handleFilterChange}>
                                    <option value="" selected >FILTER BY</option>
                                    <option value="">ALL</option>
                                    <option value="PREMIER">PREMIER</option>
                                    <option value="TELEVISION">TELEVISION</option>
                                    <option value="MARKETING">MARKETING</option>
                                    <option value="DATA">DATA</option>
                                    <option value="INVENTORY">INVENTORY</option>
                                    <option value="ADVERTISING">ADVERTISING</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="d-lg-none">
                            {isFilter ? <>
                                <div className="row mb-5">
                            {PartnersList.threeArray && PartnersList.threeArray.length && PartnersList.threeArray.map((item, key) => {
                                        return  <div key={key} className="col-6 col-md-4 col-lg-3">
                                        <div className="image">
                                            <img src={item.url} />
                                        </div>
                                    </div>
                                    })}
                            </div>
                            <div className="row pt-5">
                                {PartnersList.fourArray && PartnersList.fourArray.length && PartnersList.fourArray.map((item, key) => {
                                        return  <div key={key} className="col-6 col-md-4 col-lg-3">
                                        <div className="image">
                                            <img src={item.url} />
                                        </div>
                                    </div>
                                    })}
                            </div>
                            </>: <>
                            <div className="row mb-5">
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="image">
                                        <img src="/images/partners-image/roku.png" />
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="image">
                                        <img src="/images/partners-image/hulu.png" />
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="image">
                                        <img src="/images/partners-image/sling.png" />
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="image">
                                        <img src="/images/partners-image/dish.png" />
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="image">
                                        <img src="/images/partners-image/mtv.png" />
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="image">
                                        <img src="/images/partners-image/hgtv.png" />
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="image">
                                        <img src="/images/partners-image/nbc.png" />
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="image">
                                        <img src="/images/partners-image/cbso.png" />
                                    </div>
                                </div>
                            </div>
                            <div className="row pt-5">
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/roku.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/hulu.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/sling.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/dish.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/directv.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/fox.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/mtv.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/hgtv.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/nbc.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/cbso.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/espn.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/spotify.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/roku.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/hulu.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/sling.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/dish.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/directv.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/fox.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/mtv.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/hgtv.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/nbc.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/cbso.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/espn.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/spotify.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/roku.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/hulu.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/sling.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/dish.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/directv.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/fox.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/mtv.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/hgtv.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/nbc.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/cbso.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/espn.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/spotify.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/roku.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/hulu.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/sling.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/dish.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/directv.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/fox.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/mtv.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/hgtv.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/nbc.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/cbso.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/espn.png" />
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 col-lg-2">
                                    <div className="image">
                                        <img src="/images/partners-image/spotify.png" />
                                    </div>
                                </div>
                            </div>
                            </>}
                            
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
            <section className="our-platform for-agencies">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="platform-text">
                                <h5 className="mb-3">INVENTORY</h5>
                                <h3 className="mb-3">
                                    Access Premium Inventory
                                </h3>
                                <p className="mb-3">
                                With Brandzooka, users have the ability to engage in omnichannel marketing tactics across the world’s most premium sites and streaming channels. With access to digital media in over 150 different countries, the ability to to geo-target, geo-fence, hyper-target, and intelligently segment audiences, Brandzooka makes advertising easy and transparent.  With our simple, self-serve platform, any company can tap into sophisticated networks and channels without the middleman, tedious media timelines, or the enormous cost of traditional digital ad campaigns. Our users control their own media spend, placement, and targeting with ease and speed, resulting in performance that meets and  exceeds industry standards.
                                </p>
                                <Link to="/signup" className="btn btn-primary">CREATE AN ACCOUNT</Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="image-outer media-partner">
                                <div className="inner-image">
                                    <img src="/images/partners-image/tv.png" alt="image" />
                                </div>
                                <img src="/images/partners-image/home.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-platform no-line">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="position-relative">
                                <img src="/images/builder-laptop.png" alt="image" />
                                <div className="play-circle">
                                    <i className="fa fa-play"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="platform-text mt-5 mt-md-0">
                                <h3 className="mb-3">
                                    Targeting and Ad Safety
                                </h3>
                                <p className="mb-3">
                                With Brandzooka, you are able to target users intelligently and safely with first-party data, cookies, as well as implement block lists to target exactly who you want when you want to. Brandzooka offers full transparency to each and every one of our users along with 3rd party verification via MOAT, Nielsen and other industry leaders. Our dashboard provides real-time data across your media analytics stack, and shows how your results compare to industry standards.  Our commitment is to provide our users access to every piece of data created.
                                </p>
                                <a href="https://s3.amazonaws.com/brandzooka-image-store/pdf/targeting_options_guide-2.4.pdf" className="btn btn-primary" target="_blank">LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
export default OurPartners;