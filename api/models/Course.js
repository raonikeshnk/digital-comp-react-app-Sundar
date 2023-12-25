const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: String,
    img: String,
    description: String, // Assuming you want a description field
    mDesc: String, // Assuming you want a detailed description field
    duration: String,
    Category:String
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
