import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Left from './common/Left';
import Navbar from './common/Navbar';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function CourseMngt() {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseMoreDetails, setCourseMoreDetails] = useState('');
  const [courseDuration, setCourseDuration] = useState('');
  const [courseCategory, setCourseCategory] = useState('');
  const [bannerImage, setBannerImage] = useState(null);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showTable, setShowTable] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]); // Explicit declaration
  const [courseselectedCategories, coursesetSelectedCategories] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await fetch('/api/courses');
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', courseName);
      formData.append('description', courseDescription);
      formData.append('mDesc', courseMoreDetails);
      formData.append('duration', courseDuration);
      formData.append('category', courseCategory);
      formData.append('bannerImage', bannerImage);
      formData.append('additionalCategories', selectedCategories);

      const url = selectedCourseId ? `/api/courses/${selectedCourseId}` : '/api/courses';
      const method = selectedCourseId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        body: formData,
      });

      if (response.ok) {
        const updatedCourses = await response.json();
        setCourses(updatedCourses);
        clearFormFields();
        setShowForm(false);
        setShowTable(true);
        toast.success('Course has been added successfully');
      } else {
        console.error('Failed to add/update course');
        toast.error('Failed to add/update course');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error adding/updating course');
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
    setShowTable(!showTable);
    clearFormFields();
  };

  const handleUpdateClick = async (courseId) => {
    console.log('Course ID:', courseId); // Add this line
    try {
      const response = await fetch(`/api/courses/${courseId}`);

      if (response.ok) {
        const selectedCourse = await response.json();

        setCourseName(selectedCourse.name);
        setCourseDescription(selectedCourse.description);
        setCourseMoreDetails(selectedCourse.mDesc);
        setCourseDuration(selectedCourse.duration);
        setCourseCategory(selectedCourse.category);
        coursesetSelectedCategories(selectedCourse.additionalCategories)
        setSelectedCourseId(selectedCourse._id);

        setShowForm(true);
        setShowTable(false);

        toast.success('Course details loaded for update');
      } else {
        console.error(`Failed to fetch course details for update. Status: ${response.status}`);
        toast.error('Failed to fetch course details for update. Please try again.');
      }
    } catch (error) {
      console.error('Error updating course:', error);
      toast.error('Error updating course. Please try again.');
    }
  };

  const handleDeleteClick = async (courseId) => {
    try {
      confirmAlert({
        title: 'Confirm Deletion',
        message: 'Are you sure you want to delete this course?',
        buttons: [
          {
            label: 'Yes',
            onClick: async () => {
              const response = await fetch(`/api/courses/${courseId}`, {
                method: 'DELETE',
              });

              if (response.ok) {
                const updatedCourses = courses.filter((course) => course._id !== courseId);
                setCourses(updatedCourses);
                clearFormFields();
              } else {
                console.error('Failed to delete course');
              }
            },
          },
          {
            label: 'No',
            onClick: () => {
              // Do nothing if the user clicks "No"
            },
          },
        ],
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter((c) => c !== category);
      } else {
        return [...prevCategories, category];
      }
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setBannerImage(file);
  };

  const clearFormFields = () => {
    setCourseName('');
    setCourseDescription('');
    setCourseMoreDetails('');
    setCourseDuration('');
    setCourseCategory('');
    setBannerImage(null);
    setSelectedCourseId(null);
  };

  useEffect(() => {
    fetchCourses();
  }, [showForm]);



  return (
    <>
      <Navbar />
      <section className="dash">
        <div className="container">
          <div className="row">
            <Left />
            <div className="col-md-8">
              <h1 className='text-center'>Course Management</h1>
              <button onClick={toggleForm} className="btn btn-primary mb-3 form-control" >
                Add Course
              </button>
              {showForm && (
                <form onSubmit={handleSubmit} encType="multipart/form-data">

                  <div className="mb-3">
                    <label className="form-label">Course Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={courseName}
                      onChange={(e) => setCourseName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Course Description:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={courseDescription}
                      onChange={(e) => setCourseDescription(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Course More Details:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={courseMoreDetails}
                      onChange={(e) => setCourseMoreDetails(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Course Duration:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={courseDuration}
                      onChange={(e) => setCourseDuration(e.target.value)}
                      required
                    />
                  </div>


                  <div className="mb-3">
                    <label className="form-label">Course Category:</label>
                    <select
                      className="form-select form-control"
                      value={courseCategory}
                      onChange={(e) => setCourseCategory(e.target.value)}
                      required
                    >
                      <option value="" disabled>Select a category...</option>
                      <option value="Programming">Programming</option>
                      <option value="Designing">Designing</option>
                      <option value="Basic Computer">Basic Computer</option>
                      {/* Add more categories as needed */}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Course Banner Image:</label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={handleFileChange}
                      accept="image/*"
                      required={!selectedCourseId} // Required for new course, optional for update
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Additional Categories:</label>
                    <div className="d-flex flex-wrap">
                      <div className="me-3 mb-2">
                        <label className="mb-0">
                          <input
                            className='me-2'
                            type="checkbox"
                            value="box"
                            checked={selectedCategories.includes("box")}
                            onChange={handleCategoryChange}
                          />
                          Box
                        </label>
                      </div>
                      <div className="me-3 mb-2">
                        <label className="mb-0">
                          <input
                            className='me-2'
                            type="checkbox"
                            value="webdevelopment"
                            checked={selectedCategories.includes("webdevelopment")}
                            onChange={handleCategoryChange}
                          />
                          Web Development
                        </label>
                      </div>
                      <div className="mb-2">
                        <label className="mb-0">
                          <input
                            className='me-2'
                            type="checkbox"
                            value="marketing"
                            checked={selectedCategories.includes("marketing")}
                            onChange={handleCategoryChange}
                          />
                          Marketing
                        </label>
                      </div>
                    </div>
                  </div>


                  <button type="submit" className="btn btn-success form-control">
                    {selectedCourseId ? 'Update Course' : 'Add Course'}
                  </button>
                </form>
              )}
              {showTable && (

                <table className="table mt-4">
                  <thead>
                    <tr>
                      <th>Course Name</th>
                      <th>Course Baner Image</th>
                      <th>Course Description</th>
                      <th>Course More Details</th>
                      <th>Course Duration</th>
                      <th>Course Category</th>
                      <th>Additional<br></br> Categories</th> {/* Add this line */}
                      <th>Action 1</th>
                      <th>Action 2</th>
                      <th> Action 3</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(courses) && courses.length > 0 ? (
                      courses.map((course) => (
                        <tr key={course._id} style={{ fontSize: '13px' }}>
                          <td>{course.name}</td>
                          <td>
                            {course.bannerImage && (
                              <img
                                src={`uploads/${course.bannerImage}`} // Update the path accordingly
                                alt="Banner"
                                style={{ maxWidth: '100px', maxHeight: '100px' }}
                              />
                            )}
                          </td>
                          <td>{course.description}</td>
                          <td>{course.mDesc}</td>
                          <td>{course.duration}</td>
                          <td>{course.category}</td>
                          <td>
                            {Array.isArray(course.additionalCategories) && course.additionalCategories.length > 0
                              ? course.additionalCategories.join(', ')
                              : 'No additional categories'}
                          </td> {/* Display additional categories */}
                          <td>
                            <button
                              onClick={() => handleUpdateClick(course._id)}
                              className="btn btn-warning btn-sm"
                            >
                              Update
                            </button>
                          </td>
                          <td>
                            <button
                              onClick={() => handleDeleteClick(course._id)}
                              className="btn btn-danger btn-sm ms-2"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="8">
                          <h3 className='text-center'>No course found</h3>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>


              )}
            </div>
          </div>
        </div>
      </section>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />

    </>
  );
}

export default CourseMngt;








