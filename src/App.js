import React, {Component} from "react";
import Landing from "./components/Landing";
import Home from "./components/Home";
import About from "./components/About";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./components/Login";
import Mediator from "./components/Mediator";
import BrandzookaPlus from "./components/BrandzookaPlus";
import Brandzooka from "./components/Brandzooka";
import ForAgencies from "./components/ForAgencies";
import ForBrands from "./components/ForBrands";
import ForEnterprise from "./components/ForEnterprise";
import ForPolitical from "./components/ForPolitical";
import ContactUs from "./components/ContactUs";
import Faqs from "./components/Faqs";
import Jobs from "./components/Jobs";
import Pricing from "./components/Pricing";
import HelpCenter from "./components/HelpCenter";
import CaseStudies from "./components/CaseStudies";
import CaseDetail from "./components/CaseDetail";
import RecentPress from "./components/RecentPress";
import OurPartners from "./components/OurPartners";
import OurTeam from "./components/OurTeam";
import Platform from "./components/Platform";
import Certification from "./components/Certification";
import HelpCenterDetail from "./components/HelpCenterDetail";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./components/NotFound";
import ResetPassword from "./components/ResetPassword";
import ScrollToTop from "./components/ScrollToTop";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <ScrollToTop />
                <Switch>
                    <PublicRoute path="/landing" component={Landing} exact/>
                    <PublicRoute path="/" component={Home} exact/>
                    <PublicRoute path="/login" component={Login}/>
                    <PublicRoute path="/about" component={About}/>
                    <PublicRoute path="/mediator" component={Mediator}/>
                    <PublicRoute path="/brandzooka-plus" component={BrandzookaPlus}/>
                    <PublicRoute path="/products" component={Brandzooka}/>
                    <PublicRoute path="/for-agencies" component={ForAgencies}/>
                    <PublicRoute path="/for-brands" component={ForBrands}/>
                    <PublicRoute path="/for-enterprise" component={ForEnterprise}/>
                    <PublicRoute path="/contact" component={ContactUs}/>
                    <PublicRoute path="/platform" component={Platform}/>
                    <PublicRoute path="/faqs" component={Faqs}/>
                    <PublicRoute path="/jobs" component={Jobs}/>
                    <PublicRoute path="/pricing" component={Pricing}/>
                    <PublicRoute path="/help-center" component={HelpCenter}/>
                    <PublicRoute path="/article-detail" component={HelpCenterDetail}/>
                    <PublicRoute path="/case-studies" component={CaseStudies}/>
                    <PublicRoute path="/case-detail" component={CaseDetail}/>
                    <PublicRoute path="/certification" component={Certification}/>
                    <PublicRoute path="/recent-press" component={RecentPress}/>
                    <PublicRoute path="/our-partners" component={OurPartners}/>
                    <PublicRoute path="/our-team" component={OurTeam}/>
                    <PublicRoute path="/for-political" component={ForPolitical}/>
                    <PublicRoute path="/signup" component={Register}/>
                    <PublicRoute path="/forgot-password" component={ForgotPassword}/>
                    <PublicRoute path="/reset-password" component={ResetPassword}/>
                    <PublicRoute path="*" component={NotFound}/>
                </Switch>
            </BrowserRouter>

        );
    }
}
export default App;
