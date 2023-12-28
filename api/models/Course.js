
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: String,
  description: String,
  mDesc: String,
  duration: String,
  category: String,
  bannerImage: String,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
