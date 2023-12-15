const mongoose = require('mongoose')



const photoSchema = mongoose.Schema({
    photo: String
})




module.exports = mongoose.model('photo', photoSchema)