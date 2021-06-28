import React from "react";
import Layout from '../MyLayout';
import {Link} from "react-router-dom";

function HelpCenterDetail(Props) {
    return (
        <Layout>
            <section className="page-banner home-page-banner faq-page-banner help-detail-page-banner">
                <div className="faq-page-banner-shapes">
                    <div></div>
                    <div></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="article-page-header-text">
                                <Link to="/help-center"><span><i className="fas fa-angle-left"></i> Back to Help Center</span></Link>
                                <h3>How do I launch a display ad?</h3>
                                <p className="sub-head">A few tips and tricks.</p>
                                <div className="media">
                                    <div className="media-left">
                                        <img src="/images/user.png" alt="user image" />
                                    </div>
                                    <div className="media-body pt-0 pt-sm-2">
                                        <p><span>Written by Andrea Dooley</span></p>
                                        <p><span>Updated over a week ago</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="article-detail-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="article-detail-text">
                                <p>Brandzooka now supports banner ads! All you need to do is choose "Banner" under 'Creative Type' and upload three banners of different sizes.</p>
                                <p>We accept banners in the following formats:</p>
                                <ul>
                                    <li>- 160x600 pixels</li>
                                    <li>- 300x250 pixels</li> 
                                    <li>- 300x600 pixels</li>
                                    <li>- 320x50 pixels</li>
                                    <li>- 400x400 pixels</li>
                                    <li>- 728x90 pixels</li>
                                    <li>- 970x250 pixels</li> 
                                </ul>
                                <p>
                                    Once you've uploaded your creative, follow the steps in the builder just like you would for a video campaign. Just remember, banner ads can only run on the web and mobile devices/apps. 
                                </p>
                                <p>
                                    If you need any help launching banner ads don't hesitate to chat in with questions!
                                </p>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <img src="/images/builder-laptop.png" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="did-i-answer">
                <div className="container">
                    <h3 className="text-center">Did I answer your question?</h3>
                    <div className="did-i-answer-cards">
                        <div>
                            <Link to="/help-center">NOT QUITE</Link>
                        </div>
                        <div>
                            <Link>YES!</Link>
                        </div>
                        <div>
                            <Link to="/contact">PLEASE WALK <br /> ME THROUGH IT</Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}    
export default HelpCenterDetail;