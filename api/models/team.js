const mongoose = require('mongoose')


const teamSchema = mongoose.Schema({
    fullName: String,
    designation: String,
    img: String,
    experience:Number
})

module.exports = mongoose.model('team', teamSchema)