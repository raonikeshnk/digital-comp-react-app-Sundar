const router = require('express').Router()
const regc = require('../controllers/regcontroller')
const teamc = require('../controllers/teamcontroller')
const photoc = require('../controllers/photocontroller')
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
    storage: storage, limits: {
        fileSize: 5 * 1024 * 1024, // 5 MB limit per file
    },
});


router.post('/reg', regc.register)
router.post('/logincheck', regc.logincheck)
router.post('/addTeamMember', upload.single('img'), teamc.addTeam)
router.get('/getAllTeamMembers', teamc.getAllTeamMembers);
router.put('/updateTeamMember/:id', upload.single('img'), teamc.updateTeamMember);
router.get('/getTeamMember/:id', teamc.getTeamMember);
router.delete('/deleteTeamMember/:id', teamc.deleteTeamMember);
router.post('/addPhotos', upload.array('photos', 20), photoc.addPhotos);
router.get('/getAllPhotos', photoc.getAllPhotos);
router.delete('/deletePhoto/:id', photoc.deletePhoto); 


module.exports = router