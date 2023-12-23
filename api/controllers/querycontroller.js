  const Query=  require('../models/Query')
 exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Create a new Query instance
    const newQuery = new Query({
      name,
      email,
      subject,
      message,
    });

    // Save the new query to the database
    await newQuery.save();

    res.status(201).json({ success: true, message: 'Query submitted successfully' });
  } catch (error) {
    console.error('Error submitting query:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

   exports. getAllQueries = async (req, res) => {
  try {
    // Fetch all queries from the database
    const queries = await Query.find();

    res.status(200).json({ success: true, queries });
  } catch (error) {
    console.error('Error fetching queries:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

exports.deleteQuery = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the query by ID and delete it
    const deletedQuery = await Query.findByIdAndDelete(id);

    if (!deletedQuery) {
      return res.status(404).json({ success: false, message: 'Query not found' });
    }

    res.status(200).json({ success: true, message: 'Query deleted successfully', deletedQuery });
  } catch (error) {
    console.error('Error deleting query:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};


