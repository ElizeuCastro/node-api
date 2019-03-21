const express = require('express')
const routers = express.Router()
const ProductController = require('../controllers/ProductController')

routers.get('/products', ProductController.findAll)
routers.get('/products/:id', ProductController.findById)
routers.post('/products', ProductController.create)
routers.put('/products/:id', ProductController.update)
routers.delete('/products/:id', ProductController.delete)


module.exports = routers