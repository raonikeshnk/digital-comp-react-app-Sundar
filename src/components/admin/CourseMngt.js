    import { Link } from "react-router-dom";
    import Left from "./common/Left";
    import Navbar from "./common/Navbar";
    import { useEffect, useState } from "react";

    function CourseMngt() {
        // State variables for form fields
        const [courseName, setCourseName] = useState("");
  const [courseImg, setCourseImg] = useState(null); // Use null for file state
  const [courseDesc, setCourseDesc] = useState("");
  const [courseMDesc, setCourseMDesc] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [courseCategory, setCourseCategory] = useState("");
  const [courses, setCourses] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", courseName);
      formData.append("img", courseImg);
      formData.append("description", courseDesc);
      formData.append("mDesc", courseMDesc);
      formData.append("duration", courseDuration);
      formData.append("Category", courseCategory);

      const response = await fetch("/api/courses", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const newCourse = await response.json();
        setCourses([...courses, newCourse]);
        clearFormFields();
      } else {
        console.error("Failed to add course");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await fetch("api/courses");
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const clearFormFields = () => {
    setCourseName("");
    setCourseImg(null);
    setCourseDesc("");
    setCourseMDesc("");
    setCourseDuration("");
    setCourseCategory("");
  };

  useEffect(() => {
    fetch("/api/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCourseImg(file);
  };
        return (
            <>
                <Navbar />
                <section className="dash">
                    <div className="container">
                        <div className="row">
                            <Left />
                            <div className="col-md-8">
                                <h2> Course Management</h2>
                                <Link to='/addcourse'><button className="btn btn-info form-control"> Add New Course Here!!</button></Link>
                                <table className="table table-cover">
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Course Name</th>
                                            <th>Course Img</th>
                                            <th>Course Desc</th>
                                            <th>Course MDesc</th>
                                            <th>Course Duration</th>
                                            <th>Course Category</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {courses.map((course, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{course.name}</td>
                                                <td>
                                                    {course.img && (
                                                        <img
                                                            src={`/${course.img}`} // Adjust the URL based on your server
                                                            alt={course.name}
                                                            style={{ maxWidth: '100px' }} // Adjust the styling as needed
                                                        />
                                                    )}
                                                </td>
                                                <td>{course.description}</td>
                                                <td>{course.mDesc}</td>
                                                <td>{course.duration}</td>
                                                <td>{course.Category}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <h2>Add Course Here!!!</h2>
                                <form action="/api/courses"  onSubmit={handleSubmit} method="post" enctype="multipart/form-data">
                            
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
                                                <input
                                                    type="text"
                                                    value={courseCategory}
                                                    onChange={(e) => setCourseCategory(e.target.value)}
                                                    required
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-8">
                                                <button type="submit" className="btn btn-info form-control mt-3">
                                                    Add Course
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

    export default CourseMngt;
