import React from "react";
import Layout from '../MyLayout';
import {Link} from "react-router-dom";

function Mediator(Props) {
    return (
        <Layout> 
            <section className="page-banner home-page-banner mediator-page-banner">
              <div className="mediator-page-banner-shapes">
                <div>
                    <div className="text-center mt-5">
                        <img src="images/mediator-icon.png" />
                        <p>
                        Hi! I’ll be your guide through creating a media plan for you or your client! If you’re ever confused just look to the side of the screen and I’ll explain what’s going on!
                        </p>
                    </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-9">
                    <div className="page-banner-text">
                      <h1 className="d-flex align-item-center">
                        <img src="/images/BZ_logo_small.png" className="mr-3" />  Mediator
                      </h1>
                      <p>
                      Brandzooka Mediator is a revolutionary Media Planner that makes it possible for any digital marketer to produce presentation-ready, multi-channel media plans for their brands or clients. It's intern-easy, planner-approved, and takes minutes to produce a fully branded client-ready media plan!
                      </p>
                      <button className="btn btn-primary mt-4">CREATE YOUR PLAN</button>
                    </div>
                  </div>
                  <div className="col-md-3 text-right">
                  </div>
                </div>
              </div>
            </section>
            <section className="our-platform">
              <div className="platform-shape"></div>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="platform-text w-75">
                      <h5 className="mb-3">MEDIATOR FEATURES</h5>
                      <h3 className="mb-3">
                      The ultimate media planner suite
                      </h3>
                      <p className="mb-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in .
                      </p>
                      <Link to="/login" className="btn btn-primary">VIEW EXISTING PLANS</Link>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="position-relative">
                    <img src="/images/Home/builder_laptop.png" alt="image"/>
                      <div className="play-circle">
                          <i className="fa fa-play"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </Layout>
    );    
}

export default Mediator;
