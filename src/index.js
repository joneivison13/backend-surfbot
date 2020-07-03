const express = require('express')
const app = express()
const rotas = require('./routes')
const body = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, seNewUrlParser: true }).then(() => console.log('database is ok')).catch(err => console.log(err))

app.use(cors())
app.use(body.json())
app.use(rotas)

app.listen(process.env.PORT || 3333, () => console.log('iniciado com sucesso'))