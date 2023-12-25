import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Left from "./common/Left";
import Navbar from "./common/Navbar";

function GalleryMngt() {
  const [photos, setPhotos] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  useEffect(() => {
    // Fetch photos when the component mounts
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

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  const handleUpload = async () => {
    if (!selectedFiles || selectedFiles.length === 0) {
      console.error('Please select one or more files to upload');
      return;
    }

    const formData = new FormData();

    // Append each selected file to the FormData
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('photos', selectedFiles[i]);
    }

    try {
      const response = await fetch('../api/addPhotos', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        console.log('Photos uploaded successfully');
        // Reload the gallery after upload
        fetchPhotos();
        toast.success('photos successfully upload');

      } else {
        console.error('Error uploading photos:', data.error);
      }
    } catch (error) {
      console.error('Error uploading photos:', error);
    }
  };


  const handleDelete = async (photoId) => {
    try {
      const response = await fetch(`/api/deletePhoto/${photoId}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        console.log('Photo deleted successfully');
        // Reload the gallery after delete
        fetchPhotos();
      } else {
        console.error('Error deleting photo:', data.error);
      }
    } catch (error) {
      console.error('Error deleting photo:', error);
    }
  };
  const handleDeleteAll = async () => {
    // Display a confirmation prompt
    const shouldDeleteAll = window.confirm(
      'Are you sure you want to delete all photos?'
    );

    if (!shouldDeleteAll) {
      return;
    }

    try {
      const response = await fetch(`../api/deleteAllPhotos`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        console.log('All photos deleted successfully');
        // Reload the gallery after deletion
        fetchPhotos();
      } else {
        console.error('Error deleting all photos:', data.error);
      }
    } catch (error) {
      console.error('Error deleting all photos:', error);
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
              <div>
                <h2>Gallery</h2>

                {/* Image Upload Form */}
                <div className="upload-form row">

                  <input
                    type="file"
                    accept="image/*"
                    className="p-3 col-6"
                    multiple
                    onChange={handleFileChange}
                  />
                  <button
                    className=" btn-success px-5 py-3 col-6"
                    onClick={handleUpload}
                  >
                    Upload
                  </button>
                </div>
                <button
                  className="btn btn-danger form-control my-3"
                  onClick={handleDeleteAll}
                >
                  Delete All Photos
                </button>

                {/* Display Gallery */}
                <div className="gallery-grid">
                  {photos.map((photo) => (
                    <div key={photo._id} className="gallery-item">
                      {photo.filename ? (
                        <>
                          <img
                            src={`/uploads/${photo.filename}`}
                            alt={`Gallery ${photo._id}`}
                            className="img-fluid"
                            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                          />
                          <div className="delete-button-container">
                            <button
                              className="btn btn-danger delete-button p-1"
                              onClick={() => handleDelete(photo._id)}
                            >
                              X
                            </button>
                          </div>
                        </>
                      ) : (
                        <p>Image not found</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer/>
    </>
  );
}

export default GalleryMngt;
