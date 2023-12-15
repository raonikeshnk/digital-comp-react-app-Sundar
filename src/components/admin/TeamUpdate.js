import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Left from "./common/Left";
import Navbar from "./common/Navbar";

function TeamUpdate() {
  const { id } = useParams();
  const [teamMember, setTeamMember] = useState({
    fullName: '',
    designation: '',
    experience: '',
  });

  useEffect(() => {
    fetchTeamMemberData();
  }, [id]);

  const fetchTeamMemberData = async () => {
    try {
      const response = await fetch(`../api/getTeamMember/${id}`);
      const data = await response.json();

      if (data.success) {
        // Update state with fetched data
        setTeamMember({
          fullName: data.teamMember.fullName,
          designation: data.teamMember.designation,
          experience: data.teamMember.experience,
        });
      } else {
        console.error('Error fetching team member:', data.message);
      }
    } catch (error) {
      console.error('Error fetching team member:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`../api/updateTeamMember/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: teamMember.fullName,
          designation: teamMember.designation,
          experience: teamMember.experience,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Update successful, you may want to redirect or show a success message
        console.log('Team member updated successfully');
      } else {
        // Handle the case where the update was not successful
        console.error('Error updating team member:', data.message);
      }
    } catch (error) {
      console.error('Error updating team member:', error);
    }
  };

  const handleChange = (e) => {
    setTeamMember({
      ...teamMember,
      [e.target.name]: e.target.value,
    });
  };
  const handleFileChange = (e) => {
    setTeamMember({
      ...teamMember,
      img: e.target.files[0],
    });
  };

  return (
    <>
      <Navbar />
      <section className="dash">
        <div className="container">
          <div className="row">
            <Left />
            <div className="col-md-8">
              <h2>Update Team Member</h2>
              {/* Use a form to enable submitting on Enter key */}
              <form onSubmit={handleUpdate} encType='multipart/form-data'>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    value={teamMember.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="designation">Designation</label>
                  <input
                    type="text"
                    className="form-control"
                    id="designation"
                    name="designation"
                    value={teamMember.designation}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="experience">Experience</label>
                  <input
                    type="number"
                    className="form-control"
                    id="experience"
                    name="experience"
                    value={teamMember.experience}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="img">Profile Image:</label>
                  <input
                    type="file"
                    className="form-control"
                    id="img"
                    name="img"
                    onChange={handleFileChange}
                  />
                </div>
                {/* Use type="submit" to allow submitting the form */}
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamUpdate;
