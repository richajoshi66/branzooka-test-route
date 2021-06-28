import React from 'react';
import Layout from '../MyLayout'
import Slider from "react-slick";
import { Link } from "react-router-dom";

function Landing(props) {
    return (
        <Layout header={true}>
            <section className="page-banner home-page-banner case-studies-banner jobs landing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-lg-6">
                            <div className="page-banner-text">
                                <h1>
                                    Australia - Meet<br />
                                    The New Standard in Digital Advertising
                                </h1>
                                <p>
                                    Brandzooka is a self-service programmatic platform that allows agencies of all sizes to place their ads on premium digital placements across the globe - at any budget. From Connected TV to Mobile, Web, and Streaming Audio we democratize digital media like it’s our job - because it is!
                                </p>
                                <div className="buttons pb-3">
                                    <Link to="/signup" className="btn btn-primary mr-2 my-2">CREATE AN ACCOUNT</Link>
                                    <a href="https://meetings.grooveapp.com/44yo7f7j" target="_blank" className="btn btn-secondary my-2">BOOK A DEMO</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-6 text-right">
                            <div className="lap-img">
                                <img src="images/landing/builder-laptop.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="magic-connected-cards-outer magic-connected-landing">
                <div className="container">
                    <div className="magic-connected-card-inner"> <div className="row">
                        <div className="col-md-6">
                            <div className="image-outer media-partner">
                                <div className="inner-image">
                                    <img src="/images/landing/biker.png" alt="image" />
                                </div>
                                <img src="/images/landing/office.png" alt="image" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="magic-connected-card-text">
                                <div className="platform-text mb-2 mt-3">
                                    <h5 className="mb-0">OUR PLATFORM</h5>
                                </div>
                                <h3>Harness the Magic of Primetime TV with Digital Advertising </h3>
                                <p>Brandzooka’s machine learning media trading algorithms routinely outperform their human counterparts 3:1. In every category - from auto to spirits, and from sports to consumer goods, Brandzooka advertisers get results. </p>
                                <Link to="/signup" className="btn btn-primary">CREATE AN ACCOUNT</Link>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section className="recent-press finding-ideal">
                <div className="container">
                    <div className="head-section mt-5">
                        <h3>Finding your ideal consumer on the channels they watch has never been easier.</h3>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="ideal-inner">
                                <div className="head">
                                    <div className="img">
                                        <img src="images/landing/shape1.png" />
                                    </div>
                                    <h5>Audience Targeting</h5>
                                </div>
                                <ul>
                                    <li>Demographic</li>
                                    <li>Psychographic</li>
                                    <li>Purchase + Intent</li>
                                    <li>Behavioral</li>
                                    <li>Household + Ethnic</li>
                                    <li>Retargeting Audiences</li>
                                    <li>1st Party Data Audiences </li>
                                    <li>Lookalike Audiences</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="ideal-inner">
                                <div className="head">
                                    <div className="img">
                                        <img src="images/landing/shape2.png" />
                                    </div>
                                    <h5>Device Type Targeting</h5>
                                </div>
                                <ul>
                                    <li>Web/Mobile/App Video</li>
                                    <li>Web/Mobile/App Display</li>
                                    <li>Connected TV</li>
                                    <li>Digital Audio</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="ideal-inner">
                                <div className="head">
                                    <div className="img">
                                        <img src="images/landing/shape3.png" />
                                    </div>
                                    <h5>Geo-Targeting</h5>
                                </div>
                                <ul>
                                    <li>200+ countries</li>
                                    <li>Regional targeting</li>
                                    <li>City-level targeting</li>
                                    <li>DMA targeting</li>
                                    <li>Postal & Zip</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="ideal-inner">
                                <div className="head">
                                    <div className="img">
                                        <img src="images/landing/shape4.png" />
                                    </div>
                                    <h5>Timeline</h5>
                                </div>
                                <ul>
                                    <li>Campaign duration control</li>
                                    <li>Daily/Hourly/Flight Times</li>
                                    <li>Frequency of activation</li>
                                    <li>Weather event targeting</li>
                                    <li>Auto recurrence enabled</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="recent-press channels">
                <div className="container">
                    <div className="head-section">
                        <h3 className="text-center">Our Channels</h3>
                    </div>
                    <div className="channels-image">
                        <img src="images/landing/channels.png" />
                    </div>
                </div>
            </section>
            <section className="triangles">
                <div className="powerful-way-triangle-outer">
                    <div>
                        <div className="left">
                            <div className="overlay">
                                <div className="text-content">
                                    <h3>Ready to Get Started?</h3>
                                    <p>Brandzooka works with your agency to offer unique features and solutions for your clients and your goals. With no contracts, minimums, or user restrictions we are here to help you level up your digital media game.</p>
                                    <Link to="/signup" className="btn btn-primary blue">SIGN UP FOR FREE</Link>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="text-content">
                                <h3>Brandzooka connects Australia to the future of media.</h3>
                                <a href="https://meetings.grooveapp.com/44yo7f7j" className="btn btn-primary" target="_blank">
                                    DOWNLOAD MEDIA KIT
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
export default Landing;
