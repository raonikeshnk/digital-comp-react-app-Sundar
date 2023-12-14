 const express=   require('express')
 const app= express()
 require('dotenv').config()
 app.use(express.json())
 const apiRouter= require('./routers/api')
 const mongoose = require('mongoose')
 const session = require('express-session')
 mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)




app.use(session({
    secret:process.env.KEY,
    resave:false,
    saveUninitialized:false

}))

app.use('/uploads',express.static('uploads'))
app.use('/api',apiRouter)
 app.listen( process.env.PORT,()=>{console.log(`server is run start ${process.env.PORT}`)})