import { useState } from "react";
import Left from "./common/Left";
import Navbar from "./common/Navbar";

function Addteamform() {
    const [formData, setFormData] = useState({
        fullName: "",
        designation: "",
        experience: 0,
    });

    const [message, setMessage] = useState("");

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("../api/addTeamMember", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            setMessage(data.message);

            if (data.success) {
                console.log("Team member added successfully");
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

                                        <p>{message}</p>

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
