import React, { useEffect, useState } from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import Aboutsection from '../common/Aboutsection';
import Staffsection  from '../common/Staffsection'
function About() {
  const [editing, setEditing] = useState(false);
  const [mission, setMission] = useState('');
  const [order, setOrder] = useState('');
  const [order1, setOrder1] = useState('');
  const [order2, setOrder2] = useState('');
  const [order3, setOrder3] = useState('');
  const [missionImage, setMissionImage] = useState(null);
  const [vision, setVision] = useState('');
  const [vision1, setVision1] = useState('');
  const [vision2, setVision2] = useState('');
  const [vision3, setVision3] = useState('');
  const [visionImage, setVisionImage] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/about');
        if (response.ok) {
          const data = await response.json();
          setMission(data.mission);
          setOrder(data.order);
          setOrder1(data.order1);
          setOrder2(data.order2);
          setOrder3(data.order3);
          setVision(data.vision);
          setVision1(data.vision1);
          setVision2(data.vision2);
          setVision3(data.vision3);
          setMissionImage(data.missionImage);
          setVisionImage(data.visionImage);
          
        } else {
          console.error('Failed to fetch data.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);
  
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
        {mission}
          </p>
          <ul
            className="ul-check list-unstyled mb-5 primary"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <li>{order}</li>
            <li>
             {order1}
            </li>
            <li>{order2}</li>
          </ul>
          <p data-aos="fade-up" data-aos-delay={300}>
            <a href="#" className="btn btn-primary">
              Get Started
            </a> 
          </p>
        </div>
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={0}>
          <figure className="img-wrap-2">
            <img src={missionImage} alt="Mission Image" className="img-fluid" />
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
          <img src={visionImage} alt="Vision Image" className="img-fluid"/>
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
           {vision}
          </p>
          <ul
            className="ul-check list-unstyled mb-5 primary"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <li>${vision1}</li>
            <li>{vision2}</li>
            <li>
              {vision3}
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
  {/* /.untree_co-section */}
<Staffsection/> 
 <Aboutsection/>

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
              </div>x
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

export default About;