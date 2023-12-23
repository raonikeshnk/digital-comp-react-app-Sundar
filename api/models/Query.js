    const mongoose = require('mongoose')



    const QuerySchema = mongoose.Schema({
        name:String,
        email:String,
        subject:String,
        message:String,
        status:{type:String,default:'Email/Reply'}

    })




    module.exports=mongoose.model('Query',QuerySchema)