const express = require('express')
const app = express()
const rotas = require('./routes')
const body = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://joneivison13:1a2a3a4a5a6a@cluster0.9efbr.mongodb.net/test', { useUnifiedTopology: true, seNewUrlParser: true }).then(() => console.log('database is ok')).catch(err => console.log(err))

app.use(body.json())
app.use(rotas)

app.listen(3333, () => console.log('iniciado com sucesso'))