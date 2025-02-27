import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Left from './common/Left';
import Navbar from './common/Navbar';

function Team() {
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
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`../api/deleteTeamMember/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        console.log('Team member deleted successfully');
        // Reload the team data after deletion
        fetchTeamData();
      } else {
        console.error('Error deleting team member:', data.message);
      }
    } catch (error) {
      console.error('Error deleting team member:', error);
    }
  };


  return (
    <>
      <Navbar />
      <section className="dash">
        <div className="container">
          <div className="row">
            <Left />
            <div className="col-md-9">
              <h2>Team Management</h2>
              <Link to="/addteam">
                <button className="form-control btn btn-success">
                  Add New Team Member
                </button>
              </Link>

              {/* Display the team data in a table */}
              <table className="table table-striped table-bordered table-hover mt-3">
                <thead className="thead-dark">
                  <tr>
                    <th>S. No.</th>
                    <th>Name</th>
                    <th>Profile</th>
                    <th>Designation</th>
                    <th>Experience</th>
                    <th> Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {teamData.map((teamMember, index) => (
                    <tr key={teamMember._id}>
                      <td>{index + 1}</td>
                      <td>{teamMember.fullName}</td>
                      <td>
                        {teamMember.img && (
                          <img
                            src={`uploads/${teamMember.img}`}
                            alt={`Profile of ${teamMember.fullName}`}
                            style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                          />
                        )}
                      </td>
                      <td>{teamMember.designation}</td>
                      <td>{teamMember.experience} Years</td>
                      <td><Link to={`/teamupdate/${teamMember._id}`}>
                        <button className='btn btn-dark'>Update</button>
                      </Link>
                      </td>
                      <td>
                        <button
                          className='btn btn-danger'
                          onClick={() => handleDelete(teamMember._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
