import React from "react";
import Layout from '../MyLayout';
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
function Faqs(Props) {
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };
    return (
        <Layout>
            <section className="page-banner home-page-banner faq-page-banner">
                <div className="banner-overlay"></div>
                <div className="faq-page-banner-shapes faqs">
                    <div></div>
                    <div></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="page-banner-text">
                                <h1>
                                    Frequently Asked Questions
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faqs-list-outer">
                <div className="container">
                    <div className="accordian-outer">
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className="accd-heading">How do I launch a display ad?</Typography>
                                <span className="faq-icon">
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </span>

                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="acc-content">
                                    <Typography className="acc-content">
                                        A few tips and tricks.
                                    </Typography>
                                    <div>
                                        <p className="mb-3">Brandzooka now supports banner ads! All you need to do is choose "Banner" under 'Creative Type' and upload three banners of different sizes.</p>
                                        <p>We accept banners in the following formats:</p>
                                        <ul className="pl-4">
                                            <li>160x600 pixels</li>
                                            <li>300x250 pixels</li>
                                            <li>300x600 pixels</li>
                                            <li>320x50 pixels</li>
                                            <li>400x400 pixels</li>
                                            <li>728x90 pixels</li>
                                            <li>970x250 pixels</li>
                                        </ul>
                                        <p>Once you've uploaded your creative, follow the steps in the builder just like you would for a video campaign. Just remember, banner ads can only run on the web and mobile devices/apps. </p>

                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className="accd-heading">Where is my draft?</Typography>
                                <span className="faq-icon">
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="acc-content">
                                    <Typography className="acc-content">
                                        Don't worry, it's close by. Head on over to your Library!
                                    </Typography>
                                    <p>All campaigns live in your Brandzooka Library, including campaign drafts. Just hover over the 'Analytics' tab and click on 'Your Library'.</p>
                                    <p className="text-center">
                                        <img src="/images/campaign_faq.png" alt="image"/>
                                    </p>
                                    <p>In Your Library be sure you have 'Campaigns' highlighted. Pro tip: to quickly identify your drafts, we recommend sorting by status.</p>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className="accd-heading">What is Brandzooka?</Typography>
                                <span className="faq-icon">
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="acc-content">
                                    <Typography className="acc-content">
                                    The most powerful way to advertise online and on TV.
                                    </Typography>
                                    <p>Brandzooka is the fastest growing self-service video advertising platform in the world, and the only one to offer programmatic advertising on TV. Our platform gives you the tools to reach your audience across every ad network at the click of a button for as little as $5 a day. </p>
                                    <p>You can take your own video or display ad, build a campaign in minutes, and launch it into the world on premium sites and channels including The NYTimes, CNN, ESPN, and more.</p>
                                    <p>It's easy to get started on the Brandzooka platform: you can create a free account, upload your video, and launch a powerful marketing campaign in under ten minutes. </p>
                                    <iframe src="https://player.vimeo.com/video/215099536" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className="accd-heading">How does Brandzooka work?</Typography>
                                <span className="faq-icon">
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="acc-content">
                                    <Typography className="acc-content">
                                        Brandzooka places your video in front of your target audience, wherever they are online.
                                    </Typography>
                                    <p>Brandzooka is a programmatic video advertising platform. </p>
                                    <p>That means you can use our platform to build and launch a video advertising campaign that will be seen by exactly <strong>who</strong> you want to see it, <strong>when</strong> you want them to see it, and <strong>on the channels and sites you want</strong> to be seen on. </p>
                                    <p>We partner with all of the major advertising networks including Google, Yahoo, and Brightroll to make sure your video reaches 98% of the programmatic ad spots online and on Connected TV, and we partner with 30+ data partners to make it possible for you to target exactly who you want to. </p>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className="accd-heading">What do I need to launch a campaign on Brandzooka?</Typography>
                                <span className="faq-icon">
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="acc-content">
                                    <Typography className="acc-content">
                                        All you need is a piece of creative, a target audience, and a budget!
                                    </Typography>
                                    <p className="mb-1"><strong>Creative: Video, display, or audio.</strong></p>
                                    <p>Upload your creative straight into the platform, use the ripper to pull your videos from YouTube or Vimeo, or pull an existing piece of creative from your Brandzooka Library.</p>
                                    <p className="mb-1"><strong>Audience: Who you want to target.</strong></p>
                                    <p>Pick the people who fit into your target audience based on age, gender, interests, attributes, location, etc.</p>
                                    <p className="mb-1"><strong>A budget.</strong></p>
                                    <p>There's no budget too big or small to launch on the Brandzooka platform. Use our forecasting tool in the builder to determine your budget based on your targeting and desired reach starting as little as $5/day.</p>
                                    <p className="mb-1"><strong>And (sometimes) a landing page. </strong></p>
                                    <p>For web/mobile campaigns only, you'll need to provide a landing page to direct clicks from your ads. </p>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className="accd-heading">How can I get in touch with someone from Brandzooka?</Typography>
                                <span className="faq-icon">
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="acc-content">
                                    <Typography className="acc-content">
                                        There are several good ways to get in touch.
                                    </Typography>
                                    <ul>
                                        <li>Chat with us by clicking the pink bubble in our site between 9:00am and 9:00pm MST Monday through Friday and between 10:00am and 5:00pm Saturday & Sunday.</li>
                                        <li>Call us at 1.720.669.7915 between 9:00am and 5:00pm MST Monday through Friday.</li>
                                        <li>Email us at <a href="mailto:support@brandzooka.com">support@brandzooka.com</a> anytime.</li>
                                    </ul>
                                    <p>
                                        We love hearing from our users! Please feel free to contact us with questions or issues regarding Brandzooka. Or with a really great joke.
                                    </p>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className="accd-heading">I can put my videos on TV?</Typography>
                                <span className="faq-icon">
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="acc-content">
                                    <Typography className="acc-content">
                                    That's right!
                                    </Typography>
                                    <p>
                                        Brandzooka now gives you access to place your video on TV, which means you can run on millions of connected devices in homes across the globe. Most connected TV inventory is not skippable which means that you can expect to be seen on premium channels like the ones below with very high retention rates (over 90% on average.)
                                    </p>
                                    <p>
                                        Use Brandzooka's powerful targeting tools to play your video in the right households on all the best connected TV devices.
                                    </p>
                                    <p className="my-4">
                                        <img src="/images/television-frames.gif" alt="image"/>
                                    </p>
                                    <p>
                                        So the next time your parents ask you what you've done with your life, tell them you're on TV. Our gift to you.
                                    </p>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className="accd-heading">How will this work with my marketing mix? Should I still run video ads on YouTube and Facebook?</Typography>
                                <span className="faq-icon">
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="acc-content">
                                    <Typography className="acc-content">
                                        Brandzooka helps you get seen outside of YouTube and Facebook. It's about time!
                                    </Typography>
                                    <p>
                                        Brandzooka placements do not overlap with the placements on social media or YouTube which makes our platform an excellent complement to your existing advertising channels.
                                    </p>
                                    <p>With Brandzooka you can build brand recognition by maintaining a consistent presence with your audience no matter where they are on the web. Our web and TV video ads provide an essential addition to any marketing strategy, allowing you to run ads on connected TV, top websites, apps, and mobile to extend your reach far beyond social media.</p>
                                    <p>If you have any questions about fitting Brandzooka into your overall marketing strategy don't hesitate to be in touch with your Platform Ambassador, or shoot an email over to <a href="mailto:support@brandzooka.com">support@brandzooka.com</a>.</p>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className="accd-heading">Does Brandzooka increase my YouTube or Vimeo view count?</Typography>
                                <span className="faq-icon">
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="acc-content">
                                    <Typography className="acc-content">
                                        A Brandzooka Ad is different, and that's good news.
                                    </Typography>
                                    <p>Brandzooka <strong>does not</strong> directly increase your YouTube or Vimeo view count. </p>
                                    <p>This is because our platform takes your video outside of YouTube or Vimeo and runs it as an ad on millions of TV channels and top websites. Views accrued by your Brandzooka ads will not be reflected in the view count on your YouTube or Vimeo channel.</p>
                                    <p>You can choose to direct any clicks on your Brandzooka ad back to your YouTube or Vimeo channel, which can lead to an increase in traffic to your channel.</p>
                                    <p>
                                        If you’re looking for more subscribers, choose the campaign goal “Clicks” and add <strong>?sub_confirmation=1</strong> to the end of your YouTube Channel URL when you enter it as the landing page. This will automatically take them to the subscription option on your YouTube Channel.
                                    </p>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className="accd-heading">What’s the ROI of using Brandzooka?</Typography>
                                <span className="faq-icon">
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="acc-content">
                                    <Typography className="acc-content">
                                        Driving engagement and boosting brand presence.
                                    </Typography>
                                    <p>Brandzooka is primarily a top-of-the-funnel marketing tool. That means our platform is especially awesome at creating brand awareness and reaching your target audience as they watch TV or browse the web. We also support cross-channel and down funnel marketing strategies including retargeting visitors of your website and tracking conversions.</p>
                                    <p>We offer a multitude of analytics and tools to help you gauge the impact of every Brandzooka campaign you run, including:</p>
                                    <ul>
                                        <li><strong>The Second-by-second Retention Graph: </strong>This will let you know the percentage of viewers who watched your video at each second, and can help inform future creative.</li>
                                        <li><strong>A/B Testing: </strong>Use this to compare analytics between campaigns and see how your videos and targeting stack up against one another.</li>
                                        <li><strong>Events List: </strong>See at a glance how many people were served your video, how many watched your video, and how many were inspired to click on it.</li>
                                    </ul>
                                    <p>
                                    For more information on how to assess your campaign performance, shoot us an email at <a href="mailto:support@brandzooka.com">support@brandzooka.com</a> or reach out to your Platform Ambassador.
                                    </p>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className="accd-heading">Is it really self-service?</Typography>
                                <span className="faq-icon">
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="acc-content">
                                    <Typography className="acc-content">
                                    It really is.
                                    </Typography>
                                    <p>Simple tools are the best tools and we built Brandzooka to be as simple as possible so that anyone can use it, and use it well. </p>
                                    <p>All you need to do is sign up for a free account and follow the steps in our campaign builder. Check out "What do I need to launch a campaign on Brandzooka?"  to learn about the three things you need to get started.</p>
                                    <p>Whether you’ve been executing complex media buys for 10 years or just started marketing yesterday, you can run your own video advertising campaigns on Brandzooka as easily as you could on Facebook or Instagram.</p>
                                    <p>We’re always looking for ways to improve Brandzooka, so if you have any feedback or thoughts, please email <a href="mailto:support@brandzooka.com">support@brandzooka.com</a>.</p>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className="accd-heading">Is this some sort of partnership?</Typography>
                                <span className="faq-icon">
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="acc-content">
                                    <Typography className="acc-content">
                                        Nope.
                                    </Typography>
                                    <p>This is a place for you to promote your content.</p>
                                    <p>You can <Link to="/signup">sign up for a free account</Link> any time on our self-service platform and start launching campaigns right away.</p>
                                    <p>No contracts. No subscriptions. No BS.</p>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className="accd-heading">How do I log in to the Brandzooka platform?</Typography>
                                <span className="faq-icon">
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="acc-content">
                                    <Typography className="acc-content">
                                        It's easy!
                                    </Typography>
                                    <p>
                                        To <Link to="/signup">register for a Brandzooka account</Link> you have three options: create an account using your email address, log in with Facebook, or log in with your Google account.
                                    </p>
                                    <p>
                                        If you've already registered for an account log in <Link to="/login">here</Link>. Password not working? You can reset your password here.
                                    </p>
                                    <p>Remember, you can always chat in with any issues or email us at <a href="mailto:support@brandzooka.com">support@brandzooka.com</a>.</p>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className="accd-heading">Can I refer others to Brandzooka?</Typography>
                                <span className="faq-icon">
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="acc-content">
                                    <Typography className="acc-content">
                                       Please do!
                                    </Typography>
                                    <p>Hey thanks! We love referrals.</p>
                                    <p>Feel free to direct them straight to the platform or put them in touch with your Brandzooka point of contact to get them started on their first campaign.</p>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className="accd-heading">How do I change my campaign?</Typography>
                                <span className="faq-icon">
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="acc-content">
                                    <Typography className="acc-content">
                                        Head over to Analytics.
                                    </Typography>
                                    <p>Good news! There are lots of options for editing your campaign after it has gone live. Just hover over Analytics, click 'Campaign Analytics', and select the campaign you would like to change. Once you are viewing the analytics page for that campaign, click the 'Campaign Overview' button. Under the Campaign Actions section, select 'Edit'.</p>
                                    <p>Click 'Edit' to: </p>
                                    <ul>
                                        <li>Swap out your creative</li>
                                        <li>Adjust the devices your ad plays on</li>
                                        <li>Adjust sites/channels</li>
                                        <li>Change your marketing objective</li>
                                        <li>Adjust location targeting</li>
                                        <li>Change when your ad plays (time of day and days of the week)</li>
                                        <li>Adjust your budget </li>
                                        <li>Extend your end date</li>
                                        <li>Change the name of your campaign</li>
                                        <li>Replace your landing page URL</li>
                                    </ul>
                                    <p>If you want to restart a campaign that has ended, simply add to the budget, adjust the date range, and your campaign will be up & running!</p>
                                    <p>
                                        You can also pause or resume any of your campaigns by heading over to the Campaign Overview page. Select the 'Pause/Resume' button which is under the Campaign Actions section next to the 'Edit' button. 
                                    </p>
                                    <p>
                                        If you urgently need to make a change not listed above, please use the chat feature or contact <a href="mailto:support@brandzooka.com">support@brandzooka.com</a> for further assistance.
                                    </p>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Faqs;