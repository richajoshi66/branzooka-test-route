import React from 'react';
import Layout from '../MyLayout';
import {Link} from "react-router-dom";
import Pagination from '@material-ui/lab/Pagination';
function RecentPress(props) {
    return (
        <Layout>
            <section className="page-banner triangle-banner-main recent-press">
                <div className="triangle-banner press-page">
                </div>
                <div className="triangle-banner-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className=" triangle-banner-content">
                                <h1>Press + Announcements</h1>
                                <p>Our latest press, news, and announcements regarding all things Brandzooka.</p>
                                <div className="buttons pb-3">
                                    <a href="https://brandzooka-image-store.s3.amazonaws.com/pdf/Brandzooka_Media_Kit_-_Online_and_TV_(compressed).pdf" target="_blank" className="btn btn-primary">DOWNLOAD MEDIA KIT</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="agencies-page-video">
                                <div className="position-relative">
                                    <img src="/images/laptop-img.png" />
                                    <div className="play-circle">
                                        <i className="fa fa-play"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="press-card-main mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-4">
                            <div className="press-card-inner">
                                <div className="img-block">
                                    <img src="images/yahoo-finance.png" />
                                </div>
                                <div className="content">
                                    <h5>Brandzooka Closes Series A and Appoints Co-Founder Kelly Dotseth as CEO</h5>
                                    <p>Brandzooka closed $5.6 million in Series A funding, bringing its total funding to date to $10.1 million</p>
                                </div>
                                <div className="release-date">
                                    <span>OCTOBER 27, 2020</span>
                                    <span className="arrow-icon">
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="press-card-inner">
                                <div className="img-block">
                                    <img src="images/dailycamera.png" />
                                </div>
                                <div className="content">
                                    <h5>Investors, startups convene at Summit Boulder 2019 </h5>
                                    <p>A group of investors representing more than $50 billion in investment capital were in Boulder this weekend to hear pitches from many companies, including Boulder</p>
                                </div>
                                <div className="release-date">
                                    <span>MARCH 1, 2019</span>
                                    <span className="arrow-icon">
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="press-card-inner">
                                <div className="img-block">
                                    <img src="images/bizwest_logo_square.png" />
                                </div>
                                <div className="content">
                                    <h5>Brandzooka to grow employee base fivefold</h5>
                                    <p>BOULDER - Brandzooka, a media advertising platform, has announched its 2019 growth plans - including significant employee growth - and a new board member</p>
                                </div>
                                <div className="release-date">
                                    <span>FEBRUARY 8, 2019</span>
                                    <span className="arrow-icon">
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="press-card-inner">
                                <div className="img-block">
                                    <img src="images/yahoo-finance.png" />
                                </div>
                                <div className="content">
                                    <h5>Brandzooka Closes Series A and Appoints Co-Founder Kelly Dotseth as CEO</h5>
                                    <p>Brandzooka closed $5.6 million in Series A funding, bringing its total funding to date to $10.1 million</p>
                                </div>
                                <div className="release-date">
                                    <span>OCTOBER 27, 2020</span>
                                    <span className="arrow-icon">
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="press-card-inner">
                                <div className="img-block">
                                    <img src="images/dailycamera.png" />
                                </div>
                                <div className="content">
                                    <h5>Investors, startups convene at Summit Boulder 2019 </h5>
                                    <p>A group of investors representing more than $50 billion in investment capital were in Boulder this weekend to hear pitches from many companies, including Boulder</p>
                                </div>
                                <div className="release-date">
                                    <span>MARCH 1, 2019</span>
                                    <span className="arrow-icon">
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="press-card-inner">
                                <div className="img-block">
                                    <img src="images/bizwest_logo_square.png" />
                                </div>
                                <div className="content">
                                    <h5>Brandzooka to grow employee base fivefold</h5>
                                    <p>BOULDER - Brandzooka, a media advertising platform, has announched its 2019 growth plans - including significant employee growth - and a new board member</p>
                                </div>
                                <div className="release-date">
                                    <span>FEBRUARY 8, 2019</span>
                                    <span className="arrow-icon">
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="press-card-inner">
                                <div className="img-block">
                                    <img src="images/yahoo-finance.png" />
                                </div>
                                <div className="content">
                                    <h5>Brandzooka Closes Series A and Appoints Co-Founder Kelly Dotseth as CEO</h5>
                                    <p>Brandzooka closed $5.6 million in Series A funding, bringing its total funding to date to $10.1 million</p>
                                </div>
                                <div className="release-date">
                                    <span>OCTOBER 27, 2020</span>
                                    <span className="arrow-icon">
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="press-card-inner">
                                <div className="img-block">
                                    <img src="images/dailycamera.png" />
                                </div>
                                <div className="content">
                                    <h5>Investors, startups convene at Summit Boulder 2019 </h5>
                                    <p>A group of investors representing more than $50 billion in investment capital were in Boulder this weekend to hear pitches from many companies, including Boulder</p>
                                </div>
                                <div className="release-date">
                                    <span>MARCH 1, 2019</span>
                                    <span className="arrow-icon">
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="press-card-inner">
                                <div className="img-block">
                                    <img src="images/bizwest_logo_square.png" />
                                </div>
                                <div className="content">
                                    <h5>Brandzooka to grow employee base fivefold</h5>
                                    <p>BOULDER - Brandzooka, a media advertising platform, has announched its 2019 growth plans - including significant employee growth - and a new board member</p>
                                </div>
                                <div className="release-date">
                                    <span>FEBRUARY 8, 2019</span>
                                    <span className="arrow-icon">
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="press-card-inner">
                                <div className="img-block">
                                    <img src="images/yahoo-finance.png" />
                                </div>
                                <div className="content">
                                    <h5>Brandzooka Closes Series A and Appoints Co-Founder Kelly Dotseth as CEO</h5>
                                    <p>Brandzooka closed $5.6 million in Series A funding, bringing its total funding to date to $10.1 million</p>
                                </div>
                                <div className="release-date">
                                    <span>OCTOBER 27, 2020</span>
                                    <span className="arrow-icon">
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="press-card-inner">
                                <div className="img-block">
                                    <img src="images/dailycamera.png" />
                                </div>
                                <div className="content">
                                    <h5>Investors, startups convene at Summit Boulder 2019 </h5>
                                    <p>A group of investors representing more than $50 billion in investment capital were in Boulder this weekend to hear pitches from many companies, including Boulder</p>
                                </div>
                                <div className="release-date">
                                    <span>MARCH 1, 2019</span>
                                    <span className="arrow-icon">
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="press-card-inner">
                                <div className="img-block">
                                    <img src="images/bizwest_logo_square.png" />
                                </div>
                                <div className="content">
                                    <h5>Brandzooka to grow employee base fivefold</h5>
                                    <p>BOULDER - Brandzooka, a media advertising platform, has announched its 2019 growth plans - including significant employee growth - and a new board member</p>
                                </div>
                                <div className="release-date">
                                    <span>FEBRUARY 8, 2019</span>
                                    <span className="arrow-icon">
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </span>
                                </div>
                            </div>
                        </div>                    
                    </div>
                    <div className="pagination-outer">
                        <Pagination count={5} />
                    </div>
                </div>
            </section>
        </Layout>
    );
}
export default RecentPress;
