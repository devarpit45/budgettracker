const mongoose = require('mongoose')

const AddBudgetSchema = mongoose.Schema({

    addincome:{
        type:Number,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
})

const Addbudget = mongoose.model('Addbudget',AddBudgetSchema)
module.exports = Addbudget