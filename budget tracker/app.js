const express = require('express')
const port = 8003;
const path = require('path')
const app = express()
const cookieparser = require('cookie-parser')
// const db = require('./config/mongoose')
const mongoose = require('mongoose')
const db =  mongoose.connect('mongodb+srv://arpitshekhda45:gPbdGSGTvYJHpNev@cluster0.nwtwk.mongodb.net/budget')
if(db){
    console.log('db connected')
}
else{
    console.log('db not connected')
}

app.use(express.static(path.join(__dirname,'assets')))
app.use(express.urlencoded())
app.use(cookieparser())
app.use('/',require('./routes/Auth'))

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.listen(port,(err)=>{
    if(err){
        console.log(err)
        return false;
    }
   
    console.log('server has been started on port:',port)
})