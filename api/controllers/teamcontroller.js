const Team= require('../models/team')


exports.addTeam = async (req, res) => {
    try {
      const { fullName, designation, experience } = req.body;
  
      const newTeamMember = new Team({
        fullName,
        designation,
        experience,
      });
  
      await newTeamMember.save();
  
      res.json({ success: true, message: "Team member added successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  };