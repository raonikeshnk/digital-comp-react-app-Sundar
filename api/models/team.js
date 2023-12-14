const mongoose = require('mongoose')


const teamSchema = mongoose.Schema({
    name: String,
    profile: String,
    img: String,
    expreience:Number
})

module.exports = mongoose.model('team', teamSchema)