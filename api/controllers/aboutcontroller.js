const About = require('../models/About')

exports.getAllData = (req,res)=>{
    About.find()
}
