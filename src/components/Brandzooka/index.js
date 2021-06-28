import React from "react";
import Layout from '../MyLayout'
import Slider from "react-slick";
import { Link } from "react-router-dom";

function Brandzooka(Props) {
    const settingsPartners = {
        dots: false,
        infinite: true,
        arrows:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const settingsBeTransparent = {
        dots: true,
        infinite: true,
        arrows:true,
        speed: 100,
        fade: true,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
          <div
            style={{
              backgroundColor: "#ddd",
              borderRadius: "10px",
              padding: "10px"
            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={{
              width: "30px",
              color: "blue",
              border: "1px blue solid"
            }}
          >
            {i + 1}/3
          </div>
        )
    };
    return (
        <Layout>
            <section className="page-banner home-page-banner brandzuka-banner">
                <div className="home-page-banner-shapes">
                    <div></div>
                    <div></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="page-banner-text">
                                <h1>
                                    Brandzooka is the Most <br /> Powerful Way to Advertise on <br /> TV & Online
                                </h1>
                                <p>
                                    With no subscriptions or minimums, Brandzooka makes placing your digital ads easy. We provide powerful ad placements through our easy-to-use self-service platform across digital and Connected TV at any budget size.
                                </p>
                                <div className="buttons pb-3">
                                    <Link to="/signup" className="btn btn-primary mr-2 my-2">CREATE AN ACCOUNT</Link>
                                    <a href="https://meetings.grooveapp.com/44yo7f7j" target="_blank" className="btn btn-secondary my-2">BOOK A DEMO</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="our-platform">
                <div className="platform-shape"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="platform-text">
                                <h5 className="mb-3">WHAT IS BRANDZOOKA</h5>
                                <h3 className="mb-3">
                                    Your All-In-One Self-Service Digital Media Platform
                                </h3>
                                <p className="mb-3">
                                    Brandzooka is designed from the ground up to bring the transformative power of digital and Connected TV advertising to the next level. Brandzooka is the only platform that puts the power of digital at your fingertips.
                                </p>
                                 <a href="https://meetings.grooveapp.com/44yo7f7j" target="_blank" className="btn btn-primary my-2">BOOK A DEMO</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                          <div className="position-relative">
                            <img src="/images/Home/builder_laptop.png" alt="image" />
                            <div className="play-circle"><i className="fa fa-play"></i></div>
                          </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="we-know products position-relative">
              <div className="container">
                <div className="row ">
                  <div className="col-lg-7">
                  <div className="row tilled-grid d-none d-md-flex">
                      <div className="col-3"></div>
                      <div className="col-3"></div>
                      <div className="col-3 pb-2">
                        <div className="inner-box">
                          <img src="/images/brandzooka/1.png" />
                        </div>
                      </div>
                      <div className="col-3"></div>
                      <div className="col-12">
                        <div className="row mx-0">
                          <div className="col-6">
                            <div className="row mx-0">
                              <div className="col-6 px-0"></div>
                              <div className="col-6 px-0">
                                <div className="inner-box">
                                  <img src="/images/brandzooka/2.png" />
                                </div>
                              </div>
                              <div className="col-6 px-0">
                                <div className="inner-box">
                                  <img src="/images/brandzooka/3.png" />
                                </div>
                              </div>
                              <div className="col-6 px-0">
                                <div className="inner-box">
                                  <img src="/images/brandzooka/4.png" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 slider-grid px-0">
                            <div className="inner-box be-transparent-slider">
                              <Slider {...settingsBeTransparent}>
                                <div>
                                  <h5>Connected TV</h5>
                                  <p>Launch your digital campaigns on premium networks and platforms.</p>
                                </div>
                                <div>
                                  <h5>Display</h5>
                                  <p>Target the right audiences with animated or static digital ads.</p>
                                </div>
                                <div>
                                  <h5>Mobile</h5>
                                  <p>Reach your audience anywhere and on any device.</p>
                                </div>
                              </Slider>
                          </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-3"></div>
                      <div className="col-3"></div>
                      <div className="col-3 pt-2">
                        <div className="inner-box">
                          <img src="/images/brandzooka/1.png" />
                        </div>
                      </div>
                      <div className="col-3"></div>
                    </div>
                    <div className="row tilled-grid d-flex d-md-none">
                      <div className="col-4"></div>
                      <div className="col-4">
                        <div className="inner-box">
                          <img src="/images/brandzooka/1.png" />
                        </div>
                      </div>
                      <div className="col-4"></div>
                      <div className="col-4">
                        <div className="inner-box">
                          <img src="/images/brandzooka/2.png" />
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="inner-box">
                          <img src="/images/brandzooka/3.png" />
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="inner-box">
                          <img src="/images/brandzooka/4.png" />
                        </div>
                      </div>
                      <div className="col-8 slider-grid">
                        <div className="inner-box be-transparent-slider">
                          <Slider {...settingsBeTransparent}>
                            <div>
                              <h5>Connected TV</h5>
                              <p>Launch your digital campaigns on premium networks and platforms.</p>
                            </div>
                            <div>
                              <h5>Display</h5>
                              <p>Target the right audiences with animated or static digital ads.</p>
                            </div>
                            <div>
                              <h5>Mobile</h5>
                              <p>Reach your audience anywhere and on any device.</p>
                            </div>
                          </Slider>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="inner-box">
                          <img src="/images/brandzooka/5.png" />
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <div className="col-lg-5">
                    <div className="we-know-content">
                      <h4>Reach Audiences Across Every Channel and Device</h4>
                      <p>Level up your digital campaigns with our self-service platform. Communicate with the right audiences through demographics, interests and spending habits. Globally, or locally you'll find them here. Advertise on Primetime TV streaming networks and platforms, target the right audiences and environments, and connect  with your audience anywhere, on any device.</p>
                      <Link to="/platform" className="btn btn-primary">OUR PLATFORM</Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="magic-connected-cards-outer bring-and-save-outer brandzooka-page pb-5 mt-0 pt-4">
                <div className="container">
                    <div className="magic-connected-card-inner m-0"></div>
                    <div className="magic-connected-card-inner">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="image-outer">
                                    <img src="/images/campaign-overview.png" alt="image" />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="magic-connected-card-text">
                                    <h3>Campaign Builder and Cross-Device Targeting</h3>
                                    <p>Set up and launch robust cross-device campaigns in minutes with Brandzooka’s intuitive step-by-step campaign builder.</p>
                                    <Link to="/signup" className="btn btn-primary">CREATE AN ACCOUNT</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="magic-connected-card-inner mb-5">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="image-outer">
                                    <img src="/images/campaign.png" alt="image" />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="magic-connected-card-text ml-md-auto">
                                    <h3>The Ultimate Measurement Suite</h3>
                                    <p>Within 24 hours of launching your campaigns the Brandzooka dashboard will populate with real-time, detailed performance data. Get your results when you need them.</p>
                                    <a href="https://meetings.grooveapp.com/44yo7f7j" target="_blank" className="btn btn-primary my-2">BOOK A DEMO</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>        
            <section className="recent-press target-guidelines brandzooka-page mb-0 py-0 mt-5">
              <div className="head-section mb-4">
                <h3 className="mb-0">Access More Features</h3>
              </div>
                <div className="row mx-0">
                    <div className="col-md-6 box-main guideline-box">
                        <div className="guidelines-box-text">
                            <h2 className="d-flex align-items-center">Brandzooka <img src="/images/plus.png" className="ml-2" width="50px" /></h2>
                            <p>
                                Designed for brands and agencies transforming their business through the power of digital media. Brandzooka+ is the full power of Brandzooka with the addition of collaboration tools and branding capabilities for brands and agencies. Teamwork makes the dream work.
                            </p>
                            <Link to="/brandzooka-plus" className="btn btn-primary">LEARN MORE</Link>
                        </div>
                    </div>
                    <div className="col-md-6 box-main best-practice-box">
                        <div className="guidelines-box-text">
                            <h2 className="d-flex align-items-center"><img src="/images/BZ_logo_small.png" className="mr-2" width="50px" />Mediator</h2>
                            <p>
                                Brandzooka Mediator is a revolutionary Media Planner that makes it possible for any digital marketer to produce presentation-ready, multi-channel programmatic media plans for brands or clients. It’s intern-easy, planner approved, and takes minutes to produce a fully branded client-ready media plan! 
                            </p>
                            <Link to="/mediator" className="btn btn-primary">LEARN MORE</Link>
                        </div>
                    </div>
                </div>
            </section>  
            <section className="powerful-way our-platform py-0">
                <div className="table-card pb-5 brandzooka">
                    <div className="container">
                        <div className="powerful-way-table">

                        </div>
                        <div className="platform-text">
                            <h5 className="mb-3">PRICING</h5>
                            <h3 className="mb-3 powerful-heading">
                                A Budget That Works For You
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
                <div className="container">
                    <section className="recent-press brandzooka-page">
                        <div className="head-section">
                            <h3>Our Platform Partners</h3>
                            <Link to="/our-partners" className="btn btn-primary">VIEW ALL</Link>
                        </div>
                        <div className="partners-slider d-none d-md-block">
                            <Slider {...settingsPartners}>
                              <div>
                                  <img src="/images/brandzooka/slider-img.png" />
                              </div>
                              <div>
                                  <img src="/images/brandzooka/slider-img.png" />
                              </div>
                            </Slider>
                        </div>
                        <div className="partners-slider d-md-none">
                            <Slider {...settingsPartners}>
                              <div>
                                  <img src="/images/product-slide-1.png" />
                              </div>
                              <div>
                                  <img src="/images/product-slide-2.png" />
                              </div>
                            </Slider>
                        </div>
                    </section>   
                </div>
            </section>
        </Layout>
    );
}

export default Brandzooka;