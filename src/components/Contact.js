
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

function Contact() {
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
                Contact Us
              </h1>
              <div
                className="mb-5 mt-5 text-white desc mx-auto"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <p>
                  Connect with us at Digital Computer Technology. Whether you
                  have questions, want to enroll, or just say hello, we're here
                  for you. Find our contact information and let's start a
                  conversation. We look forward to hearing from you!
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
  <div className="untree_co-section">
    <div className="container">
      <div className="row mb-5">
        <div
          className="col-lg-4 mb-5 order-2 mb-lg-0"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="contact-info">
            <div className="address mt-4">
              <i className="icon-room" />
              <h4 className="mb-2">Location:</h4>
              <p>
                Behind Police Station, Sanjeevani Hospital Road, Garh Colony,
                Kotputli , Jaipur (Raj) 303108
              </p>
            </div>
            <div className="open-hours mt-4">
              <i className="icon-clock-o" />
              <h4 className="mb-2">Open Hours:</h4>
              <p>
                Monday-Saturday:
                <br />
                09:00 AM - 06:00 PM
              </p>
            </div>
            <div className="email mt-4">
              <i className="icon-envelope" />
              <h4 className="mb-2">Email:</h4>
              <p>info@digitalcomputer.in</p>
            </div>
            <div className="phone mt-4">
              <i className="icon-phone" />
              <h4 className="mb-2">Call:</h4>
              <p>+91 96499 11993</p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-7 mr-auto order-1"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <form action="#">
            <div className="row">
              <div className="col-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="col-6 mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
              <div className="col-12 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="col-12 mb-3">
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={7}
                  className="form-control"
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div className="col-12">
                <input
                  type="submit"
                  defaultValue="Send Message"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>{" "}
  {/* /.untree_co-section */}
  
  <Footer/>

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

export default Contact;