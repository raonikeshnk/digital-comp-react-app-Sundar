const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: String,
  description: String,
  mDesc: String,
  duration: String,
  category: String,
  bannerImage: String,
  additionalCategories: { type: [String], default: [] }, // Add this line
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
