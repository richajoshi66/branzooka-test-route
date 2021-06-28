import React, {Component} from 'react'
import Header from "./Header";
import Footer from "./Footer";
import $ from "jquery";

const Layout = (props) => {
    setTimeout(
        function()
        {
          $(document).ready(function(){
        var slickParentHeight=$(".slick-slider.slick-vertical.slick-initialized ul.slick-dots").outerHeight();
        
        $('.video-slider .slick-slide').height(slickParentHeight);
        $('.video-slider .slick-slide>div').height(slickParentHeight);
        $('.video-slider .slick-slide>div>div').height(slickParentHeight);
        $('.video-slider .slick-slide>div>div> .videoPlay').height(slickParentHeight);
         });
        }, 1);
    const {header} = props
    return (
        <>
        <div className="wrapper">
            <Header header={header}/>
            {/*MAIN SECTION*/}
            {props.children}
        </div>
        {/*Footer Section*/}
        <Footer footer={header}/>
    </>
    )
}
export default Layout
