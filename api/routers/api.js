const router = require('express').Router()
const regc = require('../controllers/regcontroller')
const teamc = require('../controllers/teamcontroller')
 const photoc=   require('../controllers/photocontroller')
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); 
    },
});

const upload = multer({ storage: storage });


router.post('/reg', regc.register)
router.post('/logincheck', regc.logincheck)
router.post('/addTeamMember',upload.single('img'), teamc.addTeam)
router.get('/getAllTeamMembers', teamc.getAllTeamMembers); 
router.put('/updateTeamMember/:id', upload.single('img'), teamc.updateTeamMember);
router.get('/getTeamMember/:id', teamc.getTeamMember);
router.delete('/deleteTeamMember/:id', teamc.deleteTeamMember);
router.post('/addPhoto', upload.array('photos', 5), photoc.addPhoto);
router.get('/getAllPhotos', photoc.getAllPhotos);



module.exports = router