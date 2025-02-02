const Addbudgetmodel = require('../model/budgetmodel')
const expenseModel = require('../model/expense')

module.exports.budget = async(req,res)=>{
    try{
        if( req.cookies.user._id){
            let showincome = await Addbudgetmodel.find({userId:req.cookies.user._id});
            let showexpense = await expenseModel.find({userId:req.cookies.user._id});
            let expenselabel = [];
            let pricevalue = [];
            let totalexpense = 0
            showexpense.map((v,i)=>{
                totalexpense = totalexpense + parseInt(v.price)
                expenselabel.push(v.title)
                pricevalue.push(v.price)
            })
            console.log(expenselabel)
             res.render('budgetTracker',{
                'showincome':showincome[0],
                 showexpense,
                 totalexpense,
                 expenselabel,
                 pricevalue
             
            })

        }
        else{
            return res.redirect('/')
        }
       
    }
    catch(err){
        console.log(err)
        return res.redirect('back')
    }   
}

module.exports.addbudget = async(req,res)=>{
    try{
       console.log(req.body)
        req.body.userId = req.cookies.user._id
        let addbudget =  await Addbudgetmodel.create(req.body)
        if(addbudget){
            console.log('data added succesfully to db')
            return res.redirect('back')
        }
        else{
            console.log('something went wrong')
            return res.redirect('back')
        }
    }
    catch(err){
        console.log(err)
        return res.redirect('back')
    }
}

module.exports.Addexpense = async(req,res)=>{
    try{
        console.log(req.body)
        req.body.userId = req.cookies.user._id
        let addExpense = await expenseModel.create(req.body)
        if(addExpense){
            console.log('expense added succesfuuly to db')
            return res.redirect('back')
        }
        else{
            console.log(err)
            return res.redirect('back')
        }
    }
    catch(err){
        console.log(err)
        return res.redirect('back')
    }
}

module.exports.deldata = async(req,res)=>{
    try{
        let deletedata = await expenseModel.findById(req.query.id)
        console.log(deletedata)
        let deletepath = await expenseModel.findByIdAndDelete(req.query.id)
        if(deletepath){
            console.log('data deleted succesfully')
            return res.redirect('back')
        }
        else{
            console.log('something went wrong')
            return res.redirect('back')
        }
    }
    catch(err){
        console.log(err)
        return res.redirect('back')
    }
}

module.exports.updateexp = async(req,res)=>{
    try{
       
        let updatedata = await expenseModel.findById(req.query.id)
        res.render('updateexp',{
            updatedata
        })
    }
    catch(err){
        console.log(err)
        return res.redirect('back')
    }
}

module.exports.editexp = async(req,res)=>{
    try{
        let id = req.body.id
        let editdata = await expenseModel.findById(id)
        console.log(editdata)
        await expenseModel.findByIdAndUpdate(id,req.body)
        return res.redirect('/budget')
    }
    catch(err){
        console.log(err)
        return res.redirect('back')
    }
}

module.exports.updateincome = async (req,res)=>{
    try{
        let updateincome = await expenseModel.findById(req.query.id)
        res.render('updateIncome',{
            updateincome
        })
    }
    catch(err){
        console.log(err)
        return res.redirect('back')
    }
}