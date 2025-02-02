const user = require('../model/usermodel')

module.exports.signup = async(req,res)=>{
    try{
        res.render('signup')
    }
    catch(err){
        console.log(err)
        return res.redirect('back')
    }
}

module.exports.signupuser = async(req,res)=>{
    try{
       console.log(req.body)
       let useremail = await user.findOne({email:req.body.email})
       if(!useremail){
            if(req.body.password == req.body.confirmpassword){
                    await user.create(req.body)
                    res.redirect('/')
            }
            else{
                console.log('password doesnt match')
                return res.redirect('back')
            }
       }
       else{
            console.log('email already exist')
            return res.redirect('back')
       }
    }
    catch(err){
        console.log(err)
        return res.redirect('back')
    }
}

module.exports.signinuser = async(req,res)=>{
    try{
        console.log(req.body)
        let isemailexist = await user.find({email:req.body.email}).countDocuments()
        if(isemailexist == 1){
            let useremail = await user.findOne({email:req.body.email});
            if(useremail.password == req.body.password){
                res.cookie('user',useremail)
                return res.redirect('/budget')
            }
            else{
                console.log('invalid password')
                return res.redirect('back')
            } 
        }
      else{
            console.log('invalid email')
            return res.redirect('back')
        } 
    }
    catch(err){
        console.log(err)
        return res.redirect('back')
    }
}