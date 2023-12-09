function News() {
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
                className="mb-4 heading text-white"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                News
              </h1>
              <div
                className="mb-5 text-white desc mx-auto"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <p>
                  Another free template by{" "}
                  <a
                    href="https://untree.co/"
                    target="_blank"
                    className="link-highlight"
                  >
                    Untree.co
                  </a>
                  . Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live.
                </p>
              </div>
              <p className="mb-0" data-aos="fade-up" data-aos-delay={300}>
                <a href="#" className="btn btn-secondary">
                  Explore courses
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
  <div className="untree_co-section bg-light">
    <div className="container">
      <div className="row align-items-stretch">
        <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay={100}>
          <div className="media-h d-flex h-100">
            <figure>
              <img src="images/img-school-4-min.jpg" alt="Image" />
            </figure>
            <div className="media-h-body">
              <h2 className="mb-3">
                <a href="#">Education for Tomorrow's Leaders</a>
              </h2>
              <div className="meta ">
                <span className="icon-calendar mr-2" />
                <span>June 22, 2020</span> <span className="icon-person mr-2" />
                Untree.co
              </div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay={200}>
          <div className="media-h d-flex h-100">
            <figure>
              <img src="images/img-school-3-min.jpg" alt="Image" />
            </figure>
            <div className="media-h-body">
              <h2 className="mb-3">
                <a href="#">Enroll Your Kids This Summer to get 30% off</a>
              </h2>
              <div className="meta ">
                <span className="icon-calendar mr-2" />
                <span>June 22, 2020</span> <span className="icon-person mr-2" />
                Untree.co
              </div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay={100}>
          <div className="media-h d-flex h-100">
            <figure>
              <img src="images/img-school-2-min.jpg" alt="Image" />
            </figure>
            <div className="media-h-body">
              <h2 className="mb-3">
                <a href="#">Education for Tomorrow's Leaders</a>
              </h2>
              <div className="meta ">
                <span className="icon-calendar mr-2" />
                <span>June 22, 2020</span> <span className="icon-person mr-2" />
                Untree.co
              </div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay={200}>
          <div className="media-h d-flex h-100">
            <figure>
              <img src="images/img-school-1-min.jpg" alt="Image" />
            </figure>
            <div className="media-h-body">
              <h2 className="mb-3">
                <a href="#">Enroll Your Kids This Summer to get 30% off</a>
              </h2>
              <div className="meta ">
                <span className="icon-calendar mr-2" />
                <span>June 22, 2020</span> <span className="icon-person mr-2" />
                Untree.co
              </div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay={100}>
          <div className="media-h d-flex h-100">
            <figure>
              <img src="images/img-school-5-min.jpg" alt="Image" />
            </figure>
            <div className="media-h-body">
              <h2 className="mb-3">
                <a href="#">Education for Tomorrow's Leaders</a>
              </h2>
              <div className="meta ">
                <span className="icon-calendar mr-2" />
                <span>June 22, 2020</span> <span className="icon-person mr-2" />
                Untree.co
              </div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay={200}>
          <div className="media-h d-flex h-100">
            <figure>
              <img src="images/img-school-6-min.jpg" alt="Image" />
            </figure>
            <div className="media-h-body">
              <h2 className="mb-3">
                <a href="#">Enroll Your Kids This Summer to get 30% off</a>
              </h2>
              <div className="meta ">
                <span className="icon-calendar mr-2" />
                <span>June 22, 2020</span> <span className="icon-person mr-2" />
                Untree.co
              </div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 text-center">
          <ul className="list-unstyled custom-pagination">
            <li>
              <a href="#">1</a>
            </li>
            <li className="active">
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
          </ul>
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

export default News;