import React from 'react';
import Layout from '../MyLayout';
import { Link } from "react-router-dom";

function Certification(props) {
    return (
        <Layout>
            <section className="page-banner triangle-banner-main certification new-triangle-banner-main">
                <div className="triangle-banner"></div>
                <div className="triangle-banner-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className=" triangle-banner-content">
                                <h1>Certifications and Assurance</h1>
                                <p>Brandzooka was built on a simple premise, by some of the world’s best and most reknowned advertising and media executives who were frustrated with the state of digital advertising. We built Brandzooka to enable everyone to access and transact on programmatic advertising regardless of size and budget.</p>
                                <div className="buttons pb-3">
                                    <Link to="/signup" className="btn btn-primary mr-2 my-2">CREATE AN ACCOUNT</Link>
                                    <a href="https://meetings.grooveapp.com/44yo7f7j" target="_blank" className="btn btn-secondary my-2">BOOK A DEMO</a>
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
                                <h5 className="mb-3">OUR PLATFORM</h5>
                                <h3 className="mb-3">
                                    Altering the State of Digital Advertising
                                </h3>
                                <p className="mb-3">
                                    As a technology platform, it is our belief that transparency is your right. This means that unlike black box solutions, we use the best third party platforms to certify your campaign metrics, and give you access to the entirety of your campaign data via simple downloadable report. Because it’s time you get what you paid for.
                                </p>
                                <Link to="/platform" className="btn btn-primary">OUR PLATFORM</Link>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="job-tilled-view case-detail platform new-job-tilled-view">
                                <div className="row row d-none d-sm-flex">
                                    <div className="col-4"></div>
                                    <div className="col-4">
                                        <Link to="/for-agencies" className="inner-card pink">
                                            <div className="content">
                                                <h4>BRANDZOOKA IS FOR AGENCIES</h4>
                                                <span className="navigate-arrow"><i className="fas fa-long-arrow-alt-right"></i></span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-4">
                                        <div className="inner-card">
                                            <div className="content image">
                                                <img src="/images/platform/tilled-3.png" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="inner-card">
                                            <div className="content image">
                                                <img src="/images/platform/tilled-1.png" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="inner-card">
                                            <div className="content image">
                                                <img src="/images/platform/tilled-2.png" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <Link to="/for-brands" className="inner-card light-pink">
                                            <div className="content">
                                                <h4>BRANDZOOKA IS FOR BRANDS</h4>
                                                <span className="navigate-arrow"><i className="fas fa-long-arrow-alt-right"></i></span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-4">
                                        <Link to="/for-enterprise" className="inner-card light-pink">
                                            <div className="content">
                                                <h4>BRANDZOOKA IS FOR ENTERPRISE</h4>
                                                <span className="navigate-arrow"><i className="fas fa-long-arrow-alt-right"></i></span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-4">
                                        <Link to="/for-political" className="inner-card blue">
                                            <div className="content">
                                                <h4>BRANDZOOKA IS FOR POLITICAL/NON-PROFIT</h4>
                                                <span className="navigate-arrow"><i className="fas fa-long-arrow-alt-right"></i></span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-4">
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
            <section className="our-platform no-line">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="image-outer media-partner certifieds new-media-partner">
                                <div className="inner-image">
                                    <img src="/images/Home/hue-sat-6.png" alt="image" />
                                </div>
                                <img src="/images/brandzooka/woman_img.png" alt="image" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="platform-text h-100 d-flex flex-column justify-content-center">
                                <h3 className="mb-3">
                                    Certified
                                </h3>
                                <p className="mb-3">
                                    Brandzooka leverages the full power of industry leading certification platforms, like Moat and Nielsen, to measure ad effectiveness, content engagement, and attention metrics - including MRC Accredited Viewability. As the leading performance and SaaS based self-service programmatic platform on the market, we are obsessive about delivering results and visibility to our advertisers.
                                </p>
                                <Link to="/products" className="btn btn-primary">OUR PRODUCTS</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-platform no-line trans">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <div className="platform-text h-100 d-flex flex-column justify-content-center mt-5 mt-md-0">
                                <h3 className="mb-3">
                                    Transparent
                                </h3>
                                <p className="mb-3">
                                    When you run a campaign online, it is your expectation to gain credible and tangible ROI’s. Most platforms only provide top line performance numbers that are hard to attribute, and often meaningless. It is our commitment to our users that they own the data for the campaigns they paid for. That is why, along with our real-time analytics, we actually make a full data download available with the click of a button.
                                </p>
                                <a href="https://meetings.grooveapp.com/44yo7f7j" target="_blank" className="btn btn-primary">BOOK A DEMO</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="/images/video-ss.png" className="mt-4" alt="image" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="powerful-way our-platform no-line pb-0">
                <div className="powerful-way-triangle-outer certification">
                    <div>
                        <div className="left">
                            <div className="overlay">
                                <div className="text-content">
                                    <h3>We Empower Brands Big and Small</h3>
                                    <p>We work to get their digital ads seen and heard by their target audiences on top sites, apps, and digital TV channels.</p>
                                    <Link to="/for-agencies" className="btn btn-primary blue">LEARN MORE</Link>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="text-content">
                                <h3>Over 250 agencies are powered by Brandzooka</h3>
                                <button className="btn btn-primary">
                                    <Link to="/for-agencies">
                                        LEARN MORE
                                </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
export default Certification;
