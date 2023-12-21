
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import Left from './common/Left';
import Navbar from './common/Navbar';

function Addteamform() {
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        fullName: "",
        designation: "",
        img: null, 
        experience: 0,
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            img: e.target.files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDataWithFile = new FormData();
            formDataWithFile.append('fullName', formData.fullName);
            formDataWithFile.append('designation', formData.designation);
            formDataWithFile.append('img', formData.img); 
            formDataWithFile.append('experience', formData.experience);

            const response = await fetch("../api/addTeamMember", {
                method: "POST",
                body: formDataWithFile,
            });

            const data = await response.json();

            if (data.success) {
                console.log("Team member added successfully");
                navigate('/team');
            } else {
                console.error("Failed to add team member");
            }
        } catch (error) {
            console.error("Error:", error);
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
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8">
                                        <h2>Add New Team Member</h2>
                                        <form onSubmit={handleSubmit}>
                                            <label>Full Name:</label>
                                            <input
                                                type="text"
                                                className="form-control mb-3"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                            />
                                            <label>Designation:</label>
                                            <input
                                                type="text"
                                                className="form-control mb-3"
                                                name="designation"
                                                value={formData.designation}
                                                onChange={handleInputChange}
                                            />
                                            <label>Profile Picture (Image):</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                name="img"
                                                onChange={handleFileChange}
                                            />
                                            <label>Experience:</label>
                                            <input
                                                type="number"
                                                className="form-control mb-3"
                                                name="experience"
                                                value={formData.experience}
                                                onChange={handleInputChange}
                                            />
                                            <button type="submit" className="form-control btn btn-success mt-3">
                                                Add
                                            </button>
                                        </form>
                                    </div>
                                    <div className="col-md-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Addteamform;
