import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Left from './common/Left';
import Navbar from './common/Navbar';

function TeamUpdate() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [teamMember, setTeamMember] = useState({
    fullName: '',
    designation: '',
    experience: '',
    img: null,
  });
  const fetchTeamMemberData = useCallback(async () => {
    try {
      const response = await fetch(`../api/getTeamMember/${id}`);
      const data = await response.json();

      if (response.ok) {
        setTeamMember(data.teamMember);
      } else {
        console.error('Error fetching team member data:', data.message);
      }
    } catch (error) {
      console.error('Error fetching team member data:', error);
    }
  }, [id]);

  useEffect(() => {
    fetchTeamMemberData();
  }, [fetchTeamMemberData]);

  

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('fullName', teamMember.fullName);
      formData.append('designation', teamMember.designation);
      formData.append('experience', teamMember.experience);

      if (teamMember.img instanceof File) {
        formData.append('img', teamMember.img);
      }

      // formData.append('img', teamMember.img);
      console.log('FormData:', formData);

      const response = await fetch(`../api/updateTeamMember/${id}`, {
        method: 'PUT',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        console.log('Team member updated successfully');
        navigate('/team');
      } else {
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
              <form onSubmit={handleUpdate}>
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
                  <label htmlFor="img">Profile Image</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="img"
                    name="img"
                    onChange={handleFileChange}
                  />
                    <img
                      src={`../uploads/${teamMember.img}`}
                      alt={`Profile of ${teamMember.fullName}`}
                      style={{ width: '60px', height: '60px', borderRadius: '50%' }}
                    />
                  
                </div>
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
