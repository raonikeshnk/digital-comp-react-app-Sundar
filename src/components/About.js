import React from 'react';

function About() {
    return ( 
        <>
  <div className="site-mobile-menu">
    <div className="site-mobile-menu-header">
      <div className="site-mobile-menu-close">
        <span className="icofont-close js-menu-toggle" />
      </div>
    </div>
    <div className="site-mobile-menu-body" />
  </div>
  <nav className="site-nav mb-5">
    <div className="pb-2 top-bar mb-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 col-lg-9">
            <a href="#" className="small mr-3">
              <span className="icon-question-circle-o mr-2" />{" "}
              <span className="d-none d-lg-inline-block">
                Have a questions?
              </span>
            </a>
            <a href="#" className="small mr-3">
              <span className="icon-phone mr-2" />{" "}
              <span className="d-none d-lg-inline-block">
                +91 96 499 11 993
              </span>
            </a>
            <a href="#" className="small mr-3">
              <span className="icon-envelope mr-2" />{" "}
              <span className="d-none d-lg-inline-block">
                info@digitalcomputer.in
              </span>
            </a>
          </div>
          {/* <div class="col-6 col-lg-3 text-right">
      <a href="login.html" class="small mr-3">
        <span class="icon-lock"></span>
        Log In
      </a>
      <a href="register.html" class="small">
        <span class="icon-person"></span>
        Register
      </a>
    </div> */}
        </div>
      </div>
    </div>
    <div className="sticky-nav js-sticky-header">
      <div className="container position-relative">
        <div className="site-navigation text-center">
          <a href="index.html" className="logo menu-absolute m-0">
            <img src="./images/dct-logo.png" width="50px" alt="" />
            Digital Computer<span className="text-primary">.</span>
          </a>
          <ul className="js-clone-nav d-none d-lg-inline-block site-menu">
            <li className="active">
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="courses.html">Our Courses</a>
            </li>
            <li>
              <a href="staff.html">Our Staff</a>
            </li>
            <li>
              <a href="gallery.html">Gallery</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
          <a
            href="tel:+919649911993"
            className="btn-book btn btn-secondary btn-sm d-none d-lg-inline-block menu-absolute"
          >
            Enroll Now
          </a>
          <a
            href="#"
            className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
            data-toggle="collapse"
            data-target="#main-navbar"
          >
            <span />
          </a>
        </div>
      </div>
    </div>
  </nav>
  <div
    className="untree_co-hero overlay"
    style={{ backgroundImage: 'url("images/explore-1.png")' }}
  >
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-12">
          <div className="row justify-content-center ">
            <div className="col-lg-6 text-center ">
              <h1
                className="mb-4 mt-5 heading text-white"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                About Us
              </h1>
              <div
                className="mb-5 mt-5 text-white desc mx-auto"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <p>
                  Get to know the heart and soul of Digital Computer Technology.
                  Discover our story, mission, and values that drive us. Learn
                  more about who we are and what sets us apart!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* /.row */}
    </div>{" "}
    {/* /.container */}
  </div>{" "}
  {/* /.untree_co-hero */}
  <div className="services-section">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-4 mb-5 mb-lg-0">
          <div
            className="section-title mb-3"
            data-aos="fade-up"
            data-aos-delay={0}
          >
            <h2 className="line-bottom mb-4">Our Mission</h2>
          </div>
          <p data-aos="fade-up" data-aos-delay={100}>
            At Digital Computer Technology, our mission is to empower
            individuals with cutting-edge computer education, fostering
            innovation and shaping future leaders in the digital era. We achieve
            this by providing:
          </p>
          <ul
            className="ul-check list-unstyled mb-5 primary"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <li>Empower individuals with cutting-edge computer education.</li>
            <li>
              Foster innovation and creativity in a dynamic learning
              environment.
            </li>
            <li>Shape future leaders in the digital era.</li>
          </ul>
          <p data-aos="fade-up" data-aos-delay={300}>
            <a href="#" className="btn btn-primary">
              Get Started
            </a>
          </p>
        </div>
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={0}>
          <figure className="img-wrap-2">
            <img src="images/mission.png" alt="Image" className="img-fluid" />
            <div className="dotted" />
          </figure>
        </div>
      </div>
    </div>
  </div>
  <div className="services-section">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={0}>
          <figure className="img-wrap-2">
            <img src="images/vision.png" alt="Image" className="img-fluid" />
            <div className="dotted" />
          </figure>
        </div>
        <div className="col-lg-4 mb-5 mb-lg-0">
          <div
            className="section-title mb-3"
            data-aos="fade-up"
            data-aos-delay={0}
          >
            <h2 className="line-bottom mb-4">Our Vision</h2>
          </div>
          <p data-aos="fade-up" data-aos-delay={100}>
            Our vision at Digital Computer Technology is to be a beacon of
            excellence in computer education, recognized for nurturing minds,
            fostering creativity, and empowering success. We envision:
          </p>
          <ul
            className="ul-check list-unstyled mb-5 primary"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <li>Be a beacon of excellence in computer education.</li>
            <li>Nurture minds, fostering creativity and empowering success.</li>
            <li>
              Contribute to a technologically advanced and digitally inclusive
              society.
            </li>
          </ul>
          <p data-aos="fade-up" data-aos-delay={300}>
            <a href="#" className="btn btn-primary">
              Get Started
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="untree_co-section bg-light">
    <div className="container">
      <div className="row justify-content-center mb-5">
        <div
          className="col-lg-7 text-center"
          data-aos="fade-up"
          data-aos-delay={0}
        >
          <h2 className="line-bottom text-center mb-4">Our Team</h2>
          <p>
            Meet the brilliant minds behind Digital Computer Technology. Get to
            know the faces shaping your learning experience.
          </p>
        </div>
      </div>
      <div className="row">
        <div
          className="col-12 col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-4"
          data-aos="fade-up"
          data-aos-delay={0}
        >
          <div className="staff text-center">
            <div className="mb-4">
              <img src="images/staff_2.jpg" alt="Image" className="img-fluid" />
            </div>
            <div className="staff-body">
              <h3 className="staff-name">Ramavtar Yadav</h3>
              <span className="d-block position mb-4">CEO</span>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-4"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="staff text-center">
            <div className="mb-4">
              <img
                src="images/staff/pushpendra.png"
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="staff-body">
              <h3 className="staff-name">Pushpendra Kumar Yadav</h3>
              <span className="d-block position mb-4">Managing Director</span>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-4"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <div className="staff text-center">
            <div className="mb-4">
              <img
                src="images/staff/ashok-kumar.png"
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="staff-body">
              <h3 className="staff-name">Ashok Kumar</h3>
              <span className="d-block position mb-4">
                Ethical Hacking Expert
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-12 col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-4"
          data-aos="fade-up"
          data-aos-delay={0}
        >
          <div className="staff text-center">
            <div className="mb-4">
              <img
                src="images/staff/antiksha.png"
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="staff-body">
              <h3 className="staff-name">Antiksha Swami</h3>
              <span className="d-block position mb-4">Legal Advisor</span>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-4"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="staff text-center">
            <div className="mb-4">
              <img
                src="images/staff/mk-yadav.png"
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="staff-body">
              <h3 className="staff-name">M.K. Yadav</h3>
              <span className="d-block position mb-4">App Developer</span>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-4"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <div className="staff text-center">
            <div className="mb-4">
              <img
                src="images/staff/surender.png"
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="staff-body">
              <h3 className="staff-name">Surender Yadav</h3>
              <span className="d-block position mb-4">Accountant</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-12 col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-4"
          data-aos="fade-up"
          data-aos-delay={0}
        >
          <div className="staff text-center">
            <div className="mb-4">
              <img
                src="images/staff/krishan.png"
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="staff-body">
              <h3 className="staff-name">Krishan Yadav</h3>
              <span className="d-block position mb-4">
                6<sup>th</sup> to 12<sup>th</sup> Math Specialist
              </span>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-4"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="staff text-center">
            <div className="mb-4">
              <img
                src="images/staff/ashok.png"
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="staff-body">
              <h3 className="staff-name">Ashok Kumawat</h3>
              <span className="d-block position mb-4">Tally Expert</span>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-4"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <div className="staff text-center">
            <div className="mb-4">
              <img
                src="images/staff/praveen.png"
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="staff-body">
              <h3 className="staff-name">Praveen Yadav</h3>
              <span className="d-block position mb-4">Rs-cit Tutor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /.untree_co-section */}
  <div className="untree_co-section">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-5 mb-5">
          <h2
            className="line-bottom mb-4"
            data-aos="fade-up"
            data-aos-delay={0}
          >
            Brief History
          </h2>
          <p data-aos="fade-up" data-aos-delay={100}>
            Welcome to <b>Digital Computer Technology</b>, Kotputli! Founded by
            Pushpendra Yadav in June 2017, we take pride in delivering
            exceptional computer education, offering a diverse range of distance
            learning courses, and serving as a reliable internet provider.
            Explore our services
          </p>
          <ul
            className="list-unstyled ul-check mb-5 primary"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <li>Comprehensive Computer Education</li>
            <li>Varied Distance Learning Courses</li>
            <li>Dependable Internet Services</li>
          </ul>
          <div className="row count-numbers mb-5">
            <div
              className="col-4 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={0}
            >
              <span className="counter d-block">
                <span data-number={12023}>0</span>
                <span>+</span>
              </span>
              <span className="caption-2">No. Students</span>
            </div>
            <div
              className="col-4 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <span className="counter d-block">
                <span data-number={49}>0</span>
                <span />
              </span>
              <span className="caption-2">No. Teachers</span>
            </div>
            <div
              className="col-4 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <span className="counter d-block">
                <span data-number={12}>0</span>
                <span />
              </span>
              <span className="caption-2">No. Awards</span>
            </div>
          </div>
          <p data-aos="fade-up" data-aos-delay={200}>
            <a href="#" className="btn btn-primary mr-1">
              Admission
            </a>
            <a href="#" className="btn btn-outline-primary">
              Learn More
            </a>
          </p>
        </div>
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={400}>
          <div className="bg-1" />
          <a
            href="https://youtu.be/CE2CiwTDjh8"
            data-fancybox=""
            className="video-wrap"
          >
            <span className="play-wrap">
              <span className="icon-play" />
            </span>
            <img
              src="images/about-us-video.png"
              alt="Image"
              className="img-fluid rounded"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="untree_co-section">
    <div className="container">
      <div className="row">
        <div
          className="col-lg-5 mr-auto mb-5 mb-lg-0"
          data-aos="fade-up"
          data-aos-delay={0}
        >
          <img
            src="images/why-choose-us.jpg"
            alt="image"
            className="img-fluid"
          />
        </div>
        <div
          className="col-lg-7 ml-auto"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <h3 className="line-bottom mb-4">Why Choose Us</h3>
          <p>
            Choose us for top-notch education, character development, and a
            secure career path in the digital world.
          </p>
          <div className="custom-accordion" id="accordion_1">
            <div className="accordion-item">
              <h2 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Eight Years of Experience
                </button>
              </h2>
              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion_1"
              >
                <div className="accordion-body">
                  <div className="d-flex">
                    <div className="accordion-img mr-4">
                      <img
                        src="images/img-school-1-min.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </div>
                    <div>
                      <p>
                        Our team of dedicated and skilled teachers and staff are
                        committed to providing a high-quality education.
                      </p>
                      <p>
                        We take pride in nurturing a learning environment where
                        students can thrive and excel in their computer
                        education.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* .accordion-item */}
            <div className="accordion-item">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  We Value Good Characters
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion_1"
              >
                <div className="accordion-body">
                  <div className="d-flex">
                    <div className="accordion-img mr-4">
                      <img
                        src="images/img-school-2-min.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </div>
                    <div>
                      <p>
                        At Digital Computer Technology, we don't just focus on
                        academic achievements; we value and prioritize good
                        character development.
                      </p>
                      <p>
                        Our holistic approach ensures that students not only
                        gain technical expertise but also cultivate strong moral
                        and ethical values.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* .accordion-item */}
            <div className="accordion-item">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Your Children are Safe
                </button>
              </h2>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion_1"
              >
                <div className="accordion-body">
                  <div className="d-flex">
                    <div className="accordion-img mr-4">
                      <img
                        src="images/img-school-3-min.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </div>
                    <div>
                      <p>
                        Your child's career is our priority. We provide a safe
                        and supportive space where students can explore and
                        pursue their passion for computer technology with
                        confidence.{" "}
                      </p>
                      <p>
                        Our comprehensive programs are designed to prepare them
                        for a successful and secure future in the digital world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* .accordion-item */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /.untree_co-section */}
  {/* /.untree_co-section */}
  <div className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 mr-auto">
          <div className="widget">
            <h3>
              About Us<span className="text-primary">.</span>{" "}
            </h3>
            <p>
              Digital Computer Technology - Shaping Futures since 2017. Leaders
              in computer education, distance learning, and reliable internet
              services. Empowering success in the digital era.
            </p>
          </div>{" "}
          {/* /.widget */}
          <div className="widget">
            <h3>Connect</h3>
            <ul className="list-unstyled social">
              <li>
                <a href="https://www.instagram.com/digitalcomputerkotputli/">
                  <span className="icon-instagram" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/dctkotputli">
                  <span className="icon-twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/DigitalComputerTechnology">
                  <span className="icon-facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/digitalcomputertechnology/">
                  <span className="icon-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/NPKSAyfbyAySsnfm9">
                  <span className="icon-google" />
                </a>
              </li>
            </ul>
          </div>{" "}
          {/* /.widget */}
        </div>{" "}
        {/* /.col-lg-3 */}
        <div className="col-lg-2 ml-auto">
          <div className="widget">
            <h3>Pages</h3>
            <ul className="list-unstyled float-left links">
              <li>
                <a href="/index.html">Home</a>
              </li>
              <li>
                <a href="/staff.html">Our Staff</a>
              </li>
              <li>
                <a href="/gallery.html">Gallery</a>
              </li>
              <li>
                <a href="/about.html">About</a>
              </li>
            </ul>
          </div>{" "}
          {/* /.widget */}
        </div>{" "}
        {/* /.col-lg-3 */}
        <div className="col-lg-3">
          <div className="widget">
            <h3>Certificates</h3>
            <ul className="instafeed instagram-gallery list-unstyled">
              <li>
                <a
                  className="instagram-item"
                  href="images/certificate/dct iso.jpg"
                  data-fancybox="gal"
                >
                  <img
                    src="images/certificate/dct iso.jpg"
                    alt=""
                    width={72}
                    height={72}
                  />
                </a>
              </li>
              <li>
                <a
                  className="instagram-item"
                  href="images/certificate/dct ok.jpg"
                  data-fancybox="gal"
                >
                  <img
                    src="images/certificate/dct ok.jpg"
                    alt=""
                    width={72}
                    height={72}
                  />
                </a>
              </li>
              <li>
                <a
                  className="instagram-item"
                  href="images/certificate/dct rscit.png"
                  data-fancybox="gal"
                >
                  <img
                    src="images/certificate/dct rscit.png"
                    alt=""
                    width={72}
                    height={72}
                  />
                </a>
              </li>
              <li>
                <a
                  className="instagram-item"
                  href="images/certificate/dct san.png"
                  data-fancybox="gal"
                >
                  <img
                    src="images/certificate/dct san.png"
                    alt=""
                    width={72}
                    height={72}
                  />
                </a>
              </li>
              <li>
                <a
                  className="instagram-item"
                  href="images/certificate/dct udhog.png"
                  data-fancybox="gal"
                >
                  <img
                    src="images/certificate/dct udhog.png"
                    alt=""
                    width={72}
                    height={72}
                  />
                </a>
              </li>
              <li>
                <a
                  className="instagram-item"
                  href="images/certificate/dct udyam.png"
                  data-fancybox="gal"
                >
                  <img
                    src="images/certificate/dct udyam.png"
                    alt=""
                    width={72}
                    height={72}
                  />
                </a>
              </li>
            </ul>
          </div>{" "}
          {/* /.widget */}
        </div>{" "}
        {/* /.col-lg-3 */}
        <div className="col-lg-3">
          <div className="widget">
            <h3>Contact</h3>
            <address>
              Behind Police Station, Sanjeevani Hospital Road, Garh Colony,
              Kotputli , Jaipur (Raj) 303108
            </address>
            <ul className="list-unstyled links mb-4">
              <li>
                <a href="tel://11234567890">+91 96 499 11 993</a>
              </li>
              {/* <li><a href="tel://11234567890">+1(123)-456-7890</a></li> */}
              <li>
                <a href="mailto:info@mydomain.com">info@digitalcomputer.in</a>
              </li>
            </ul>
          </div>{" "}
          {/* /.widget */}
        </div>{" "}
        {/* /.col-lg-3 */}
      </div>{" "}
      {/* /.row */}
      <div className="row mt-5">
        <div className="col-12 text-center">
          <p>
            Copyright ©. All Rights Reserved. — Designed with love by{" "}
            <a href="http://raonikeshnk.in/">Rao Nikesh NK</a>
          </p>
        </div>
      </div>
    </div>{" "}
    {/* /.container */}
  </div>{" "}
  {/* /.site-footer */}
  {/* <div id="overlayer" />
  <div className="loader">
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div> */}
</>


     );
}

export default About;