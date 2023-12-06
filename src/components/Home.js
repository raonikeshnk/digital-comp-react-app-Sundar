import React from 'react';

function Index() {

    return (
        <div>
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
                            {/* <div className="col-6 col-lg-3 text-right">
            <a href="login.html" className="small mr-3">
              <span className="icon-lock"></span>
              Log In
            </a>
            <a href="register.html" className="small">
              <span className="icon-person"></span>
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
                                <img src="./images//dct-logo.png" width="50px" alt="" />
                                Digital Computer<span className="text-primary">.</span>
                            </a>
                            <ul className="js-clone-nav d-none d-lg-inline-block site-menu">
                                <li className="active">
                                    <a href="index.html">Home</a>
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
                                href="#"
                                className="btn-book btn btn-secondary btn-sm menu-absolute"
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
                style={{ backgroundImage: 'url("images/hero-banner.png")' }}
            >
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12 mt-5">
                            <div className="row justify-content-center mt-5">
                                <div className="col-lg-6 text-center ml-5">
                                    <a
                                        href="#"
                                        data-fancybox=""
                                        data-aos="fade-up"
                                        data-aos-delay={0}
                                        className="caption mb-4 d-inline-block mt-5"
                                    >
                                        Now in Kotputli
                                    </a>
                                    <h1
                                        className="mb-4 heading text-white"
                                        id="dynamic-text"
                                        data-aos="fade-up"
                                        data-aos-delay={100}
                                    >
                                        Best Place To Learn <br />{" "}
                                        <b>
                                            <em>Website Development</em>
                                        </b>
                                    </h1>
                                    <p className="mb-0" data-aos="fade-up" data-aos-delay={300}>
                                        <a href="#" className="btn btn-secondary">
                                            Know More
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                    {/* /.row */}
                </div>{" "}
                {/* /.container */}
            </div>{" "}
            
            <div className="untree_co-section">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div
                            className="col-lg-7 text-center"
                            data-aos="fade-up"
                            data-aos-delay={0}
                        >
                            <h2 className="line-bottom text-center mb-4">
                                We Have Best Education
                            </h2>
                            <p>
                                Discover top-notch education with us! From coding and finance to
                                fluent English and digital marketing, unlock a world of
                                opportunities. Your path to the best education starts here!
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-6 col-sm-6 col-md-6 col-lg-4"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            <div className="feature">
                                <i className="uil uil-arrow" />
                                <h3>Coding Course</h3>
                                <p>
                                    Embark on a journey to create computer programs and websites,
                                    opening doors to exciting tech opportunities and job possibilities
                                    in the digital world.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-6 col-sm-6 col-md-6 col-lg-4"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <div className="feature">
                                <i className="uil uil-user-exclamation" />
                                <h3>Accounting Course</h3>
                                <p>
                                    Delve into the world of finances, understanding the ins and outs
                                    of money in businesses, and gaining skills to manage your finances
                                    confidently.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-6 col-sm-6 col-md-6 col-lg-4"
                            data-aos="fade-up"
                            data-aos-delay={300}
                        >
                            <div className="feature">
                                <i className="uil uil-language" />
                                <h3>Spoken English </h3>
                                <p>
                                    Enhance your everyday and work conversations by becoming more
                                    proficient in spoken English, boosting your confidence and
                                    connection with others.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-6 col-sm-6 col-md-6 col-lg-4"
                            data-aos="fade-up"
                            data-aos-delay='100"'
                        >
                            <div className="feature">
                                <i className="uil uil-megaphone" />
                                <h3>Digital Marketing</h3>
                                <p>
                                    Dive into the realm of online advertising and social media, honing
                                    skills that will make you adept at navigating the dynamic
                                    landscape of digital marketing.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-6 col-sm-6 col-md-6 col-lg-4"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <div className="feature">
                                <i className="uil uil-book-open" />
                                <h3>Distance Learning</h3>
                                <p>
                                    Empower yourself to study from anywhere with flexible online
                                    classNamees tailored to fit seamlessly into your schedule, making
                                    education accessible and convenient.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-6 col-sm-6 col-md-6 col-lg-4"
                            data-aos="fade-up"
                            data-aos-delay={300}
                        >
                            <div className="feature">
                                <i className="uil uil-book-reader" />
                                <h3>School Tution className</h3>
                                <p>
                                    Receive personalized support to excel in your school subjects,
                                    ensuring a deeper understanding and improved performance in your
                                    classNamees with expert guidance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>{" "}
                {/* /.container */}
            </div>{" "}
            <div className="untree_co-section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div
                            className="col-lg-7 text-center"
                            data-aos="fade-up"
                            data-aos-delay={0}
                        >
                            <h2 className="line-bottom text-center mb-4">
                                The Right Course For You
                            </h2>
                            <p>
                                Find your perfect fit with our diverse courses. Whether it's coding,
                                finance, language, or marketing, we have the right course for you.
                                Elevate your skills and shape your future.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="custom-media">
                                <a href="#">
                                    <img
                                        src="images/img-school-1-min.jpg"
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </a>
                                <div className="custom-media-body">
                                    <div className="d-flex justify-content-between pb-3">
                                        <div className="text-primary">
                                            <span className="uil uil-book-open" />{" "}
                                            <span>Online/Offline</span>
                                        </div>
                                        <div className="review">
                                            <span className="icon-star" /> <span>4.8</span>
                                        </div>
                                    </div>
                                    <h3>Application Development</h3>
                                    <p className="mb-4">
                                        Lorem ipsum dolor sit amet once is consectetur adipisicing elit
                                        optio.
                                    </p>
                                    <div className="border-top d-flex justify-content-between pt-3 mt-3 align-items-center">
                                        <div>
                                            <span className="price"> 6 Months</span>
                                        </div>
                                        <div>
                                            <a href="#" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="custom-media">
                                <a href="#">
                                    <img
                                        src="images/img-school-2-min.jpg"
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </a>
                                <div className="custom-media-body">
                                    <div className="d-flex justify-content-between pb-3">
                                        <div className="text-primary">
                                            <span className="uil uil-book-open" />{" "}
                                            <span>Online/Offline</span>
                                        </div>
                                        <div className="review">
                                            <span className="icon-star" /> <span>4.8</span>
                                        </div>
                                    </div>
                                    <h3>Website Development</h3>
                                    <p className="mb-4">
                                        Lorem ipsum dolor sit amet once is consectetur adipisicing elit
                                        optio.
                                    </p>
                                    <div className="border-top d-flex justify-content-between pt-3 mt-3 align-items-center">
                                        <div>
                                            <span className="price">6 Months</span>
                                        </div>
                                        <div>
                                            <a href="#" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="custom-media">
                                <a href="#">
                                    <img
                                        src="images/img-school-3-min.jpg"
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </a>
                                <div className="custom-media-body">
                                    <div className="d-flex justify-content-between pb-3">
                                        <div className="text-primary">
                                            <span className="uil uil-book-open" />{" "}
                                            <span>Online/Offline</span>
                                        </div>
                                        <div className="review">
                                            <span className="icon-star" /> <span>4.8</span>
                                        </div>
                                    </div>
                                    <h3>Game Development</h3>
                                    <p className="mb-4">
                                        Lorem ipsum dolor sit amet once is consectetur adipisicing elit
                                        optio.
                                    </p>
                                    <div className="border-top d-flex justify-content-between pt-3 mt-3 align-items-center">
                                        <div>
                                            <span className="price">6 Months</span>
                                        </div>
                                        <div>
                                            <a href="#" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p
                        className="mb-0 text-center mt-5"
                        data-aos="fade-up"
                        data-aos-delay={300}
                    >
                        <a href="courses.html" className="btn btn-secondary">
                            Explore courses
                        </a>
                    </p>
                </div>
            </div>
            <div
                className="untree_co-section pt-0 bg-img overlay"
                style={{ backgroundImage: 'url("images/img-school-1-min.jpg")' }}
            >
                <div className="container">
                    <div className="row align-items-center justify-content-center text-center">
                        <div className="col-lg-7">
                            <h2 className="text-white mb-3" data-aos="fade-up" data-aos-delay={0}>
                                Education for Tomorrow's Leaders
                            </h2>
                            <p
                                className="text-white h5 mb-4"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                Nurturing minds today to shape a brighter, innovative future for
                                all.
                            </p>
                            <p>
                                <a
                                    href="#"
                                    className="btn btn-secondary"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                >
                                    Enroll Now
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>{" "}
            <div className="untree_co-section">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5 mb-5">
                            <h2
                                className="line-bottom mb-4"
                                data-aos="fade-up"
                                data-aos-delay={0}
                            >
                                About Us
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
                                href="https://vimeo.com/342333493"
                                data-fancybox=""
                                className="video-wrap"
                            >
                                <span className="play-wrap">
                                    <span className="icon-play" />
                                </span>
                                <img
                                    src="images/img-school-4-min.jpg"
                                    alt="Image"
                                    className="img-fluid rounded"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>{" "}
            <div className="untree_co-section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div
                            className="col-lg-7 text-center"
                            data-aos="fade-up"
                            data-aos-delay={0}
                        >
                            <h2 className="line-bottom text-center mb-4">Career Guide</h2>
                            <p>
                                Explore boundless opportunities and chart your course to success
                                with our Career Guide section at Digital Computer Technology. Our
                                expertly curated resources provide invaluable insights, advice, and
                                pathways for individuals navigating the dynamic landscape of the
                                digital world. Empower your career journey with us.
                            </p>
                        </div>
                    </div>
                    <div className="row align-items-stretch">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                            <div className="media-h d-flex h-100">
                                <figure>
                                    <img src="images/img-school-1-min.jpg" alt="Image" />
                                </figure>
                                <div className="media-h-body">
                                    <h2 className="mb-3">
                                        <a
                                            target="_blank"
                                            href="https://www.indiatoday.in/education-today/jobs-and-careers/story/5-things-you-need-for-a-great-coding-career-1749514-2020-12-14"
                                        >
                                            5 things you need for a great coding career
                                        </a>
                                    </h2>
                                    <div className="meta mb-2">
                                        <span className="icon-calendar mr-2" />
                                        <span>Dec 17, 2020</span> <span className="icon-person mr-2" />
                                        Admin
                                    </div>
                                    <p>
                                        Coding has become a vital skill now and is used in a wide range
                                        of industries since every industry has a technology component
                                        now.
                                    </p>
                                    <p>
                                        <a
                                            target="_blank"
                                            href="https://www.indiatoday.in/education-today/jobs-and-careers/story/5-things-you-need-for-a-great-coding-career-1749514-2020-12-14"
                                        >
                                            Learn More
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
                            <div className="media-h d-flex h-100">
                                <figure>
                                    <img src="images/img-school-2-min.jpg" alt="Image" />
                                </figure>
                                <div className="media-h-body">
                                    <h2 className="mb-3">
                                        <a
                                            target="_blank"
                                            href="https://economictimes.indiatimes.com/tech/technology/coding-is-the-only-global-language-i-wish-more-indian-kids-learn-it-tim-cook/articleshow/99721470.cms"
                                        >
                                            Coding is the only global language, I wish more Indian kids
                                            learn it: Apple CEO Tim Cook
                                        </a>
                                    </h2>
                                    <div className="meta mb-2">
                                        <span className="icon-calendar mr-2" />
                                        <span>April 26, 2023</span>{" "}
                                        <span className="icon-person mr-2" />
                                        Admin
                                    </div>
                                    <p>
                                        Cook said that coding is one thing schools worldwide including
                                        in India should embrace early in children's lives.
                                    </p>
                                    <p>
                                        <a
                                            target="_blank"
                                            href="https://economictimes.indiatimes.com/tech/technology/coding-is-the-only-global-language-i-wish-more-indian-kids-learn-it-tim-cook/articleshow/99721470.cms"
                                        >
                                            Learn More
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>{" "}
            <div className="untree_co-section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 text-center mx-auto">
                            <h3 className="line-bottom mb-4">Testimonials</h3>
                            <div className="owl-carousel wide-slider-testimonial">
                                <div className="item">
                                    <blockquote className="block-testimonial">
                                        <p>
                                            “Digital Computer Technology has been a game-changer for my
                                            career. The comprehensive courses and expert guidance helped
                                            me acquire cutting-edge skills. I am now confidently
                                            navigating the tech industry. Highly recommended!”
                                        </p>
                                        <div className="author">
                                            <img
                                                src="images/person_1.jpg"
                                                alt="Free template by TemplateUX"
                                            />
                                            <h3>Rituka Yadav</h3>
                                            {/* <p className="position">CEO, Founder</p> */}
                                        </div>
                                    </blockquote>
                                </div>
                                <div className="item">
                                    <blockquote className="block-testimonial">
                                        <p>
                                            “Enrolling at Digital Computer Technology was a turning point
                                            in my career. The distance learning courses allowed me to
                                            balance work and education seamlessly. The quality of
                                            instruction exceeded my expectations, making it a top choice.”
                                        </p>
                                        <div className="author">
                                            <img
                                                src="images/person_2.jpg"
                                                alt="Free template by TemplateUX"
                                            />
                                            <h3>Manish Saini</h3>
                                            {/* <p className="position">Designer at Facebook</p> */}
                                        </div>
                                    </blockquote>
                                </div>
                                <div className="item">
                                    <blockquote className="block-testimonial">
                                        <p>
                                            “A small river named Duden flows by their place and supplies
                                            it with the necessary regelialia. It is a paradisematic
                                            country, in which roasted parts of sentences fly into your
                                            mouth.”
                                        </p>
                                        <div className="author">
                                            <img
                                                src="images/person_3.jpg"
                                                alt="Free template by TemplateUX"
                                            />
                                            <h3>Riya</h3>
                                            {/* <p className="position">Product Designer at Twitter</p> */}
                                        </div>
                                    </blockquote>
                                </div>
                                <div className="item">
                                    <blockquote className="block-testimonial">
                                        <p>
                                            “Digital Computer Technology's internet services have been a
                                            lifeline for my work. The reliable and high-speed connection
                                            has significantly boosted my productivity. Their commitment to
                                            excellence is truly commendable.”
                                        </p>
                                        <div className="author">
                                            <img
                                                src="images/person_3.jpg"
                                                alt="Free template by TemplateUX"
                                            />
                                            <h3>Jyoti</h3>
                                            {/* <p className="position">Product Designer at Twitter</p> */}
                                        </div>
                                    </blockquote>
                                </div>
                                <div className="item">
                                    <blockquote className="block-testimonial">
                                        <p>
                                            “I can't express how grateful I am for the guidance provided
                                            by Digital Computer Technology's Career Guide section. It
                                            offered valuable insights and resources, helping me make
                                            informed decisions about my career path in the digital realm.”
                                        </p>
                                        <div className="author">
                                            <img
                                                src="images/person_3.jpg"
                                                alt="Free template by TemplateUX"
                                            />
                                            <h3>Rekha</h3>
                                            {/* <p className="position">Product Designer at Twitter</p> */}
                                        </div>
                                    </blockquote>
                                </div>
                                <div className="item">
                                    <blockquote className="block-testimonial">
                                        <p>
                                            “The founder, Pushpendra Yadav, has created a visionary
                                            institution in Digital Computer Technology. The commitment to
                                            providing top-notch education and services is evident, making
                                            it a trusted destination for anyone seeking excellence in
                                            computer technology.”
                                        </p>
                                        <div className="author">
                                            <img
                                                src="images/person_3.jpg"
                                                alt="Free template by TemplateUX"
                                            />
                                            <h3>Neha</h3>
                                            {/* <p className="position">Product Designer at Twitter</p> */}
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
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
                                src="images/img-school-5-min.jpg"
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
            </div>{" "}
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
                                        <a href="#">
                                            <span className="icon-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="icon-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="icon-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="icon-linkedin" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="icon-pinterest" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="icon-dribbble" />
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
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">Our Staff</a>
                                    </li>
                                    <li>
                                        <a href="#">Gallery</a>
                                    </li>
                                    <li>
                                        <a href="#">About</a>
                                    </li>
                                </ul>
                            </div>{" "}
                            {/* /.widget */}
                        </div>{" "}
                        {/* /.col-lg-3 */}
                        <div className="col-lg-3">
                            <div className="widget">
                                <h3>Gallery</h3>
                                <ul className="instafeed instagram-gallery list-unstyled">
                                    <li>
                                        <a
                                            className="instagram-item"
                                            href="images/gal_1.jpg"
                                            data-fancybox="gal"
                                        >
                                            <img src="images/gal_1.jpg" alt="" width={72} height={72} />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="instagram-item"
                                            href="images/gal_2.jpg"
                                            data-fancybox="gal"
                                        >
                                            <img src="images/gal_2.jpg" alt="" width={72} height={72} />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="instagram-item"
                                            href="images/gal_3.jpg"
                                            data-fancybox="gal"
                                        >
                                            <img src="images/gal_3.jpg" alt="" width={72} height={72} />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="instagram-item"
                                            href="images/gal_4.jpg"
                                            data-fancybox="gal"
                                        >
                                            <img src="images/gal_4.jpg" alt="" width={72} height={72} />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="instagram-item"
                                            href="images/gal_5.jpg"
                                            data-fancybox="gal"
                                        >
                                            <img src="images/gal_5.jpg" alt="" width={72} height={72} />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="instagram-item"
                                            href="images/gal_6.jpg"
                                            data-fancybox="gal"
                                        >
                                            <img src="images/gal_6.jpg" alt="" width={72} height={72} />
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
            {/* <div id="overlayer" /> */}
            {/* <div className="loader">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div> */}
        </div>


    );
}

export default Index;