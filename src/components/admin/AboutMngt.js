import React, { useState, useEffect } from 'react';
import Navbar from "./common/Navbar";
import Left from "./common/Left";

function AboutMngt() {
  const [editing, setEditing] = useState(false);
  const [mission, setMission] = useState('');
  const [missionImage, setMissionImage] = useState(null);
  const [vision, setVision] = useState('');
  const [visionImage, setVisionImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/about');
        if (response.ok) {
          const data = await response.json();
          setMission(data.mission);
          setVision(data.vision);
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
  }, [editing]);

  const handleFileChange = (e, setImage) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('mission', mission);
    formData.append('missionImage', missionImage);
    formData.append('vision', vision);
    formData.append('visionImage', visionImage);

    try {
      const response = await fetch('/api/updateabout', {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Data updated successfully:', data);
        setEditing(false);
        // Optionally, fetch data again after the update
        // fetchData();
      } else {
        console.error('Failed to update data.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Navbar />
      <section className="dash">
        <div className="container">
          <div className="row">
            <Left />
            <div className="col-md-8">
              <h2>About Management</h2>
              {editing ? (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="mission" className="form-label">Mission:</label>
                    <textarea id="mission" className="form-control" value={mission} onChange={(e) => setMission(e.target.value)}></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="missionImage" className="form-label">Mission Image:</label>
                    <img src={(missionImage)} alt="Mission" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                    <input type="file" id="missionImage" className="form-control" onChange={(e) => handleFileChange(e, setMissionImage)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="vision" className="form-label">Vision:</label>
                    <textarea id="vision" className="form-control" value={vision} onChange={(e) => setVision(e.target.value)}></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="visionImage" className="form-label">Vision Image:</label>
                    <img src={(visionImage)} alt="Mission" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                    <input type="file" id="visionImage" className="form-control" onChange={(e) => handleFileChange(e, setVisionImage)} />
                  </div>
                  <button type="submit" className="btn btn-primary form-control">Update Data</button>
                </form>
              ) : (
                <table className="table table-hover table-responsive">
                  <thead>
                    <tr>
                      <th>Mission</th>
                      <th>Mission Image</th>
                      <th>Vision</th>
                      <th>Vision Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><p>{mission}</p></td>
                      <td>{missionImage && <img src={(missionImage)} alt="Mission" style={{ maxWidth: '100px', maxHeight: '100px' }} />}</td>
                      <td><p>{vision}</p></td>
                      <td>{visionImage && <img src={(visionImage)} alt="Vision" style={{ maxWidth: '100px', maxHeight: '100px' }} />}</td>
                      <td><button onClick={() => setEditing(true)} className="btn btn-primary">Edit</button></td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMngt;
