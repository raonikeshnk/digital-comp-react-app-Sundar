import React, { useEffect, useState } from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { Link } from 'react-router-dom';


function Courses() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);


  useEffect(() => {

    const fetchCourses = async () => {
      try {
        console.log('Fetching courses...');
        const response = await fetch('/api/courses');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        setCourses(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchCourses();
  }, []);


  useEffect(() => {
    console.log('All Courses in use Effect:', courses);
    // Perform additional logic if needed

  }, [courses]);

  console.log('Data after fetch function', courses)


  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    console.log(course);
  };

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
          {courses.length === 0 ? (
            <p>No courses available</p>
          ) : (
            <div className="row">
              {courses.map((course) => (
                
                  <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-4" key={course._id}>
                    <div className="custom-media" >
                      <Link to={`/course/${course._id}`} onClick={() => handleCourseClick(course)}>
                        <img src={`../uploads/${course.bannerImage}`} alt={course.bannerImage} className="img-fluid" />
                      </Link>
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
                        <h3>{course.name}</h3>
                        <p className="mb-4">
                          {course.description}
                        </p>
                        <div className="border-top d-flex justify-content-between pt-3 mt-3 align-items-center">
                          <div>
                            <span className="price"> {course.duration}</span>
                          </div>
                          <div>
                            <a href="#" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                
              ))}
            </div>
          )}
        </div>
      </div>{" "}
      {/* /.untree_co-section */}

      <Footer />

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