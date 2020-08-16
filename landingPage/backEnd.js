const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))//receber tipo POST

app.get('/',(req, res) =>{
    res.send('funcionando...')
})

app.use(express.static(__dirname + './src/css'));
const rotas = require('./rotas')

app.use('/api',rotas)




app.use(express.static(__dirname + './'))









const port = 3001

app.listen(port,() =>{
    console.log('server ruuning',port)
})