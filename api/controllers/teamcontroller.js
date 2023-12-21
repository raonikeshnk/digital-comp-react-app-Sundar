const Team= require('../models/team')


exports.addTeam = async (req, res) => {
    try {
      const { fullName, designation, experience } = req.body;
      const img = req.file ? req.file.filename : undefined;
      console.log(req.file)
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
    const { fullName, designation, experience } = req.body;
    const img = req.file ? req.file.filename : undefined; // Get the filename if an image is uploaded

    // Update the team member
    const updatedTeamMember = await Team.findByIdAndUpdate(
      req.params.id,
      { fullName, designation, experience, img },
      { new: true } // Return the updated document
    );

    if (!updatedTeamMember) {
      return res.status(404).json({ success: false, message: 'Team member not found' });
    }

    res.json({ success: true, message: 'Team member updated successfully', updatedTeamMember });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.getTeamMember = async (req, res) => {
  try {
    const teamMember = await Team.findById(req.params.id);

    if (!teamMember) {
      return res.status(404).json({ success: false, message: 'Team member not found' });
    }

    res.json({ success: true, teamMember });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
// Delete a team member
exports.deleteTeamMember = async (req, res) => {
  try {
    const teamMember = await Team.findByIdAndDelete(req.params.id);

    if (!teamMember) {
      return res.status(404).json({ success: false, message: 'Team member not found' });
    }

    res.json({ success: true, message: 'Team member deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
