  import React, { useState, useEffect } from 'react';
  import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./common/Navbar";
import Left from "./common/Left";

function AboutMngt() {
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
  const [history, setHistory] = useState('');
  const [history1, setHistory1] = useState('');
  const [history2, setHistory2] = useState('');
  const [history3, setHistory3] = useState('');
  const [historyImage, setHistoryImage] = useState(null);
 
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
          setHistory(data.history);
          setHistory1(data.history1);
          setHistory2(data.history2);
          setHistory3(data.history3);
          setHistoryImage(data.historyimage);
         
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

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('mission', mission);
    formData.append('missionImage', missionImage);
    formData.append('order', order);
    formData.append('order1', order1);
    formData.append('order2', order2);
    formData.append('order3', order3);
    formData.append('vision', vision);
    formData.append('vision1', vision1);
    formData.append('vision2', vision2);
    formData.append('vision3', vision3);
    formData.append('visionImage', visionImage);
    formData.append('history', history);
    formData.append('history1', history1);
    formData.append('history2', history2);
    formData.append('history3', history3);
    formData.append('historyImage', historyImage);
   
    try {
      const response = await fetch('/api/updateabout', {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Data updated successfully:', data);
        toast.success('About Content Updated successfully');
        setEditing(false);
        setOrder(data.order);
        setOrder1(data.order1);
        setOrder2(data.order2);
        setOrder3(data.order3);
        setVision(data.vision);
        setVision1(data.vision1);
        setVision2(data.vision2);
        setVision3(data.vision3);
        setHistory(data.history);
        setHistory1(data.history1);
        setHistory2(data.history2);
        setHistory3(data.history3);
        
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
            <div className="col-md-9">
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
                    <label htmlFor="order" className="form-label">Order:</label>
                    <textarea id="order" className="form-control" value={order} onChange={(e) => setOrder(e.target.value)}></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="order1" className="form-label">Order 1:</label>
                    <textarea id="order1" className="form-control" value={order1} onChange={(e) => setOrder1(e.target.value)}></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="order2" className="form-label">Order 2:</label>
                    <textarea id="order2" className="form-control" value={order2} onChange={(e) => setOrder2(e.target.value)}></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="vision" className="form-label">Vision:</label>
                    <textarea id="vision" className="form-control" value={vision} onChange={(e) => setVision(e.target.value)}></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="vision1" className="form-label">Vision 1:</label>
                    <textarea id="vision1" className="form-control" value={vision1} onChange={(e) => setVision1(e.target.value)}></textarea>
                  </div><div className="mb-3">
                    <label htmlFor="vision2" className="form-label">Vision 2:</label>
                    <textarea id="vision2" className="form-control" value={vision2} onChange={(e) => setVision2(e.target.value)}></textarea>
                  </div><div className="mb-3">
                    <label htmlFor="vision3" className="form-label">Vision 3:</label>
                    <textarea id="vision3" className="form-control" value={vision3} onChange={(e) => setVision3(e.target.value)}></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="visionImage" className="form-label">Vision Image:</label>
                    <img src={(visionImage)} alt="Mission" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                    <input type="file" id="visionImage" className="form-control" onChange={(e) => handleFileChange(e, setVisionImage)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="historyImage" className="form-label">History Image:</label>
                    <img src={(historyImage)} alt="Mission" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                    <input type="file" id="historyImage" className="form-control" onChange={(e) => handleFileChange(e, setHistoryImage)} />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="history" className="form-label">History:</label>
                    <textarea id="history" className="form-control" value={history} onChange={(e) => setHistory(e.target.value)}></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="history1" className="form-label">History 1:</label>
                    <textarea id="history1" className="form-control" value={history1} onChange={(e) => setHistory1(e.target.value)}></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="history2" className="form-label">History 2:</label>
                    <textarea id="history2" className="form-control" value={history2} onChange={(e) => setHistory2(e.target.value)}></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="history3" className="form-label">History 3:</label>
                    <textarea id="history3" className="form-control" value={history3} onChange={(e) => setHistory3(e.target.value)}></textarea>
                  </div>
          

                  <button type="submit" className="btn btn-primary form-control">Update Data</button>
                </form>
              ) : (
                <div>
                  <table className="table table-hover table-responsive">
                    <thead>
                      <tr>
                        <th>Mission</th>
                        <th>Mission Image</th>
                        <th>Mission 1</th>
                        <th>Mission 2</th>
                        <th>Mission 3</th>
                        <th>Vision</th>
                        <th> Vision 1</th>
                        <th> Vision 2</th>
                        <th> Vision 3</th>
                        <th>Vision Image</th>
                        <th>History</th>
                        <th>History 1</th>
                        <th>History 2</th>
                        <th>History 3</th>
                        <th>History Image</th> {/* New header for historyimage */}
                       

                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><p>{mission}</p></td>
                        <td>{missionImage && <img src={missionImage} alt="Mission" style={{ maxWidth: '100px', maxHeight: '100px' }} />}</td>
                        <td><p>{order}</p></td>
                        <td><p>{order1}</p></td>
                        <td><p>{order2}</p></td>
                        <td><p>{vision}</p></td>
                        <td> <p>{vision1}</p></td>
                        <td> <p>{vision2}</p></td>
                        <td> <p> {vision3}</p></td>
                        <td>{visionImage && <img src={visionImage} alt="Vision" style={{ maxWidth: '100px', maxHeight: '100px' }} />}</td>
                        <td><p>{history}</p></td>
                        <td><p>{history1}</p></td>
                        <td><p>{history2}</p></td>
                        <td><p>{history3}</p></td>
                        <td>{historyImage && <img src={historyImage} alt="History" style={{ maxWidth: '100px', maxHeight: '100px' }} />}</td>
                        <td><button onClick={handleEdit} className="btn btn-primary">Edit</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <ToastContainer/>
    </>
  );
}

export default AboutMngt;
