const express = require('express')
const routes = express.Router()

const authclt = require('../controller/authclt')

routes.get('/signup',authclt.signup)
routes.post('/signupuser',authclt.signupuser)

routes.get('/',(req,res)=>{
    try{
        res.render('signin')
    }
    catch(err){
        console.log(err)
        return res.redirect('back')
    }
})

routes.get('/logout',async (req,res)=>{
    try{
        res.clearCookie("user");
        return res.redirect('/')
    }
    catch(err){
        console.log(err)
        return res.redirect('back')
    }
})

routes.post('/signinuser',authclt.signinuser)

routes.use('/budget',require('./budgetroutes'))

module.exports = routes