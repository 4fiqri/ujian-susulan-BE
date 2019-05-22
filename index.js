const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 5000
app.use(bodyParser.json())

const { productList, cart } = require('./2.router')

app.get('/' , (req,res) => {
    res.send('<h1>Ini Home Page</h1>')
})

app.use('/product', productList)
app.use('/cart', cart)

app.listen(port, ()=>console.log(`connected on port ${port}`))