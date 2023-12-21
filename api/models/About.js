// models/About.js
const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  mission: String,
  missionImage: String,
  order: String,
  order1: String,
  order2: String,
  vision: String,
  vision1: String,
  vision2: String,
  vision3: String,
  visionImage: String,
  history: String ,  // Change here to use an array of strings for history entries
  history1: String,  // New field
  history2: String,  // New field
  history3: String,  // New field
  historyImage: String,
});

const About = mongoose.model('About', aboutSchema);

module.exports = About;
