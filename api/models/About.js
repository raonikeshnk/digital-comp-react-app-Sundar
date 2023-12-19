const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
    mission: String,
    missionimg: String,
    vission: String,
    vissionimg: String
});

const About = mongoose.model('About', aboutSchema);

module.exports = About;
