// aboutcontroller.js (Controller)

const About = require('../models/About');

exports.getAboutData = async (req, res) => {
    try {
      const aboutData = await About.findOne();
      res.json(aboutData);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

exports.updateAboutData = async (req, res) => {
    const newData = req.body;
  
    try {
      const existingAboutData = await About.findOne();
      if (!existingAboutData) {
        // If there is no existing data, create a new document
        const newAboutData = new About(newData);
        await newAboutData.save();
      } else {
        // Update the existing document
        existingAboutData.mission = newData.mission;
        existingAboutData.vision = newData.vision;
  
        // Handle file updates
        if (req.files && req.files.missionImage) {
          existingAboutData.missionImage = req.files.missionImage[0].filename;
        }
  
        if (req.files && req.files.visionImage) {
          existingAboutData.visionImage = req.files.visionImage[0].filename;
        }
  
        await existingAboutData.save();
      }
  
      res.json({ message: 'Data updated successfully' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
