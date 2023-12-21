 const mongoose = require('mongoose')



 const QuerySchema = mongoose.Schema({
    name:String,
    email:String,
    subject:String,
    message:String
})




 module.exports=mongoose.model('Query',QuerySchema)