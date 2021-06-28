import React, {useState, useRef} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {isEmail} from "validator";
import AuthService from "../../services/auth.service";
import {Link} from "react-router-dom";
import Layout from "../MyLayout";

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
const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="text-danger error-msg" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};
const cPassword = (value, props, components) => {
    if (value !== components['password'][0].value) { // components['password'][0].value !== components['confirm'][0].value
        return <span className="error">Passwords are not equal.</span>
    }
};
function Register(props) {
    const form = useRef();
    const checkBtn = useRef();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const resetForm = () => {
        setEmail("")
        setPassword("")
        setCPassword("")
    }
    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    const onChangeCPassword = (e) => {
        const cpassword = e.target.value;
        setCPassword(cpassword);
    };
    const handleRegister = (e) => {
        e.preventDefault();
        setMessage("");
        setSuccessful(false);
        setLoading(true);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            /*AuthService.register(username, email, password, mobile).then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                    setLoading(false);
                    resetForm()
                    // props.history.push("/login");
                },
                (error) => {
                    if (error
                        && error.response
                        && error.response.data
                        && error.response.data.data[0]
                        && error.response.data.data[0].msg) {
                        setMessage(error.response.data.data[0].msg);
                        return false;
                    }
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    setMessage(resMessage);
                    setSuccessful(false);
                    setLoading(false);
                }
            );*/
        }
    };
    return (
        <Layout>
            <section className="page-banner home-page-banner register-page">
                <div className="home-page-banner-shapes register-page-banner-shapes">
                    <div></div>
                    <div className="white"></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="page-banner-text pl-0">
                                <h1>Register for an Account</h1>
                            </div>
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="page-banner-text pl-0">
                                        <Form onSubmit={handleRegister} ref={form}>
                                            <div className="forms">
                                                <div className="form-field">
                                                    <label className="form-label" htmlFor="first_name">Email Address</label>
                                                    <Input
                                                        type="text"
                                                        className="form-input"
                                                        name="first_name"
                                                        placeholder="Enter Email Address"
                                                        value={email}
                                                        onChange={onChangeEmail}
                                                        validations={[required, validEmail]}
                                                    />
                                                </div>
                                                <div className="form-field">
                                                    <label className="form-label" htmlFor="reg_pass">Password</label>
                                                    <Input
                                                        type="password"
                                                        className="form-input"
                                                        name="password"
                                                        value={password}
                                                        placeholder={'**********'}
                                                        onChange={onChangePassword}
                                                        validations={[required, vpassword]}
                                                    />
                                                </div>
                                                <div className="form-field">
                                                    <label className="form-label" htmlFor="reg_confirm_pass">Confirm Password</label>
                                                    <Input
                                                        type="password"
                                                        className="form-input"
                                                        name="cpassword"
                                                        value={cpassword}
                                                        placeholder={'**********'}
                                                        onChange={onChangeCPassword}
                                                        validations={[required, cPassword]}
                                                    />
                                                </div>
                                                <div className="create-acct-btn catbtn">
                                                    <p>By signing up, you agree to our <a href="https://d1cy2e0vbrm1md.cloudfront.net/pdf/2018-05-24-brandzooka-terms_and_conditions.pdf" target="_blank"> Terms & Conditions</a></p>
                                                    <button className="btn btn-primary" disabled={loading}>
                                                        {loading && (
                                                            <span className="spinner-border spinner-border-sm"/>
                                                        )} <span>CREATE AN ACCOUNT</span>
                                                    </button>
                                                </div>
                                                <div className="form-actions-alredy-customer">
                                                    <p className="alredy-customer-link">Already have an account? <Link to="/login">Login</Link></p>
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
                                </div>
                                <div className="col-md-3">
                                    <div className="signup-btns">
                                        <button className="btn btn-primary mb-4"><i className="fab fa-google"></i> SIGN UP WITH GOOGLE</button>
                                        <button className="btn btn-primary"><i className="fab fa-facebook-f"></i> SIGN UP WITH FACEBOOK</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 text-right">
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
export default Register;
