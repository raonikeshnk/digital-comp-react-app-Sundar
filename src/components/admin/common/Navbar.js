function Navbar() {
    return ( 

        <nav  className="site-nav mb-5 bg-dark">
        
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
              </ul>
              <a
                href="/logout"
                className="btn-book btn btn-danger btn-sm d-none d-lg-inline-block menu-absolute"
              >
                Logout
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