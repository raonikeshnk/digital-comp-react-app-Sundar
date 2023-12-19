import React, { useState, useEffect } from 'react';
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

function Gallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await fetch('/api/getAllPhotos');
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
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

  <Navbar/>

  <div
    className="untree_co-hero overlay"
    style={{ backgroundImage: 'url("images/explore-gallery.jpg")' }}
  >
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-12">
          <div className="row justify-content-center ">
            <div className="col-lg-6 text-center ">
              <h1
                className="mb-4 mt-5 heading text-white"
                // data-aos="fade-up"
                data-aos-delay={100}
              >
                Gallery
              </h1>
              <div
                className="mb-5 mt-5 text-white desc mx-auto"
                // data-aos="fade-up"
                data-aos-delay={200}
              >
                <p>
                  Take a look at Digital Computer Technology's special moments
                  in our gallery. See pictures of learning, success, and fun
                  times. Click to see the best parts of our story!
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
    <div className="row">
          {photos.map((photo) => (
            <div key={photo._id} className="col-md-3 mb-4">
              <a
                href={`/uploads/${photo.filename}`}
                className="item-wrap fancybox"
                data-fancybox="gal"
              >
                <img
                  className="img-fluid"
                  style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                  src={`/uploads/${photo.filename}`}
                  alt={`Gallery ${photo._id}`}
                />
              </a>
            </div>
          ))}
        </div>

    </div>
  </div>
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

export default Gallery;