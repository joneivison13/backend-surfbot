const mongoose = require('mongoose')

const Sale = new mongoose.Schema({
    valor:String,
    tipo:String,
    level:Number,
    roles:Array,
    id:Number,
},{timestamps:true})


module.exports = mongoose.model('Matricula', Sale)