const nodemailer = require('nodemailer');
const Query = require('../models/Query');

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const newQuery = new Query({
      name,
      email,
      subject,
      message,
    });

    await newQuery.save();

    res.status(201).json({ success: true, message: 'Query submitted successfully' });
  } catch (error) {
    console.error('Error submitting query:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

exports.getAllQueries = async (req, res) => {
  try {
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


exports.replyToQuery = async (req, res) => {
  try {
    const { id, email, subject, body } = req.body;

    if (!email) {
      console.error('Recipient email is undefined');
      return res.status(400).json({ success: false, error: 'Recipient email is undefined' });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: 'lkyadav2311@gmail.com',
        pass: 'ybauqrdvjtuubnqv'
      }
    });

    const emailOptions = {
      from: "lkyadav2311@gmail.com",
      to: email,
      subject: subject || 'Re: Query Reply',
      text: body,
    };

    transporter.sendMail(emailOptions, async (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ success: false, error: 'Error sending email' });
      }

      console.log('Email sent:', info.response);

      try {
        await Query.findByIdAndUpdate(id, { status: 'Replied' });
        console.log('Query status updated successfully');
        res.json({ success: true, message: 'Email reply sent successfully' });
      } catch (updateError) {
        console.error('Error updating query status:', updateError);
        res.status(500).json({ success: false, error: 'Error updating query status' });
      }
    });
  } catch (error) {
    console.error('Error replying to query:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};
