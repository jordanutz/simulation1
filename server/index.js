const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()

const controller = require('./product_controller')

const app = express()
app.use(bodyParser.json())
app.use( express.static( `${__dirname}/../build` ) )

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
}).catch(error => console.log(error))

app.post('/api/inventory', controller.createProduct)
app.get('/api/inventory', controller.getProducts)
app.put('/api/inventory/:id', controller.editProduct)
app.delete('/api/inventory/:id', controller.deleteProduct)
app.get('/api/inventory/:id', controller.getProduct)

PORT = 1993;
app.listen(PORT, () => {
  console.log(`Blasting off to Port ${PORT}`)
})
