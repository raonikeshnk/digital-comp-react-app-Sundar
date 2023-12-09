import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import Aboutsection from '../common/Aboutsection';

function Index() {

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

  <Navbar/>


  <div
    className="untree_co-hero overlay"
    style={{
      height: "100vh",
      backgroundImage: 'url("images/ai-banner-3.png")'
    }}
  >
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-12">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <a
                href="https://youtu.be/CE2CiwTDjh8"
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
                <a href="/about.html" className="btn btn-secondary">
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
  {/* /.untree_co-hero */}
  {/* <div class="untree_co-section">
    <div class="container">
<div class="row justify-content-center mb-3">
  <div class="col-lg-7 text-center" data-aos="fade-up" data-aos-delay="0">
    <h2 class="line-bottom text-center mb-4">Browse Top Category</h2>
  </div>
</div>
<div class="row align-items-stretch">
  <div class="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="0">
    <a href="#" class="category d-flex align-items-start h-100">
      <div>
        <i class="uil uil-atom"></i>
      </div>
      <div>
        <h3>Science</h3>
        <span>1,391 courses</span>
      </div>
    </a>
  </div>
  <div class="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
    <a href="#" class="category d-flex align-items-start h-100">
      <div>
        <i class="uil uil-briefcase"></i>
      </div>
      <div>
        <h3>Business</h3>
        <span>3,234 courses</span>
      </div>
    </a>
  </div>
  <div class="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="200">
    <a href="#" class="category d-flex align-items-start h-100">
      <div>
        <i class="uil uil-calculator"></i>
      </div>
      <div>
        <h3>Finance Accounting</h3>
        <span>931 courses</span>
      </div>
    </a>
  </div>
  <div class="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
    <a href="#" class="category d-flex align-items-start h-100">
      <div>
        <i class="uil uil-pen"></i>
      </div>
      <div>
        <h3>Design</h3>
        <span>7,291 courses</span>
      </div>
    </a>
  </div>


  <div class="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="0">
    <a href="#" class="category d-flex align-items-start h-100">
      <div>
        <i class="uil uil-music"></i>
      </div>
      <div>
        <h3>Music</h3>
        <span>9,114 courses</span>
      </div>
    </a>
  </div>
  <div class="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
    <a href="#" class="category d-flex align-items-start h-100">
      <div>
        <i class="uil uil-chart-pie"></i>
      </div>
      <div>
        <h3>Marketing</h3>
        <span>2,391 courses</span>
      </div>
    </a>
  </div>
  <div class="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="200">
    <a href="#" class="category d-flex align-items-start h-100">
      <div>
        <i class="uil uil-camera"></i>
      </div>
      <div>
        <h3>Photography</h3>
        <span>7,991 courses</span>
      </div>
    </a>
  </div>
  <div class="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
    <a href="#" class="category d-flex align-items-start h-100">
      <div>
        <i class="uil uil-circle-layer"></i>
      </div>
      <div>
        <h3>Animation</h3>
        <span>6,491 courses</span>
      </div>
    </a>
  </div>
  

</div>

<div class="row justify-content-center" data-aos="fade-up" data-aos-delay="400">
  <div class="col-lg-8 text-center">
    <p>We have more category here. <a href="#">Browse all</a></p>
  </div>
</div>
    </div>
  </div> */}
  {/* <div class="services-section">
    <div class="container">
<div class="row justify-content-between">
  <div class="col-lg-4 mb-5 mb-lg-0">

    <div class="section-title mb-3" data-aos="fade-up" data-aos-delay="0">
      <h2 class="line-bottom mb-4">Become an Instructor</h2>
    </div>

    <p data-aos="fade-up" data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.</p>

    <ul class="ul-check list-unstyled mb-5 primary" data-aos="fade-up" data-aos-delay="200">
      <li>Behind the word Mountains.</li>
      <li>Far far away Mountains.</li>
      <li>Large language Ocean.</li>
    </ul>

    <p data-aos="fade-up" data-aos-delay="300"><a href="#" class="btn btn-primary">Get Started</a></p>

  </div>
  <div class="col-lg-6" data-aos="fade-up" data-aos-delay="0">
    <figure class="img-wrap-2">
      <img src="images/teacher-min.jpg" alt="Image" class="img-fluid">
      <div class="dotted"></div>
    </figure>

  </div>
</div>
    </div>
  </div> */}
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
              classes tailored to fit seamlessly into your schedule, making
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
            <h3>School Tution Class</h3>
            <p>
              Receive personalized support to excel in your school subjects,
              ensuring a deeper understanding and improved performance in your
              classes with expert guidance.
            </p>
          </div>
        </div>
      </div>
    </div>{" "}
    {/* /.container */}
  </div>{" "}
  {/* /.untree_co-section */}
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
                src="images/app-course.png"
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
                Turn ideas into apps with our App Development Course.
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
                src="images/web-course.png"
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
                Craft dynamic websites from scratch in our Web Development
                Course.
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
                src="images/game-course.png"
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
                Create games from concept to reality in our Game Development
                Course.
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
              href="tel:+91964991193"
              className="btn btn-secondary"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Call Now
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>{" "}
  {/* /.untree_co-section */}
  
  <Aboutsection/>

  {/* /.untree_co-section */}

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
  {/* /.untree_co-section */}
  {/* /.untree_co-section */}
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
                  {/* <p class="position">CEO, Founder</p> */}
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
                  {/* <p class="position">Designer at Facebook</p> */}
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
                  {/* <p class="position">Product Designer at Twitter</p> */}
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
                  {/* <p class="position">Product Designer at Twitter</p> */}
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
                  {/* <p class="position">Product Designer at Twitter</p> */}
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
                  {/* <p class="position">Product Designer at Twitter</p> */}
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
  </div>{" "}


  {/* /.untree_co-section */}

<Footer/>

  {/* /.site-footer */}
  
</>



    );
}

export default Index;