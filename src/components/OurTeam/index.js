import React from 'react';
import Layout from '../MyLayout';
import { Link } from "react-router-dom";
import Slider from "react-slick";

function OurTeam(props) {
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
            <section className="page-banner home-page-banner team-page-banner">
                <div className="brandzooka-page-banner-shapes team-page">
                    <div></div>
                    <div></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="page-banner-text">
                                <h1 className="brandzooka-heading">
                                    It's Not a Village. <br />It's a Tribe.
                                </h1>
                                <p>
                                    At Brandzooka we believe in harnessing the creative spirit and focused energy of some of the most seasoned investors and communities that move the world forward. We know who we are and we know where we're going.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="recent-press platform-partners bg-grey my-0 py-5">
                <div className="head-section">
                    <h3>MEET THE TEAM</h3>
                </div>
                <div className="container">
                    <div className="team-cards-main">
                        <div className="row">
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="team-card-inner">
                                    <div className="img" style={{backgroundImage: 'url(/images/team-images/kelly.jpg)'}}>
                                    </div>
                                    <div className="detail">
                                        <h5>Kelly Dotseth</h5>
                                        <p>Founder & CEO</p>
                                        <div className="user-social-links">
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/fb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/twitter.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/in.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/cb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/v.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="team-card-inner">
                                    <div className="img" style={{backgroundImage: 'url(/images/team-images/kyra.jpg)'}}>
                                    </div>
                                    <div className="detail">
                                        <h5>Kyra Rehman</h5>
                                        <p>Senior Marketing Director</p>
                                        <div className="user-social-links">
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/fb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/twitter.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/in.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/cb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/v.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="team-card-inner">
                                    <div className="img" style={{backgroundImage: 'url(/images/team-images/alex_hamm.jpg)'}}>
                                    </div>
                                    <div className="detail">
                                        <h5>Alexandria Hamm, CPA</h5>
                                        <p>CPA - Operations & Finance Manager</p>
                                        <div className="user-social-links">
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/fb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/twitter.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/in.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/cb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/v.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="team-card-inner">
                                    <div className="img" style={{backgroundImage: 'url(/images/team-images/joshua-gallo.jpg)'}}>
                                    </div>
                                    <div className="detail">
                                        <h5>Joshua Gallo</h5>
                                        <p>Sales Manager</p>
                                        <div className="user-social-links">
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/fb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/twitter.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/in.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/cb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/v.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="team-card-inner">
                                    <div className="img" style={{backgroundImage: 'url(/images/team-images/josh_garner.jpg)'}}>
                                    </div>
                                    <div className="detail">
                                        <h5>Josh Garner</h5>
                                        <p>Lead Developer</p>
                                        <div className="user-social-links">
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/fb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/twitter.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/in.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/cb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/v.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="team-card-inner">
                                    <div className="img" style={{backgroundImage: 'url(/images/team-images/andrea.jpg)'}}>
                                    </div>
                                    <div className="detail">
                                        <h5>Andrea Dooley</h5>
                                        <p>Marketing Manager</p>
                                        <div className="user-social-links">
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/fb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/twitter.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/in.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/cb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/v.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="team-card-inner">
                                    <div className="img" style={{backgroundImage: 'url(/images/team-images/adam_h.jpg)'}}>
                                    </div>
                                    <div className="detail">
                                        <h5>Adam Hurd</h5>
                                        <p>Senior Account Executive</p>
                                        <div className="user-social-links">
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/fb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/twitter.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/in.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/cb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/v.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="team-card-inner">
                                    <div className="img" style={{backgroundImage: 'url(/images/team-images/hannah.jpg)'}}>
                                    </div>
                                    <div className="detail">
                                        <h5>Hannah Dies</h5>
                                        <p>Account Executive</p>
                                        <div className="user-social-links">
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/fb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/twitter.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/in.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/cb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/v.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="team-card-inner">
                                    <div className="img" style={{backgroundImage: 'url(/images/team-images/connor.jpg)'}}>
                                    </div>
                                    <div className="detail">
                                        <h5>Connor McGuinness</h5>
                                        <p>Software Developer</p>
                                        <div className="user-social-links">
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/fb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/twitter.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/in.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/cb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/v.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="team-card-inner">
                                    <div className="img" style={{backgroundImage: 'url(/images/team-images/brian_mccall.jpg)'}}>
                                    </div>
                                    <div className="detail">
                                        <h5>Brian McCall</h5>
                                        <p>Software Developer</p>
                                        <div className="user-social-links">
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/fb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/twitter.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/in.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/cb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/v.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="team-card-inner">
                                    <div className="img" style={{backgroundImage: 'url(/images/team-images/kyle_mcbride.jpg)'}}>
                                    </div>
                                    <div className="detail">
                                        <h5>Kyle McBride</h5>
                                        <p>Account Executive</p>
                                        <div className="user-social-links">
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/fb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/twitter.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/in.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/cb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/v.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="team-card-inner">
                                    <div className="img" style={{backgroundImage: 'url(/images/team-images/matt_wantz.jpg)'}}>
                                    </div>
                                    <div className="detail">
                                        <h5>Matt Wantz</h5>
                                        <p>Account Associate</p>
                                        <div className="user-social-links">
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/fb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/twitter.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/in.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/cb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/v.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="team-card-inner">
                                    <div className="img" style={{backgroundImage: 'url(/images/team-images/naataanii_todea.jpg)'}}>
                                    </div>
                                    <div className="detail">
                                        <h5>Naataanii Todea</h5>
                                        <p>Account Associate</p>
                                        <div className="user-social-links">
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/fb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/twitter.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/in.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/cb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/v.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="team-card-inner">
                                    <div className="img" style={{backgroundImage: 'url(/images/team-images/sean-fost.jpg)'}}>
                                    </div>
                                    <div className="detail">
                                        <h5>Sean Foster</h5>
                                        <p>Senior Account Executive</p>
                                        <div className="user-social-links">
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/fb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/twitter.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/in.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/cb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/v.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="team-card-inner">
                                    <div className="img" style={{backgroundImage: 'url(/images/team-images/dale.jpg)'}}>
                                    </div>
                                    <div className="detail">
                                        <h5>Dale Sitzmann</h5>
                                        <p>Director of Media & Product Strategy</p>
                                        <div className="user-social-links">
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/fb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/twitter.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/in.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/cb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/v.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="team-card-inner">
                                    <div className="img" style={{backgroundImage: 'url(/images/team-images/adriana.jpg)'}}>
                                    </div>
                                    <div className="detail">
                                        <h5>Adriana Richards</h5>
                                        <p>Account Associate</p>
                                        <div className="user-social-links">
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/fb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/twitter.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/in.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/cb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/v.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="team-card-inner">
                                    <div className="img" style={{backgroundImage: 'url(/images/team-images/dylan.jpg)'}}>
                                    </div>
                                    <div className="detail">
                                        <h5>Dylan Lynch</h5>
                                        <p>Account Associate</p>
                                        <div className="user-social-links">
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/fb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/twitter.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/in.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/cb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/v.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="corporate-gov">
                <div className="shape-1"></div>
                <div className="shape-2"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="corporate-gov-text">
                                <h3>Corporate Governance and Board of Directors</h3>
                                <p>Brandzooka is a venture-backed technology company disrupting the $500b digital and programmatic media ecosystems. We’ve built the first scalable platform connection millions of businesses and agencies around the world of prime media. We’ve brough together a group of the most seasoned and successful investors in media, advertising, and publishing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="recent-press platform-partners bg-grey my-0 py-5">
                <div className="head-section">
                    <h3>Board of Directors</h3>
                </div>
                <div className="container">
                    <div className="team-cards-main">
                        <div className="row">
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="team-card-inner">
                                    <div className="img" style={{backgroundImage: 'url(/images/team-images/adam_e.jpg)'}}>
                                    </div>
                                    <div className="detail">
                                        <h5>Adam Edelman</h5>
                                        <p>Director & Chairman</p>
                                        <div className="user-social-links">
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/fb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/twitter.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/in.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/cb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/v.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="team-card-inner">
                                    <div className="img" style={{backgroundImage: 'url(/images/team-images/alex.jpg)'}}>
                                    </div>
                                    <div className="detail">
                                        <h5>Alex Bogusky</h5>
                                        <p>Founder & Director</p>
                                        <div className="user-social-links">
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/fb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/twitter.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/in.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/cb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/v.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="team-card-inner">
                                    <div className="img" style={{backgroundImage: 'url(/images/team-images/kelly.jpg)'}}>
                                    </div>
                                    <div className="detail">
                                        <h5>Kelly Dotseth</h5>
                                        <p>Founder, Director & CEO</p>
                                        <div className="user-social-links">
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/fb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/twitter.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/in.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/cb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/v.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="team-card-inner">
                                    <div className="img" style={{backgroundImage: 'url(/images/team-images/michael_pic.jpg)'}}>
                                    </div>
                                    <div className="detail">
                                        <h5>Michael Beaudin </h5>
                                        <p>Director</p>
                                        <div className="user-social-links">
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/fb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/twitter.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/in.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/cb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/v.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="recent-press platform-partners bg-grey my-0 py-5 investors">
                <div className="head-section">
                    <h3>Some of Our Investors</h3>
                </div>
                <div className="container">
                    <div className="team-cards-main">
                        <div className="row">
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="team-card-inner">
                                    <div className="img" style={{backgroundImage: 'url(/images/team-images/chuck.jpg)'}}>
                                    </div>
                                    <div className="detail">
                                        <h5>Chuck Porter</h5>
                                        <p>Investor</p>
                                        <div className="user-social-links">
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/fb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/twitter.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/in.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/cb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/v.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="team-card-inner">
                                    <div className="img" style={{backgroundImage: 'url(/images/team-images/dagny.jpg)'}}>
                                    </div>
                                    <div className="detail">
                                        <h5>Dagny Scott</h5>
                                        <p>Investor</p>
                                        <div className="user-social-links">
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/fb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/twitter.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/in.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/cb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/v.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="team-card-inner">
                                    <div className="img" style={{backgroundImage: 'url(/images/team-images/rob.jpg)'}}>
                                    </div>
                                    <div className="detail">
                                        <h5>Rob Schuham</h5>
                                        <p>Investor</p>
                                        <div className="user-social-links">
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/fb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/twitter.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/in.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/cb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/v.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="team-card-inner">
                                    <div className="img" style={{backgroundImage: 'url(/images/team-images/freddie.jpg)'}}>
                                    </div>
                                    <div className="detail">
                                        <h5>Freddie Botur</h5>
                                        <p>Investor</p>
                                        <div className="user-social-links">
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/fb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/twitter.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/in.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/cb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/v.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="team-card-inner">
                                    <div className="img" style={{backgroundImage: 'url(/images/team-images/corey.jpg)'}}>
                                    </div>
                                    <div className="detail">
                                        <h5>Corey Finney</h5>
                                        <p>Investor</p>
                                        <div className="user-social-links">
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/fb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/twitter.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/in.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/cb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/v.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="team-card-inner">
                                    <div className="img" style={{backgroundImage: 'url(/images/team-images/nick.jpg)'}}>
                                    </div>
                                    <div className="detail">
                                        <h5>Nick Wyman</h5>
                                        <p>Investor</p>
                                        <div className="user-social-links">
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/fb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/twitter.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/in.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/cb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/v.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="team-card-inner">
                                    <div className="img" style={{backgroundImage: 'url(/images/team-images/matt.jpg)'}}>
                                    </div>
                                    <div className="detail">
                                        <h5>Matt Blomstedt</h5>
                                        <p>Investor</p>
                                        <div className="user-social-links">
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/fb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/twitter.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/in.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/cb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/v.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="team-card-inner">
                                    <div className="img" style={{backgroundImage: 'url(/images/team-images/leslie.jpg)'}}>
                                    </div>
                                    <div className="detail">
                                        <h5>Leslie Freeman</h5>
                                        <p>Investor</p>
                                        <div className="user-social-links">
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/fb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/twitter.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/in.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/cb.png" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <img src="/images/team-images/v.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="powerful-way position-relative pb-0 powerful-triangle-team">
                <div className="powerful-way-triangle-outer">
                    <div>
                        <div className="left">
                            <div className="overlay">
                                <div className="text-content">
                                    <h3>Join the Brandzooka Team</h3>
                                    <p>We're growing fast and building disruptive technologies that make a difference in the way brands and audiences interact through media. </p>
                                    <Link to="/jobs" className="btn btn-primary blue">SEE OPEN POSITIONS</Link>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="text-content">
                                <div className="reviews-slider mb-0">
                                    <div>
                                        <img src="/images/about-images/quote-pink.png" width="30px" className="mt-3" />
                                       <h4 className="text-white">Brandzooka has pushed me to grow and learn more than any other position I've ever held. The team is a super tight knit group that pushes each other constantly, and helps each other along"</h4>
                                        <p>- Glassdoor Review </p>
                                    </div>
                                </div>
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
                                    Brandzooka is powered by revolutionary technology that connects you with the best partners in media.
                                </p>
                                <Link to="/our-partners" className="btn btn-primary">VIEW ALL PARTNERS</Link>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="partners-slider">
                                <Slider {...settingsPartners}>
                                    <div>
                                        <img src="/images/team-slider.png" />
                                    </div>
                                    <div>
                                        <img src="/images/team-slider.png" />
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
export default OurTeam;