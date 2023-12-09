function Navbar() {
    return ( 
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
              <div class="col-6 col-lg-3 text-right">
          <a href="/login" class="small mr-3">
            <span class="icon-lock"></span>
            Log In
          </a>
          <a href="/register" class="small">
            <span class="icon-person"></span>
            Register
          </a>
        </div>
            </div>
          </div>
        </div>
        <div className="sticky-nav js-sticky-header">
          <div className="container position-relative">
            <div className="site-navigation text-center">
              <a href="/" className="logo menu-absolute m-0">
                <img src="./images/dct-logo.png" width="50px" alt="" />
                Digital Computer<span className="text-primary">.</span>
              </a>
              <ul className="js-clone-nav d-none d-lg-inline-block site-menu">
                <li className="active">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/courses">Our Courses</a>
                </li>
                <li>
                  <a href="/staff">Our Staff</a>
                </li>
                <li>
                  <a href="/gallery">Gallery</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
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
     );
}

export default Navbar;