import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

function Course() {
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
            <Navbar />
            <div
                className="untree_co-hero overlay"
                style={{ backgroundImage: 'url("images/explore-1.png")' }}
            >
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12">
                            <div className="row justify-content-center mt-5 ">
                                <div className="col-lg-8 text-center ">
                                    <h1
                                        className=" mt-5 mb-5 heading text-white"
                                        data-aos="fade-up"
                                        data-aos-delay={100}
                                    >
                                        Full Stack Web Development
                                    </h1>
                                    <div className="row justify-content-between rounded bg-warning p-2 ">
                                        <div className="col-lg-4 p-4  bg-white shadow-lg gap-2">
                                            <h2 className="line-bottom mb-4" data-aos="fade-up" data-aos-delay={0}>
                                                Course Duration:
                                            </h2>
                                            <h2><b>6 Months</b></h2>
                                        </div>
                                        <div className="col-lg-8 bg-dark text-white  p-4  shadow-lg" data-aos="fade-up" data-aos-delay={400}>
                                            <h3 className=" mb-4" data-aos="fade-up" data-aos-delay={0}>
                                                Advantage of Course
                                            </h3>
                                            <div className='row'>
                                                <div className='col-4 text-center border border-top-0  border-light  '>
                                                    <h4><b>₹ 3,00,000+</b></h4>
                                                    <p>Minimum LPA in India</p>
                                                </div>
                                                <div className='col-4 text-center border border-top-0 border-start-0 border-light  '>
                                                    <h4><b>$ 50,000+</b></h4>
                                                    <p>Minimum LPA in USA</p>
                                                </div>
                                                <div className='col-4 text-center border border-top-0 border-start-0 border-light  '>
                                                    <h4><b>10,00,000+</b></h4>
                                                    <p>Job Vacancies across the world</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>





            <div className="untree_co-section bg-light">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <h2 className="line-bottom mb-4" data-aos="fade-up" data-aos-delay={0}>
                                Why Choose MERN Stack Development Training Program
                            </h2>
                            <p data-aos="fade-up" data-aos-delay={100}>
                                With Full Stack Development training, your value as a developer in the tech world grows manifold. With your competency in handling complete web development process in any organization, you become an inseparable asset to recruiters. There is only one language you need to learn to be able to work on these stacks and that is JAVASCRIPT. After having completed this training, you will be able to handle front end development, back end development, as well as everything associated with database aspects. The development process can be sped up with accurate skills.
                            </p>
                            <a
                                href="tel:+919649911993"
                                className="px-5 py-2 btn btn-secondary btn-md "
                            >
                                Enroll Now
                            </a>


                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={400}>
                            <div className="bg-1" />
                            <img
                                src="images/about-us-video.png"
                                alt="Image"
                                className="img-fluid rounded"
                            />
                        </div>
                    </div>
                </div>
            </div>


            <div className="untree_co-section">
                <div className="container">
                    <h2 className="section-heading text-center line-bottom mb-4" data-aos="fade-up" data-aos-delay={0}>
                        Course Syllabus
                    </h2>
                    <p className="text-center">Explore the topics covered in our MERN Stack Web Development course</p>
                    <div className="row justify-content-center bg-success border">
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <h2>Module 1: Introduction to Web Development</h2>
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <ul>
                                            <li>Fundamentals of web development</li>
                                            <li>Importance in the digital era</li>
                                            <li>Overview of MERN Stack</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        <h2>Module 2: Frontend Development with React.js</h2>
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <ul>
                                            <li>React.js basics and concepts</li>
                                            <li>Components and props</li>
                                            <li>State management and hooks</li>
                                            <li>React Router for navigation</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        <h2>Module 3: Backend Development with Node.js and Express.js</h2>
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <ul>
                                            <li>Node.js and Express.js fundamentals</li>
                                            <li>Creating RESTful APIs</li>
                                            <li>Middleware and routing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        <h2>Module 4: Database Management with MongoDB</h2>
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <ul>
                                            <li>MongoDB basics and data modeling</li>
                                            <li>CRUD operations with MongoDB</li>
                                            <li>Connecting MongoDB with Node.js</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                        <h2>Module 5: Full Stack Project</h2>
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <ul>
                                            <li>Building a complete MERN stack application</li>
                                            <li>Integration of frontend and backend</li>
                                            <li>Deploying the application</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="untree_co-section bg-light">
                <div className="container">
                    <h2 className="section-heading text-center line-bottom mb-4" data-aos="fade-up" data-aos-delay={0}>
                        Skills Covered
                    </h2>
                    <p className="text-center">Enhance your skills with the following after completing this course</p>
                    <div class="hstack gap-4">
                        <div class="px-4 py-3 bg-dark text-light text-uppercase">First item</div>
                        <div class="px-4 py-3 bg-dark text-light text-uppercase">First item</div>
                        <div class="px-4 py-3 bg-dark text-light text-uppercase">First item</div>
                        <div class="px-4 py-3 bg-dark text-light text-uppercase">First item</div>
                        <div class="px-4 py-3 bg-dark text-light text-uppercase">First item</div>



                    </div>
                </div>
            </div>

            <div className="untree_co-section">
                <div className="container">
                    <h2 className="section-heading text-center line-bottom mb-4" data-aos="fade-up" data-aos-delay={0}>
                        Related Course
                    </h2>
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
                </div>
            </div>


            <Footer />
        </>
    );
}

export default Course;
