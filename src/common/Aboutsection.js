function Aboutsection() {
    return ( 
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
      
     );
}

export default Aboutsection;