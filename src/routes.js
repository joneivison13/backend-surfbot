const express = require('express')
const routes = express.Router()

const mailler = require('./modules/mailer')

const Matricula = require('./database/models/user')
const Contact = require('./database/models/contact')

// Post send email
routes.post('/send-email', async (req, res) => {
    const email = req.body.email
        
    try {
        await mailler.sendMail({
            to:email,
            from:'joneivison013@gmail.com',
            subject: "Hello ✔", 
            text: "Hello world?", 
            html: "Olá seja bem vindo a <a href='localhost:3000'>sorfbot<a> criada por <strong>Joneivison oliveira</strong>, <h3>Ela não existe</h3>", 
        })
        
    } catch (error) {
        console.log(error)
    }

    return res.json({messege:'ok'})
})

// Post create month assigture to database
routes.post('/assignture', (req, res) => {
    const {valor, tipo, level, roles} = req.body
    if(!valor || !tipo || !level || !roles){
        return res.status(400).json({error:'falta dados'})
    }

    const novoAssinatura = new Matricula({valor, tipo, level, roles})

    novoAssinatura.save((err) => {
        if(err) return res.status(422).json({error:err})

        return res.json({assinatua:novoAssinatura})
    })
})

// Get matriculas for front-end
routes.get('/matriculas', (req, res) => {
    Matricula.find((err, matriculas) => {
        if(err) return res.status(403).json({error:err})
        res.json(matriculas)
    })
})

// Post contact
routes.post('/contact', (req, res) => {
    const {nome, messege, email} = req.body

    if(!nome || !messege || !email){
        return res.status(403).json({error:'Faltam dados'})
    }

    const novoContato = new Contact({nome, email, messege})

    novoContato.save(erro =>{
        if(erro) return res.status(423).json({error:err})

        res.json({contato:{novoContato}})
    })
})

// Get test
routes.get('/', (req, res) => {
    return res.send('ola')
})

module.exports = routes