const express = require('express')
const routes = express.Router()
const multer = require('./src/app/middlewares/multer')//pegando ele da pasta

const productsControllers = require('./src/app/controllers/produtcsControllers')

routes.get('/' , (req, res)=>{
    return res.render('layout')
})

routes.get('/products/create' , productsControllers.create)
routes.get('/products/:id/edit' , productsControllers.edit)

routes.post('/products/create',multer.array('photos', 6), productsControllers.post) // multer vai estar em array, pois, vai ter muitos files
routes.put('/products',multer.array('photos', 6), productsControllers.put)// multer vai pegar o input e pegar seus files

routes.get('ads/products/create')

module.exports = routes
