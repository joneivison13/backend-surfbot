const mongoose = require('mongoose')

const Contato = new mongoose.Schema({
    nome:String,
    email:String,
    messege:String
},{timestamps:true})


module.exports = mongoose.model('Contato', Contato)