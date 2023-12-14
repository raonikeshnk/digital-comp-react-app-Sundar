const router = require('express').Router()
const regc = require('../controllers/regcontroller')
const teamc = require('../controllers/teamcontroller')


router.post('/reg', regc.register)
router.post('/logincheck', regc.logincheck)
router.post('/addTeamMember', teamc.addTeam)





module.exports = router