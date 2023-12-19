const Photo = require('../models/Photo'); 

exports.addPhotos = async (req, res) => {
  try {
    const files = req.files;

    if (!files || files.length === 0) {
      return res.status(400).json({ success: false, error: 'No files were uploaded.' });
    }

    const filenames = files.map(file => file.filename);

    const photos = filenames.map(filename => ({ filename }));

    await Photo.insertMany(photos);

    res.status(200).json({ success: true, message: 'Photos uploaded successfully' });
  } catch (error) {
    console.error('Error uploading photos:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

exports.getAllPhotos = async (req, res) => {
  try {
    const photos = await Photo.find();
    res.status(200).json(photos);
  } catch (error) {
    console.error('Error fetching photos:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deletePhoto = async (req, res) => {
  try {
    const photoId = req.params.id;
    const deletedPhoto = await Photo.findByIdAndDelete(photoId);

    if (!deletedPhoto) {
      return res.status(404).json({ success: false, message: 'Photo not found' });
    }

    res.json({ success: true, message: 'Photo deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.deleteAllPhotos = async (req, res) => {
  try {
    // Delete all photos
    const result = await Photo.deleteMany({});

    res.json({ success: true, message: 'All photos deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};