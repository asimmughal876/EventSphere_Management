import React from 'react'

function Contact() {
    return (
        <div>

            {/* <!-- Contact Top Content Section Begin --> */}
            <section class="contact-content-section">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6">
                            <div
                                className="cc-text"
                                style={{ backgroundImage: 'url(/img/contact-content-bg.jpg)' }}
                            >
                                <div class="row">
                                    <div class="col-lg-8 offset-lg-4">
                                        <div class="section-title">
                                            <h2>Location</h2>
                                            <p>Get directions to our event center</p>
                                        </div>
                                        <div class="cs-text">
                                            <div class="ct-address">
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
                                            <div class="ct-links">
                                                <span>Website:</span>
                                                <p>https://conference.colorlib.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="cc-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52901.38789495531!2d-118.19465514866786!3d34.03523211493029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cf71ad83ff9f%3A0x518b28657f4543b7!2sEast%20Los%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1579763856144!5m2!1sen!2sbd"
                                    height="580"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                                <div class="map-hover">
                                    <i class="fa fa-map-marker"></i>
                                    <div class="map-hover-inner">
                                        <h5>01 Pascale SP Apt. 339</h5>
                                        <p>NewYork City, US</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Contact Top Content Section End --> */}

            {/* <!-- Contact Form Section Begin --> */}
            <section class="contact-from-section spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <h2>Contact Us By Email!</h2>
                                <p>Fill out the form below to recieve a free and confidential intial consultation.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <form action="#" class="comment-form contact-form">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <input type="text" placeholder="Name" />
                                    </div>
                                    <div class="col-lg-4">
                                        <input type="text" placeholder="Email" />
                                    </div>
                                    <div class="col-lg-4">
                                        <input type="text" placeholder="Phone" />
                                    </div>
                                    <div class="col-lg-12 text-center">
                                        <textarea placeholder="Messages"></textarea>
                                        <button type="submit" class="site-btn">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Contact Form Section End --> */}

        </div>
    )
}

  export default Contact