import React, { useState, useEffect } from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

function Staff() {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API when the component mounts
    fetchTeamData();
  }, []);

  const fetchTeamData = async () => {
    try {
      // Fetch data from your backend API
      const response = await fetch('../api/getAllTeamMembers');
      const data = await response.json();

      // Update the state with the fetched data
      setTeamData(data);
    } catch (error) {
      console.error('Error fetching team data:', error);
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
                Our Staff
              </h1>
              <div
                className="mt-5 text-white desc mx-auto"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <p>
                  Meet the brilliant minds behind Digital Computer Technology.
                  Learn about our dedicated team, their expertise, and passion
                  for education and technology. Get to know the faces shaping
                  your learning experience.
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
      {teamData.map((teamMember) => (
        <div
          key={teamMember._id}
          className="col-12 col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-4"
          data-aos="fade-up"
          data-aos-delay={0}
        >
          <div className="staff text-center">
            <div className="mb-4">
            <img src = {`../uploads/${teamMember.img}`} alt={teamMember.img} className="img-fluid" width={`150px`} height={`150px`} />
            </div>
            <div className="staff-body">
              <h3 className="staff-name">{teamMember.fullName}</h3>
              <span className="d-block position ">{teamMember.designation}</span>
              <span className="d-block position mb-4">{teamMember.experience} Year</span>
            </div>
          </div>
        </div>
      ))}
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

export default Staff;