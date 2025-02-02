const mongoose = require('mongoose')
const ExpenseSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
})

const expense = mongoose.model('expense',ExpenseSchema)
module.exports = expense