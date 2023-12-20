// controllers/aboutController.js
const About = require('../models/About');

const getAboutData = async (req, res) => {
  try {
    const aboutData = await About.findOne();
    res.json(aboutData);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateAboutData = async (req, res) => {
  const { mission, missionImage, order, order1, order2, vision, vision1, vision2, vision3, visionImage, history,historyimage ,history1,history2,history3 } = req.body;

  try {
    const aboutData = await About.findOneAndUpdate(
      {},
      { mission, missionImage, order, order1, order2, vision, vision1, vision2, vision3, visionImage, history,historyimage,history1,history2,history3 },
      { new: true, upsert: true }
    );

    res.json(aboutData);
  } catch (error) {
    console.error('Error updating data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getAboutData, updateAboutData };