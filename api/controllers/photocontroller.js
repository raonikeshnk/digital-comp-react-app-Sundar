const Photo = require('../models/photo');

exports.addPhoto = async (req, res) => {
  try {
    const { photos } = req.files;

    const photoObjects = photos.map((photo) => ({
      path: photo.path,
    }));

    await Photo.insertMany(photoObjects);

    res.json({ success: true, message: 'Photos added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
 

exports.getAllPhotos = async (req, res) => {
    try {
        const photos = await Photo.find({});
        res.json(photos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
