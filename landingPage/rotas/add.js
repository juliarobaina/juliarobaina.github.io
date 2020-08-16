
const express = require('express')
const router = express.Router()
const axios = require('axios')
const httpProxy = require('http-proxy');
const proxy = httpProxy.createServer({});

router.post('/add',(req, res) => {
   
    const nodemailer = require("nodemailer");
        let transporter = nodemailer.createTransport({
            service:'gmail',
        auth:{
            user:"",//colocar e-mail da sua conta
            pass:""//colcocar senha da sua conta
        }
    })

    transporter.sendMail({
        from:"Reserva de miniaturas Minions <testejs719@gmail.com>",
        to: req.body.email,
        subject: "Reservado miniatura Minion!",
        bcc:"",//email - copia secreta
        html:"<h1>Reserva feita com sucesso!</h1><p ><b>Cliente: </b> " + req.body.name2 + "</p>"
                + "<p><b>E-mail: </b> " + req.body.email + "</p>"
                + "<p><b>Telefone: </b> " + req.body.telefone + "</p>"
                + "<p><b>Miniatura: </b> "+ req.body.minionRadios +"</p>"              
                + "<p><b>Quantidade: </b> " + req.body.qtdMinions + "</p>",
                attachments: [{ // Basta incluir esta chave e listar os anexos
                    filename: req.body.minionRadios+'.jpg', // O nome que aparecerá nos anexos
                    path: './src/img/'+req.body.minionRadios+'.jpg' // O arquivo será lido neste local ao ser enviado
                    }]
        }).then(message => {
            console.log(message);
            
            
            res.redirect('/');
        }).catch(err =>{
            console.log(err);
        
    })    

    //console.log('Enviou Formulario')
})

module.exports = router

