import React from 'react'
import { Link } from 'react-router-dom';

function Aboutus() {
    return (

        <div>

            {/* <!-- Breadcrumb Section Begin --> */}
            <section className="breadcrumb-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-text">
                                <h2>About Us</h2>
                                <div className="bt-option">
                                    <Link to="/">Home</Link>
                                    <span>About</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Breadcrumb Section End --> */}

            {/* <!-- About Section Begin --> */}
            <section className="about-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Something About Us</h2>
                                <p className="f-para">There are several ways people can make money online. From selling products to advertising. In this article I am going to explain the concept of contextual advertising.</p>
                                <p>First I will explain what contextual advertising is. Contextual advertising means the advertising of products on a website according to the content the page is displaying. For example if the content of a website was information on a Ford truck then the advertisements would be for Ford trucks for sale, or Ford servicing etc. It picks up the words on the page and displays ads that are similar to those words. Then when someone either performs an action or clicks on your page you will get paid.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-pic">
                                <img src="img/about-us.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-text">
                                <h3>The 2019 Conference</h3>
                                <p>When I first got into the online advertising business, I was looking for the magical combination that would put my website into the top search engine rankings, catapult me to the forefront of the minds or individuals looking to buy my product, and generally make me rich beyond my wildest dreams! After succeeding in the business for this long, I’m able to look back on my old self with this kind of thinking and shake my head. </p>
                                <ul>
                                    <li><span className="icon_check"></span> Write On Your Business Card</li>
                                    <li><span className="icon_check"></span> Advertising Outdoors</li>
                                    <li><span className="icon_check"></span> Effective Advertising Pointers</li>
                                    <li><span className="icon_check"></span> Kook 2 Directory Add Url Free</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- About Section End --> */}

            {/* <!-- Story Section Begin --> */}
            <section className="story-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Our Story</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="story-left">
                                <div className="story-item">
                                    <h2>2008</h2>
                                    <div className="si-text">
                                        <h4>Adwords Keyword Research For Beginners</h4>
                                        <p>However this is also the most expensive position. Give it a try if the second to fourth display position gives you more visitors and more customers for less money.</p>
                                    </div>
                                </div>
                                <div className="story-item">
                                    <h2>2011</h2>
                                    <div className="si-text">
                                        <h4>Adwords Keyword Research For Beginners</h4>
                                        <p>Virgin Mobile took a more effective approach in marketing their cell phone service by focusing not on the people that would be making the actual purchase.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="story-right">
                                <div className="story-item">
                                    <h2>2015</h2>
                                    <div className="si-text">
                                        <h4>15 Tips To Increase Your Adwords Profits</h4>
                                        <p>There is no better advertisement campaign that is low cost and also successful at the same time. Great business ideas when utilized effectively can save lots of money.</p>
                                    </div>
                                </div>
                                <div className="story-item">
                                    <h2>2019</h2>
                                    <div className="si-text">
                                        <h4>Advertising Internet Online Opportunities To Explore</h4>
                                        <p>Many people sign up for affiliate programs with the hopes of making some serious money. They advertise a few places and then wait for the money to start pouring in.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Story Section End --> */}


            {/* <!-- Testimonial Section Begin --> */}
            <section className="testimonial-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Testimonials</h2>
                                <p>Our customers are our biggest supporters. What do they think of us?</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="testimonial-slider owl-carousel">
                                    <div className="col-lg-6">
                                        <div className="testimonial-item">
                                            <div className="ti-author">
                                                <div className="quote-pic">
                                                <img src="img/quote/png" alt="" />
                                                </div>
                                                <div className="ta-pic">
                                                <img src="img/testimonial/testimonial-1.jpg" alt="Emma Sandoval" />
                                                </div>
                                                <div className="ta-text">
                                                    <h5>Emma Sandoval</h5>
                                                    <span>Speaker Manager</span>
                                                </div>
                                            </div>
                                            <p>“First impression is made by logo or its absence. To know the importance of a logo just answer one question: How many big, leading and famous companies don’t have logos?”</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="testimonial-item">
                                            <div className="ti-author">
                                                <div className="quote-pic">
                                                    <img src="img/quote.png" alt="" />
                                                </div>
                                                <div className="ta-pic">
                                                <img src="img/testimonial/testimonial-2.jpg" alt="John Smith" />
                                                </div>
                                                <div className="ta-text">
                                                    <h5>John Smith</h5>
                                                    <span>Speaker Manager</span>
                                                </div>
                                            </div>
                                            <p>“There is no denying the fact that the success of an advertisement lies mostly in the headline. The headline should attract the reader and make him read the rest of the advertisement.”</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="testimonial-item">
                                            <div className="ti-author">
                                                <div className="quote-pic">
                                                    <img src="img/quote.png" alt="" />
                                                </div>
                                                <div className="ta-pic">
                                                    <img src="img/testimonial/testimonial-1.jpg" alt="" />
                                                </div>
                                                <div className="ta-text">
                                                    <h5>John Smith</h5>
                                                    <span>Speaker Manager</span>
                                                </div>
                                            </div>
                                            <p>“There is no denying the fact that the success of an advertisement lies mostly in the headline. The headline should attract the reader and make him read the rest of the advertisement.”</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Testimonial Section End --> */}

            {/* <!-- Newslatter Section Begin --> */}
            <section className="newslatter-section about-newslatter">
                <div className="container">
                    <div
                        className="newslatter-inner"
                        style={{
                            backgroundImage: "url('/img/newslatter-bg.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="ni-text">
                            <h3>Subscribe Newsletter</h3>
                            <p>Subscribe to our newsletter and don’t miss anything</p>
                        </div>
                        <form action="#" className="ni-form">
                            <input type="text" placeholder="Your email" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>
            {/* <!-- Newslatter Section End --> */}

            {/* <!-- Contact Section Begin --> */}
            <section className="contact-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h2>Location</h2>
                                <p>Get directions to our event center</p>
                            </div>
                            <div className="cs-text">
                                <div className="ct-address">
                                    <span>Address:</span>
                                    <p>01 Pascale Springs Apt. 339, NY City <br />United State</p>
                                </div>
                                <ul>
                                    <li>
                                        <span>Phone:</span>
                                        (+12)-345-67-8910
                                    </li>
                                    <li>
                                        <span>Email:</span>
                                        info.colorlib@gmail.com
                                    </li>
                                </ul>
                                <div className="ct-links">
                                    <span>Website:</span>
                                    <p>https://conference.colorlib.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="cs-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52901.38789495531!2d-118.19465514866786!3d34.03523211493029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cf71ad83ff9f%3A0x518b28657f4543b7!2sEast%20Los%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1579763856144!5m2!1sen!2sbd"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Contact Section End --> */}

        </div>
    )
}

export default Aboutus