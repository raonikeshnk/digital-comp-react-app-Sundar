import React, { useState } from 'react';
import Left from './common/Left';
import Navbar from './common/Navbar';

function GalleryMngt() {
    const [selectedImages, setSelectedImages] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);

        if (selectedImages.length + files.length > 5) {
            alert('You can upload up to 5 images.');
            return;
        }

        setSelectedImages([...selectedImages, ...files]);
        const previews = files.map((file) => URL.createObjectURL(file));
        setImagePreviews([...imagePreviews, ...previews]);
    };

    const handleImageRemove = (index) => {
        const updatedImages = [...selectedImages];
        const updatedPreviews = [...imagePreviews];
        updatedImages.splice(index, 1);
        updatedPreviews.splice(index, 1);

        setSelectedImages(updatedImages);
        setImagePreviews(updatedPreviews);
    };

    const handleUpload = async () => {
        try {
            const formData = new FormData();
            selectedImages.forEach((image) => {
                formData.append('photos', image);
            });

            const response = await fetch('http://localhost:3000/api/addPhoto', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (result.success) {
                // Clear the selected images and previews after successful upload
                setSelectedImages([]);
                setImagePreviews([]);
                alert('Photos added successfully!');
            } else {
                alert('Error uploading photos.');
            }
        } catch (error) {
            console.error(error);
            alert('Internal server error');
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
                            <h2>Photo Management</h2>
                            <form encType="multipart/form-data">
                                <label>Photos</label>
                                <input type="file" className="" onChange={handleImageChange} multiple />
                                {imagePreviews.map((preview, index) => (
                                    <div key={index} className="image-container">
                                        <img src={preview} alt={`Preview ${index + 1}`} />
                                        <span onClick={() => handleImageRemove(index)}>&times;</span>
                                    </div>
                                ))}
                                <button type="button" className="btn btn-success mt-3" onClick={handleUpload}>
                                    Add
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default GalleryMngt;
