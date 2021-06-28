import React, {useEffect, useRef, useState} from 'react';
import Layout from "../MyLayout";
import {Link, useLocation} from "react-router-dom";
import CheckButton from "react-validation/build/button";
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";
import AuthService from "../../services/auth.service";
import "./reset_css.css";
import {isEmail} from "validator";



const required = (value) => {
    if (!value) {
        return (
            <div className="text-danger error-msg" role="alert">
                This field is required!
            </div>
        );
    }
};
const email = value => {
    if (!isEmail(value)) {
        return (
            <div className="text-danger error-msg" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

function Reset_Password(props) {
    const form = useRef();
    const handleLogin = (e) => {      
          e.preventDefault();
        form.current.validateAll();
    }

    return (
        <Layout>    
            <section className="page-banner home-page-banner register-page">
                {/* <div className="home-page-banner-shapes register-page-banner-shapes">
                <div/>
                <div className="white"/>
                </div> */}
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <section className="new-sec">
                                        <Form className="form-rtp" onSubmit={handleLogin} ref={form}>
                                            <div className="reset-head">
                                                <h1>Reset Password</h1>
                                                <div className="form-field">
                                                    <label className="form-label fm-l" htmlFor="reg_pass">Email</label>
                                                    <Input
                                                        type="email"
                                                        className="form-input new-fm"
                                                        name="email"
                                                        value=""
                                                        validations={[required, email]}

                                                    />
                                                </div>

                                                <div className="form-actions">
                                                    <button className="button btn-secondry res-btn" name="button">

                                                        <span>Submit</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </Form>

                            </section>
                        
                        </div>
                    </div>
                </div>        
            </section>    
        </Layout>
    )
}
export default Reset_Password;
