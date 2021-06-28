import React, {useState, useRef} from 'react';
import Layout from '../MyLayout';
import {Link} from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select";
import CheckButton from "react-validation/build/button";
import {isEmail} from "validator";
import Textarea from "react-validation/build/textarea";

const required = (value) => {
    if (!value) {
        return (
            <div className="text-danger error-msg" role="alert">
                This field is required!
            </div>
        );
    }
};
const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="text-danger error-msg" role="alert">
                This is not a valid email.
            </div>
        );
    }
};
const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="text-danger error-msg" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};
const vmobile = (value) => {
    if (value.length < 3 || value.length > 13) {
        return (
            <div className="text-danger error-msg" role="alert">
                The mobile must be between 3 and 13 characters.
            </div>
        );
    }
};
function ContactUs(props) {
    const form = useRef();
    const checkBtn = useRef();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [description, setDescription] = useState("");
    const [subject, setSubject] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const resetForm = () => {
        setUsername("")
        setEmail("")
        setMobile("")
        setDescription("")
    }
    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };
    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };
    const onChangeMobile = (e) => {
        const mobile = e.target.value;
        setMobile(mobile);
    };
    const onChangeSubject = (e) => {
        const subject = e.target.value;
        setSubject(subject);
    };
    const onChangeDescription = (e) => {
        const description = e.target.value;
        setDescription(description);
    };
    const handleContactUs = (e) => {
        e.preventDefault();
        setMessage("");
        setSuccessful(false);
        setLoading(true);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            // TODO Add API for contact US
        }
    };
    return (
        <Layout>
            <section className="page-banner triangle-banner-main">
                <div className="triangle-banner contact-page">
                </div>
                <div className="triangle-banner-overlay"/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className=" triangle-banner-content">
                                <h1>Contact Us</h1>
                                <div className="contact-banner-content">
                                    <div>
                                        <h5>CUSTOMER SUPPORT</h5>
                                        <a href="mailto:support@brandzooka.com">support@brandzooka.com</a>
                                        <a href="tel:(720) 669-7915"> (720) 669-7915</a>
                                    </div>
                                    <div>
                                        <h5>HEADQUARTERS</h5>
                                        <a href="https://www.google.com/maps/place/2000+Central+Ave,+Boulder,+CO+80301,+USA/@40.0210896,-105.2197518,17z/data=!3m1!4b1!4m5!3m4!1s0x876bf207ba50f493:0xc81107c7637dd470!8m2!3d40.0210896!4d-105.2175631"
                                           target="_blank">2000 Central Ave <br/>Boulder, CO 80302</a>
                                    </div>
                                </div>
                                <div className="buttons pb-3">
                                    <Link to="/signup" className="btn btn-primary mr-2 my-2">CREATE AN ACCOUNT</Link>
                                    <a href="https://meetings.grooveapp.com/44yo7f7j" target="_blank" className="btn btn-secondary my-2">BOOK A DEMO</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="google-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.4339595677075!2d-105.21975178461605!3d40.02108957941309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bf207ba50f493%3A0xc81107c7637dd470!2s2000%20Central%20Ave%2C%20Boulder%2C%20CO%2080301%2C%20USA!5e0!3m2!1sen!2sin!4v1619106682826!5m2!1sen!2sin"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-platform for-agencies">
                <div className="container">
                    <div className="platform-text">
                        <h5 className="mb-3">GET IN TOUCH</h5>
                        <h3 className="mb-3">
                            Send Us a Message
                        </h3>
                        <p className="mb-3">
                            Please fill out the form below and one of our team members will get back to you as soon as possible.
                        </p>
                    </div>
                    <Form onSubmit={handleContactUs} ref={form}>
                        <div className="form-outer">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>YOUR NAME<span>*</span></label>
                                        <Input
                                            type="text"
                                            name="username"
                                            placeholder="Name"
                                            value={username}
                                            onChange={onChangeUsername}
                                            validations={[required, vusername]}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>PHONE NUMBER<span>*</span></label>
                                        <Input
                                            type="text"
                                            name="mobile"
                                            value={mobile}
                                            onChange={onChangeMobile}
                                            validations={[required, vmobile]}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>EMAIL ADDRESS<span>*</span></label>
                                        <Input
                                            type="text"
                                            name="email"
                                            value={email}
                                            onChange={onChangeEmail}
                                            validations={[required, validEmail]}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>SUBJECT<span>*</span></label>
                                        <Select value={subject} onChange={onChangeSubject} validations={[required]}>
                                            <option value="" selected>Please Select</option>
                                            <option value="sales">Sales</option>
                                            <option value="book">Book A Demo</option>
                                            <option value="support">Support</option>
                                            <option value="jobs">Jobs</option>
                                            <option value="bugs">Bugs</option>
                                            <option value="other">Other</option>
                                        </Select>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label>MESSAGE</label>
                                        <Textarea
                                            value={description}
                                            rows="5"
                                            name="description"
                                            onChange={onChangeDescription}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-3" disabled={loading}> {loading && (
                                        <span className="spinner-border spinner-border-sm"/>
                                    )}
                                        <span>SUBMIT</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {message && (
                            <div className="form-group">
                                <div
                                    className={successful ? "alert alert-success" : "alert alert-danger"}
                                    role="alert"
                                >
                                    {message}
                                </div>
                            </div>
                        )}
                        <CheckButton style={{display: "none"}} ref={checkBtn}/>
                    </Form>
                </div>
            </section>
        </Layout>
    );
}
export default ContactUs;
