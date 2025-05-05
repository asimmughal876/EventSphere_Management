import React from 'react'

function Index() {
  return (
    <div>


      {/* Hero Section Begin */}
      <section
        className="hero-section"
        style={{
          backgroundImage: "url('/img/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="hero-text">
                <span>5 to 9 may 2019, mardavall hotel, New York</span>
                <h2>Change Your Mind<br /> To Become Sucess</h2>
                <a href="#" className="primary-btn">Buy Ticket</a>
              </div>
            </div>
            <div className="col-lg-5">
              <img src="img/hero-right.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* Counter Section Begin */}
      <section className="counter-section bg-gradient">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="counter-text">
                <span>Conference Date</span>
                <h3>Count Every Second <br />Until the Event</h3>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="cd-timer" id="countdown">
                <div className="cd-item">
                  <span>40</span>
                  <p>Days</p>
                </div>
                <div className="cd-item">
                  <span>18</span>
                  <p>Hours</p>
                </div>
                <div className="cd-item">
                  <span>46</span>
                  <p>Minutes</p>
                </div>
                <div className="cd-item">
                  <span>32</span>
                  <p>Seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Counter Section End */}

      {/* Home About Section Begin */}
      <section className="home-about-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="ha-pic">
                <img src="img/h-about.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ha-text">
                <h2>About Conference</h2>
                <p>When I first got into the online advertising business, I was looking for the magical
                  combination that would put my website into the top search engine rankings, catapult me to
                  the forefront of the minds or individuals looking to buy my product, and generally make me
                  rich beyond my wildest dreams! After succeeding in the business for this long, I’m able to
                  look back on my old self with this kind of thinking and shake my head.</p>
                <ul>
                  <li><span className="icon_check"></span> Write On Your Business Card</li>
                  <li><span className="icon_check"></span> Advertising Outdoors</li>
                  <li><span className="icon_check"></span> Effective Advertising Pointers</li>
                  <li><span className="icon_check"></span> Kook 2 Directory Add Url Free</li>
                </ul>
                <a href="#" className="ha-btn">Discover Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Home About Section End */}


      {/* Schedule Section Begin */}
      <section className="schedule-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Our Schedule</h2>
                <p>Do not miss anything topic about the event</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="schedule-tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">
                      <h5>Day 1</h5>
                      <p>May 04, 2019</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">
                      <h5>Day 2</h5>
                      <p>May 05, 2019</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">
                      <h5>Day 3</h5>
                      <p>May 06, 2019</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tabs-4" role="tab">
                      <h5>Day 4</h5>
                      <p>May 07, 2019</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tabs-5" role="tab">
                      <h5>Day 5</h5>
                      <p>May 08, 2019</p>
                    </a>
                  </li>
                </ul>

                {/* Tab panes */}
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <div className="st-content">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="sc-pic">
                              <img src="img/schedule/schedule-1.jpg" alt="" />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="sc-text">
                              <h4>Dealing with Difficult People</h4>
                              <ul>
                                <li><i className="fa fa-user"></i> John Smith</li>
                                <li><i className="fa fa-envelope"></i> john@Colorlib.com
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <ul className="sc-widget">
                              <li><i className="fa fa-clock-o"></i> 08:00 am - 10:00 AM</li>
                              <li><i className="fa fa-map-marker"></i> 59 Breanne Canyon Suite, USA
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="st-content">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="sc-pic">
                              <img src="img/schedule/schedule-2.jpg" alt="" />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="sc-text">
                              <h4>V7 Digital Photo Printing</h4>
                              <ul>
                                <li><i className="fa fa-user"></i> John Smith</li>
                                <li><i className="fa fa-envelope"></i> john@Colorlib.com
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <ul className="sc-widget">
                              <li><i className="fa fa-clock-o"></i> 08:00 am - 10:00 AM</li>
                              <li><i className="fa fa-map-marker"></i> 59 Breanne Canyon Suite, USA
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="st-content">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="sc-pic">
                              <img src="img/schedule/schedule-3.jpg" alt="" />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="sc-text">
                              <h4>Beyond The Naked Eye</h4>
                              <ul>
                                <li><i className="fa fa-user"></i> John Smith</li>
                                <li><i className="fa fa-envelope"></i> john@Colorlib.com
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <ul className="sc-widget">
                              <li><i className="fa fa-clock-o"></i> 08:00 am - 10:00 AM</li>
                              <li><i className="fa fa-map-marker"></i> 59 Breanne Canyon Suite, USA
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="st-content">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="sc-pic">
                              <img src="img/schedule/schedule-4.jpg" alt="" />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="sc-text">
                              <h4>Influencing The Influencer</h4>
                              <ul>
                                <li><i className="fa fa-user"></i> John Smith</li>
                                <li><i className="fa fa-envelope"></i> john@Colorlib.com
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <ul className="sc-widget">
                              <li><i className="fa fa-clock-o"></i> 08:00 am - 10:00 AM</li>
                              <li><i className="fa fa-map-marker"></i> 59 Breanne Canyon Suite, USA
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-2" role="tabpanel">
                    <div className="st-content">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="sc-pic">
                              <img src="img/schedule/schedule-1.jpg" alt="" />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="sc-text">
                              <h4>Dealing with Easy People</h4>
                              <ul>
                                <li><i className="fa fa-user"></i> John Smith</li>
                                <li><i className="fa fa-envelope"></i> john@Colorlib.com
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <ul className="sc-widget">
                              <li><i className="fa fa-clock-o"></i> 08:00 am - 10:00 AM</li>
                              <li><i className="fa fa-map-marker"></i> 59 Breanne Canyon Suite, USA
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="st-content">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="sc-pic">
                              <img src="img/schedule/schedule-2.jpg" alt="" />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="sc-text">
                              <h4>V7 Digital Photo Printing</h4>
                              <ul>
                                <li><i className="fa fa-user"></i> John Smith</li>
                                <li><i className="fa fa-envelope"></i> john@Colorlib.com
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <ul className="sc-widget">
                              <li><i className="fa fa-clock-o"></i> 08:00 am - 10:00 AM</li>
                              <li><i className="fa fa-map-marker"></i> 59 Breanne Canyon Suite, USA
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="st-content">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="sc-pic">
                              <img src="img/schedule/schedule-3.jpg" alt="" />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="sc-text">
                              <h4>Beyond The Naked Eye</h4>
                              <ul>
                                <li><i className="fa fa-user"></i> John Smith</li>
                                <li><i className="fa fa-envelope"></i> john@Colorlib.com
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <ul className="sc-widget">
                              <li><i className="fa fa-clock-o"></i> 08:00 am - 10:00 AM</li>
                              <li><i className="fa fa-map-marker"></i> 59 Breanne Canyon Suite, USA
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="st-content">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="sc-pic">
                              <img src="img/schedule/schedule-4.jpg" alt="" />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="sc-text">
                              <h4>Influencing The Influencer</h4>
                              <ul>
                                <li><i className="fa fa-user"></i> John Smith</li>
                                <li><i className="fa fa-envelope"></i> john@Colorlib.com
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <ul className="sc-widget">
                              <li><i className="fa fa-clock-o"></i> 08:00 am - 10:00 AM</li>
                              <li><i className="fa fa-map-marker"></i> 59 Breanne Canyon Suite, USA
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-3" role="tabpanel">
                    <div className="st-content">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="sc-pic">
                              <img src="img/schedule/schedule-1.jpg" alt="" />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="sc-text">
                              <h4>Dealing with Intermediate People</h4>
                              <ul>
                                <li><i className="fa fa-user"></i> John Smith</li>
                                <li><i className="fa fa-envelope"></i> john@Colorlib.com
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <ul className="sc-widget">
                              <li><i className="fa fa-clock-o"></i> 08:00 am - 10:00 AM</li>
                              <li><i className="fa fa-map-marker"></i> 59 Breanne Canyon Suite, USA
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="st-content">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="sc-pic">
                              <img src="img/schedule/schedule-2.jpg" alt="" />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="sc-text">
                              <h4>V7 Digital Photo Printing</h4>
                              <ul>
                                <li><i className="fa fa-user"></i> John Smith</li>
                                <li><i className="fa fa-envelope"></i> john@Colorlib.com
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <ul className="sc-widget">
                              <li><i className="fa fa-clock-o"></i> 08:00 am - 10:00 AM</li>
                              <li><i className="fa fa-map-marker"></i> 59 Breanne Canyon Suite, USA
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="st-content">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="sc-pic">
                              <img src="img/schedule/schedule-3.jpg" alt="" />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="sc-text">
                              <h4>Beyond The Naked Eye</h4>
                              <ul>
                                <li><i className="fa fa-user"></i> John Smith</li>
                                <li><i className="fa fa-envelope"></i> john@Colorlib.com
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <ul className="sc-widget">
                              <li><i className="fa fa-clock-o"></i> 08:00 am - 10:00 AM</li>
                              <li><i className="fa fa-map-marker"></i> 59 Breanne Canyon Suite, USA
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="st-content">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="sc-pic">
                              <img src="img/schedule/schedule-4.jpg" alt="" />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="sc-text">
                              <h4>Influencing The Influencer</h4>
                              <ul>
                                <li><i className="fa fa-user"></i> John Smith</li>
                                <li><i className="fa fa-envelope"></i> john@Colorlib.com
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <ul className="sc-widget">
                              <li><i className="fa fa-clock-o"></i> 08:00 am - 10:00 AM</li>
                              <li><i className="fa fa-map-marker"></i> 59 Breanne Canyon Suite, USA
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-4" role="tabpanel">
                    <div className="st-content">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="sc-pic">
                              <img src="img/schedule/schedule-1.jpg" alt="" />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="sc-text">
                              <h4>Dealing with Expert People</h4>
                              <ul>
                                <li><i className="fa fa-user"></i> John Smith</li>
                                <li><i className="fa fa-envelope"></i> john@Colorlib.com
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <ul className="sc-widget">
                              <li><i className="fa fa-clock-o"></i> 08:00 am - 10:00 AM</li>
                              <li><i className="fa fa-map-marker"></i> 59 Breanne Canyon Suite, USA
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="st-content">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="sc-pic">
                              <img src="img/schedule/schedule-2.jpg" alt="" />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="sc-text">
                              <h4>V7 Digital Photo Printing</h4>
                              <ul>
                                <li><i className="fa fa-user"></i> John Smith</li>
                                <li><i className="fa fa-envelope"></i> john@Colorlib.com
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <ul className="sc-widget">
                              <li><i className="fa fa-clock-o"></i> 08:00 am - 10:00 AM</li>
                              <li><i className="fa fa-map-marker"></i> 59 Breanne Canyon Suite, USA
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="st-content">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="sc-pic">
                              <img src="img/schedule/schedule-3.jpg" alt="" />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="sc-text">
                              <h4>Beyond The Naked Eye</h4>
                              <ul>
                                <li><i className="fa fa-user"></i> John Smith</li>
                                <li><i className="fa fa-envelope"></i> john@Colorlib.com
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <ul className="sc-widget">
                              <li><i className="fa fa-clock-o"></i> 08:00 am - 10:00 AM</li>
                              <li><i className="fa fa-map-marker"></i> 59 Breanne Canyon Suite, USA
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="st-content">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="sc-pic">
                              <img src="img/schedule/schedule-4.jpg" alt="" />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="sc-text">
                              <h4>Influencing The Influencer</h4>
                              <ul>
                                <li><i className="fa fa-user"></i> John Smith</li>
                                <li><i className="fa fa-envelope"></i> john@Colorlib.com
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <ul className="sc-widget">
                              <li><i className="fa fa-clock-o"></i> 08:00 am - 10:00 AM</li>
                              <li><i className="fa fa-map-marker"></i> 59 Breanne Canyon Suite, USA
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-5" role="tabpanel">
                    <div className="st-content">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="sc-pic">
                              <img src="img/schedule/schedule-1.jpg" alt="" />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="sc-text">
                              <h4>Dealing with Too Difficult People</h4>
                              <ul>
                                <li><i className="fa fa-user"></i> John Smith</li>
                                <li><i className="fa fa-envelope"></i> john@Colorlib.com
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <ul className="sc-widget">
                              <li><i className="fa fa-clock-o"></i> 08:00 am - 10:00 AM</li>
                              <li><i className="fa fa-map-marker"></i> 59 Breanne Canyon Suite, USA
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="st-content">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="sc-pic">
                              <img src="img/schedule/schedule-2.jpg" alt="" />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="sc-text">
                              <h4>V7 Digital Photo Printing</h4>
                              <ul>
                                <li><i className="fa fa-user"></i> John Smith</li>
                                <li><i className="fa fa-envelope"></i> john@Colorlib.com
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <ul className="sc-widget">
                              <li><i className="fa fa-clock-o"></i> 08:00 am - 10:00 AM</li>
                              <li><i className="fa fa-map-marker"></i> 59 Breanne Canyon Suite, USA
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="st-content">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="sc-pic">
                              <img src="img/schedule/schedule-3.jpg" alt="" />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="sc-text">
                              <h4>Beyond The Naked Eye</h4>
                              <ul>
                                <li><i className="fa fa-user"></i> John Smith</li>
                                <li><i className="fa fa-envelope"></i> john@Colorlib.com
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <ul className="sc-widget">
                              <li><i className="fa fa-clock-o"></i> 08:00 am - 10:00 AM</li>
                              <li><i className="fa fa-map-marker"></i> 59 Breanne Canyon Suite, USA
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="st-content">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="sc-pic">
                              <img src="img/schedule/schedule-4.jpg" alt="" />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="sc-text">
                              <h4>Influencing The Influencer</h4>
                              <ul>
                                <li><i className="fa fa-user"></i> John Smith</li>
                                <li><i className="fa fa-envelope"></i> john@Colorlib.com
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <ul className="sc-widget">
                              <li><i className="fa fa-clock-o"></i> 08:00 am - 10:00 AM</li>
                              <li><i className="fa fa-map-marker"></i> 59 Breanne Canyon Suite, USA
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Schedule Section End */}


      {/* Latest Blog Section Begin */}
      <section className="latest-blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Latest News</h2>
                <p>Do not miss anything topic about the event</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="latest-item large-item"
                style={{
                  backgroundImage: "url('/img/blog/latest-b/latest-1.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="li-tag">Marketing</div>
                <div className="li-text">
                  <h4><a href="./blog-details.html">Improve Your Business Cards And Enhance Your Sales</a></h4>
                  <span><i className="fa fa-clock-o"></i> 19th May, 2019</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="latest-item"
                style={{
                  backgroundImage: "url('/img/blog/latest-b/latest-2.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="li-tag">Experience</div>
                <div className="li-text">
                  <h5><a href="./blog-details.html">All users on MySpace will know that there are millions of people out there.</a></h5>
                  <span><i className="fa fa-clock-o"></i> 19th May, 2019</span>
                </div>
              </div>
              <div
                className="latest-item"
                style={{
                  backgroundImage: "url('/img/blog/latest-b/latest-3.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="li-tag">Marketing</div>
                <div className="li-text">
                  <h5><a href="./blog-details.html">A Pocket PC is a handheld computer, which features many of the same capabilities.</a></h5>
                  <span><i className="fa fa-clock-o"></i> 19th May, 2019</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Latest Blog Section End */}


      {/* Newslatter Section Begin */}
      <section className="newslatter-section">
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
      {/* Newslatter Section End */}

      {/* Contact Section Begin */}
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
      {/* Contact Section End */}
    </div>
  )
}

export default Index