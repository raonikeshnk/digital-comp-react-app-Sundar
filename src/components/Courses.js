function Courses() {
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
            href="courses.html"
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
                Courses
              </h1>
              <div
                className="mb-5 mt-5 text-white desc mx-auto"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <p>
                  Explore the exciting courses offered at Digital Computer
                  Technology. From coding to finance, spoken English to digital
                  marketing, find the perfect course to elevate your skills and
                  shape your future. Your learning journey starts here!
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
  <div className="untree_co-section bg-light">
    <div className="container">
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
      <div className="row mt-4">
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0">
          <div className="custom-media">
            <a href="#">
              <img
                src="images/ethical-hacking-course.png"
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
              <h3>Ethical Hacking</h3>
              <p className="mb-4">
                Master the art of Ethical Hacking and cybersecurity defense
                strategies.
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
                src="images/adpfa-course.png"
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
              <h3>ADPFA</h3>
              <p className="mb-4">
                Elevate your financial expertise with our ADPFA certification
                course.
              </p>
              <div className="border-top d-flex justify-content-between pt-3 mt-3 align-items-center">
                <div>
                  <span className="price">12 Months</span>
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
                src="images/tally-prime-course.png"
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
              <h3>Tally Prime</h3>
              <p className="mb-4">
                Navigate the world of accounting effortlessly with our Tally
                Prime Course.
              </p>
              <div className="border-top d-flex justify-content-between pt-3 mt-3 align-items-center">
                <div>
                  <span className="price">3 Months</span>
                </div>
                <div>
                  <a href="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0">
          <div className="custom-media">
            <a href="#">
              <img
                src="images/gst-course.png"
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
              <h3>GST</h3>
              <p className="mb-4">
                Decode the complexities of GST with our comprehensive GST
                course.
              </p>
              <div className="border-top d-flex justify-content-between pt-3 mt-3 align-items-center">
                <div>
                  <span className="price"> 1 Month</span>
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
                src="images/spoken-english-course.png"
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
              <h3>Spoken English</h3>
              <p className="mb-4">
                Polish your spoken English skills and boost your confidence in
                communication.
              </p>
              <div className="border-top d-flex justify-content-between pt-3 mt-3 align-items-center">
                <div>
                  <span className="price">3 Months</span>
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
                src="images/rscit-course.png"
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
              <h3>RS-CIT</h3>
              <p className="mb-4">
                Enhance your IT skills with the RSCIT program tailored for
                success.
              </p>
              <div className="border-top d-flex justify-content-between pt-3 mt-3 align-items-center">
                <div>
                  <span className="price">2 Months</span>
                </div>
                <div>
                  <a href="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0">
          <div className="custom-media">
            <a href="#">
              <img
                src="images/ccc-course.png"
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
              <h3>Course on Computer Concept (CCC)</h3>
              <p className="mb-4">
                Get a solid foundation in computer concepts with our CCC course.
              </p>
              <div className="border-top d-flex justify-content-between pt-3 mt-3 align-items-center">
                <div>
                  <span className="price"> 2 Months</span>
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
                src="images/tution-classes.png"
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
              <h3>
                Tution Classes (6<sup>th</sup> to 12<sup>th</sup> )
              </h3>
              <p className="mb-4">
                Excel academically with our tailored tuition classes for grades
                6 to 12.
              </p>
              <div className="border-top d-flex justify-content-between pt-3 mt-3 align-items-center">
                <div>
                  <span className="price">3 Months</span>
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
                src="images/distance-courses.png"
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
              <h3>Distance Learning Courses</h3>
              <p className="mb-4">
                Achieve your educational goals from anywhere with our flexible
                Distance Learning Courses.
              </p>
              <div className="border-top d-flex justify-content-between pt-3 mt-3 align-items-center">
                <div>
                  <span className="price">As per Course</span>
                </div>
                <div>
                  <a href="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>{" "}
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
  </div>
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

export default Courses;