const router = require('express').Router();
const regc = require('../controllers/regcontroller');
const teamc = require('../controllers/teamcontroller');
const photoc = require('../controllers/photocontroller');
const aboutc = require('../controllers/aboutcontroller');
const queryc = require('../controllers/querycontroller');
const coursec = require('../controllers/coursecontroller')
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB limit per file
  },
});

router.post('/reg', regc.register);
router.post('/logincheck', regc.logincheck);
router.post('/addTeamMember', upload.single('img'), teamc.addTeam);
router.get('/getAllTeamMembers', teamc.getAllTeamMembers);
router.put('/updateTeamMember/:id', upload.single('img'), teamc.updateTeamMember);
router.get('/getTeamMember/:id', teamc.getTeamMember);
router.delete('/deleteTeamMember/:id', teamc.deleteTeamMember);
router.post('/addPhotos', upload.array('photos', 20), photoc.addPhotos);
router.get('/getAllPhotos', photoc.getAllPhotos);
router.delete('/deletePhoto/:id', photoc.deletePhoto);
router.delete('/deleteAllPhotos', photoc.deleteAllPhotos);
router.get('/getAllQueries', queryc.getAllQueries);
router.post('/submitContactForm', queryc.submitContactForm);
router.delete('/deleteQuery/:id', queryc.deleteQuery);
router.post('/replyToQuery', queryc.replyToQuery);


router.get('/about', aboutc.getAboutData);
router.put(
  '/updateabout',
  upload.fields([
    { name: 'missionImage', maxCount: 1 },
    { name: 'visionImage', maxCount: 1 },
    { name: 'historyImage', maxCount: 1 },
  ]),
  aboutc.updateAboutData
);

module.exports = router;
