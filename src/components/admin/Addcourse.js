import React, { useState } from "react";
import Left from "./common/Left";
import Navbar from "./common/Navbar";

function Addcourse() {
    // State variables for form fields
    const [courseName, setCourseName] = useState("");
    const [courseImg, setCourseImg] = useState("");
    const [courseDesc, setCourseDesc] = useState("");
    const [courseMDesc, setCourseMDesc] = useState("");
    const [courseDuration, setCourseDuration] = useState("");
    const [courseCategory, setCourseCategory] = useState("");


    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // You can perform actions with the form data here
        // For now, let's just log it to the console
        console.log({
            courseName,
            courseImg,
            courseDesc,
            courseMDesc,
            courseDuration,
            courseCategory,
        });

        // Clear the form fields after submission
        setCourseName("");
        setCourseImg("");
        setCourseDesc("");
        setCourseMDesc("");
        setCourseDuration("");
        setCourseCategory("");
    };

    return (
        <>
            <Navbar />
            <section className="dash">
                <div className="container">
                    <div className="row">
                        <Left />
                        <div className="col-md-8">
                            <h2>Add Course Here!!!</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <label>Course Name</label>
                                            <input
                                                type="text"
                                                value={courseName}
                                                onChange={(e) => setCourseName(e.target.value)}
                                                required
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-8">
                                            <label>Course Img</label>
                                            <input
                                                type="file"
                                                value={courseImg}
                                                onChange={(e) => setCourseImg(e.target.value)}
                                                required
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-8">
                                            <label>Course Desc</label>
                                            <input
                                                type="text"
                                                value={courseDesc}
                                                onChange={(e) => setCourseDesc(e.target.value)}
                                                required
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-8">
                                            <label>Course MDesc</label>
                                            <input
                                                type="text"
                                                value={courseMDesc}
                                                onChange={(e) => setCourseMDesc(e.target.value)}
                                                required
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-8">
                                            <label>Course Duration</label>
                                            <input
                                                type="text"
                                                value={courseDuration}
                                                onChange={(e) => setCourseDuration(e.target.value)}
                                                required
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-8">
                                            <label>Course Category</label>
                                            <select
                                                value={courseCategory}
                                                onChange={(e) => setCourseCategory(e.target.value)}
                                                required
                                                className="form-control"
                                            >
                                                <option value="" disabled>Select a category...</option>
                                                <option value="Programming">Programming</option>
                                                <option value="Design">Design</option>
                                                <option value="Marketing">Marketing</option>
                                                {/* Add more categories as needed */}
                                            </select>
                                        </div>
                                    </div>


                                    <div className="row mt-3">
                                        <div className="col-md-8">
                                            <button
                                                type="submit"
                                                className="btn btn-success btn-block"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Addcourse;
