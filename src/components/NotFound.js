import React from 'react';
import Layout from './MyLayout'

const NotFound = () => {
    return (
         <Layout>
             <section className="page-banner home-page-banner faq-page-banner help-detail-page-banner">
                <div className="faq-page-banner-shapes">
                    <div></div>
                    <div></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="page-banner-text">
                                <h1>
                                   404
                                   <br />
                                   Page Not Found
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
export default NotFound;
