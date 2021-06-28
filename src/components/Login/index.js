import React, {useState, useRef} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {isEmail} from "validator";
import {Link} from "react-router-dom";
import Layout from "../MyLayout";
import AuthService from "../../services/auth.service";

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
function Login(props) {
    const form = useRef();
    const checkBtn = useRef();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    const handleLogin = (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
           // setLoading(false);
            /*AuthService.login(username, password).then(
                () => {
                    props.history.push("/");
                    window.location.reload();
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    setLoading(false);
                    setMessage(resMessage);
                }
            );*/
        } else {
            setLoading(false);
        }
    };
    return (
        <Layout>
            <section className="page-banner home-page-banner register-page">
                <div className="home-page-banner-shapes register-page-banner-shapes">
                    <div/>
                    <div className="white"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="page-banner-text pl-0">
                                <h1>Log Into Your Account</h1>
                            </div>
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="page-banner-text pl-0">
                                        <Form onSubmit={handleLogin} ref={form}>
                                            <div className="forms">
                                                <div className="form-field">
                                                    <label className="form-label" htmlFor="first_name">Email Address</label>
                                                    <Input
                                                        type="text"
                                                        className="form-input"
                                                        placeholder="Enter Email Address"
                                                        name="email"
                                                        value={username}
                                                        onChange={onChangeUsername}
                                                        validations={[required, email]}
                                                    />
                                                </div>
                                                <div className="form-field">
                                                    <label className="form-label" htmlFor="reg_pass">Password</label>
                                                    <Input
                                                        type="password"
                                                        className="form-input"
                                                        name="password"
                                                        value={password}
                                                        onChange={onChangePassword}
                                                        validations={[required]}
                                                    />
                                                </div>
                                                <div className="create-acct-btn">
                                                    <p>
                                                        <Link to="/reset-password">Forgot your password?</Link>
                                                    </p>
                                                    <button className="btn btn-primary" disabled={loading}>{loading && (
                                                        <span className="spinner-border spinner-border-sm"/>
                                                    )}<span>LOGIN</span>
                                                    </button>
                                                </div>
                                                <div className="form-actions-alredy-customer">
                                                    <p className="alredy-customer-link">Don't have an account yet? <Link to="/signup">Sign Up</Link></p>
                                                </div>
                                            </div>
                                            {message && (
                                                <div className="form-group">
                                                    <div className="alert alert-danger" role="alert">
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
                                        <button className="btn btn-primary mb-4"><i className="fab fa-google"></i> LOGIN WITH GOOGLE</button>
                                        <button className="btn btn-primary"><i className="fab fa-facebook-f"></i> LOGIN WITH FACEBOOK</button>
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
export default Login;
