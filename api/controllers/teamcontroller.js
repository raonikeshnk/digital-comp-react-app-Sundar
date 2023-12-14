const Team= require('../models/team')


exports.addTeam = async (req, res) => {
    try {
      const { fullName, designation, experience } = req.body;
      const img = req.file ? req.file.path : '';
  
      const newTeamMember = new Team({
        fullName,
        designation,
        img,
        experience,
      });
  
      await newTeamMember.save();
  
      res.json({ success: true, message: "Team member added successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  };
  exports.getAllTeamMembers = async (req, res) => {
    try {
        const teamMembers = await Team.find({});
        res.json(teamMembers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
exports.updateTeamMember = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, designation, experience } = req.body;
    const img = req.file ? req.file.path : ''; // Update the image if provided

    const updatedTeamMember = await Team.findByIdAndUpdate(
      id,
      {
        fullName,
        designation,
        img,
        experience,
      },
      { new: true } // Return the updated document
    );

    res.json({ success: true, message: "Team member updated successfully", data: updatedTeamMember });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
