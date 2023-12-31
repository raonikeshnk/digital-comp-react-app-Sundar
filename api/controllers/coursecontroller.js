// controllers/coursecontroller.js
const Course = require('../models/Course');

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.addCourse = async (req, res) => {
  try {
    const { name, description, mDesc, duration, category, additionalCategories } = req.body;

    const newCourse = new Course({
      name,
      description,
      mDesc,
      duration,
      category,
      additionalCategories, // Add this line
      bannerImage: req.file.filename,
    });

    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (error) {
    console.error('Error adding course:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const { name, description, mDesc, duration, category, additionalCategories } = req.body;
    const bannerImage = req.file ? req.file.filename : undefined;

    const updatedCourse = await Course.findByIdAndUpdate(
      courseId,
      {
        name,
        description,
        mDesc,
        duration,
        category,
        additionalCategories, // Add this line
        bannerImage,
      },
      { new: true }
    );

    res.json(updatedCourse);
  } catch (error) {
    console.error('Error updating course:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    await Course.findByIdAndDelete(courseId);
    res.json({ message: 'Course deleted successfully' });
  } catch (error) {
    console.error('Error deleting course:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const course = await Course.findById(courseId);
    console.log('Course id in controller :', req.params)

    console.log('Course object in controller :', course)
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.json(course);
  } catch (error) {
    console.error('Error fetching course by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
