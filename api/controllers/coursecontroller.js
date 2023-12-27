const Course = require('../models/Course');

// Controller functions
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
    const { name, img, description, mDesc, duration, Category } = req.body;

    const newCourse = new Course({
      name,
      img: req.file.filename,
      description,
      mDesc,
      duration,
      Category,
    });

    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (error) {
    console.error('Error adding course:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Add other controller functions like updateCourse and deleteCourse as needed


