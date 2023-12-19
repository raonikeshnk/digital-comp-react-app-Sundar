const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
    mission: String,
    missionImage: String,
    vision: String,
    visionImage: String
});

const About = mongoose.model('About', aboutSchema);

module.exports = About;
